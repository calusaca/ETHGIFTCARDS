import { Component, OnInit } from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

declare let require: any;
const lendingPool_artifacts = require('../../../../build/contracts/LendingPool.json');

@Component({
  selector: 'app-lending-admin',
  templateUrl: './lending-admin.component.html',
  styleUrls: ['./lending-admin.component.css']
})
export class LendingAdminComponent implements OnInit {
  accounts: string[];
  LendingPool: any;

  eventSubscription: Subscription;

  model = {
    amount: 0,
    enrolled: false,
    balance: 0,
    account: ''
  };

  status = '';

  constructor(private web3Service: Web3Service, private matSnackBar: MatSnackBar) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit() {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.web3Service.artifactsToContract(lendingPool_artifacts)
      .then((LendingPoolAbstraction) => {
        this.LendingPool = LendingPoolAbstraction;
        this.LendingPool.deployed().then(deployed => {
          console.log(deployed);
          deployed.LogDepositMade({}, (err, ev) => {
            console.log('Transfer event came in, refreshing balance');
            this.refreshBalance();
          });
          deployed.LogWithdrawal({}, (err, ev) => {
            console.log('Withdrawal event came in, refreshing balance');
            this.refreshBalance();
          });
        });
      });
  }

  watchAccount() {
    this.eventSubscription = this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
    });
    this.web3Service.refreshAccountsInitial();
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedLendingPool = await this.LendingPool.deployed();
      console.log(deployedLendingPool);
      console.log('Account', this.model.account);
      const lendingPoolBalance = await deployedLendingPool.getBalance.call({from: this.model.account});
      const lendingIsEnrolled = await deployedLendingPool.isEnrolled.call({from: this.model.account});
      console.log('Is Current wallet enrolled: ' + lendingIsEnrolled);
      console.log('Found balance: ' + lendingPoolBalance);
      this.model.balance = this.web3Service.convertFromWei(lendingPoolBalance);
      this.model.enrolled = lendingIsEnrolled;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  async enrollLender() {
    if (!this.LendingPool) {
      this.setStatus('Lending Pool is not loaded, unable to send transaction');
      return;
    }

    // const amount = this.model.amount;
    // const receiver = this.model.receiver;

    // console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction (enroll lender)... (please wait)');
    try {
      const deployedLendingPool = await this.LendingPool.deployed();
      const transaction = await deployedLendingPool.enroll({from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        this.model.enrolled = true;
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  async depositFunds() {
    if (!this.LendingPool) {
      this.setStatus('Lending Pool is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;

    console.log('Deposit eth to the liquitidy pool ' + amount);

    this.setStatus('Initiating transaction (deposit funds)... (please wait)');
    try {
      const deployedLendingPool = await this.LendingPool.deployed();
      const transaction = await deployedLendingPool.deposit.sendTransaction({from: this.model.account, value: amount});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        this.model.amount = 0;
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error deposit funds; see log.');
    }
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    if (e.target.value !== '') {
     this.model.amount = this.web3Service.convertToWei(e.target.value);
    }
    console.log('this.model.amount: ' + this.model.amount);
  }

  async withdrawFunds() {
    if (!this.LendingPool) {
      this.setStatus('Lending Pool is not loaded, unable to send transaction');
      return;
    }

    console.log('Withdraw eth from the liquitidy pool ');

    this.setStatus('Initiating transaction (withdraw funds)... (please wait)');
    try {
      const deployedLendingPool = await this.LendingPool.deployed();
      const transaction = await deployedLendingPool.withdraw.sendTransaction({from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error withdrawing funds; see log.');
    }
  }

  ngOnDestroy(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
