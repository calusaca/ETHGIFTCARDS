import { Component, OnDestroy, OnInit } from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';


declare let require: any;
const lendingPool_artifacts = require('../../../../build/contracts/LendingPool.json');
const requireGiftCardsPool_artifacts = require('../../../../build/contracts/GiftCardsPool.json');

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit, OnDestroy {
  accounts: string[];
  LendingPool: any;

  buyInputReference: any;

  GiftCardsPool: any;

  GiftCardsPoolAddress: string;

  model = {
    totalPoolBalance: 0,
    account: '',
    amount: 0,
    giftCardAmount: 0,
    giftCardId: '',
    showGiftCard: false
  };

  eventSubscription: Subscription;

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
          deployed.LogNewGiftCard({}, (err, ev) => {
            console.log('New Gift card event came in, refreshing balance');
            this.refreshBalance();
          });
        });

      });
      this.web3Service.artifactsToContract(requireGiftCardsPool_artifacts)
      .then((GiftCardsPoolAbstraction) => {
        this.GiftCardsPool = GiftCardsPoolAbstraction;
        this.GiftCardsPool.deployed().then(deployed => {
          console.log('GiftCardsPool deployed: ' + deployed);
          this.GiftCardsPoolAddress = deployed.address;
        });

      });
  }

  watchAccount() {
    this.eventSubscription =  this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
    });
    this.web3Service.refreshAccountsInitial();
  }

  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedLendingPool = await this.LendingPool.deployed();
      console.log(deployedLendingPool);
      const lendingPoolBalance = await deployedLendingPool.getPoolTotal.call({from: this.model.account});
      console.log('Found balance: ' + lendingPoolBalance);
      this.model.totalPoolBalance = this.web3Service.convertFromWei(lendingPoolBalance);
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  setAmount(e) {
    this.buyInputReference = e;
    console.log('Setting amount: ' + e.target.value);
    if (e.target.value !== '') {
     this.model.amount = this.web3Service.convertToWei(e.target.value);
    }
    console.log('this.model.amount: ' + this.model.amount);
  }

  clearInput(e) {
    e.target.value = '';
  }

  async generateSell() {
    if (!this.LendingPool) {
      this.setStatus('Lending Pool is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;

    console.log('Sell eth from the liquitidy pool ' + amount);

    this.setStatus('Initiating transaction (sell eth)... (please wait)');
    try {
      const deployedLendingPool = await this.LendingPool.deployed();
      // tslint:disable-next-line:max-line-length
      const transaction =
        await
        deployedLendingPool.newGiftCard.sendTransaction(this.GiftCardsPoolAddress, amount, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
        console.log('Transaction complete: ' + transaction);
        this.model.amount = 0;
        this.clearInput(this.buyInputReference);
        this.model.giftCardId = transaction.logs[1].args.cardId.toString();
        this.model.giftCardAmount = this.web3Service.convertFromWei(transaction.logs[1].args.giftCardAmount.toString());
        this.model.showGiftCard = true;
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error deposit funds; see log.');
    }
  }

  hideGiftCard(){
    this.model.showGiftCard = false;
    this.model.giftCardId = '';
    this.model.giftCardAmount = 0;
  }

  ngOnDestroy(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
