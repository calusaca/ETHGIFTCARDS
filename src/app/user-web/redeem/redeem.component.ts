import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';

declare let require: any;
const requireGiftCardsPool_artifacts = require('../../../../build/contracts/GiftCardsPool.json');

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.css']
})
export class RedeemComponent implements OnInit, OnDestroy {
  accounts: string[];
  inputReference: any;

  GiftCardsPool: any;
  model = {
    account: '',
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
    this.web3Service.artifactsToContract(requireGiftCardsPool_artifacts)
      .then((GiftCardsPoolAbstraction) => {
        this.GiftCardsPool = GiftCardsPoolAbstraction;
        this.GiftCardsPool.deployed().then(deployed => {
          console.log('GiftCardsPool deployed: ' + deployed);
        });

      });
  }

  watchAccount() {
    this.eventSubscription =  this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
    });
    this.web3Service.refreshAccountsInitial();
  }

  async checkCardId() {
    console.log('Get gift card info by id');

    try {
      const deployedGiftCardsPool = await this.GiftCardsPool.deployed();
      console.log(deployedGiftCardsPool);
      const giftCardBalance = await deployedGiftCardsPool.getGiftCardBalance.call(this.model.giftCardId, {from: this.model.account});
      console.log('Found balance: ' + giftCardBalance);
      this.model.giftCardAmount = this.web3Service.convertFromWei(giftCardBalance);
      this.model.giftCardId = this.model.giftCardId;
      this.model.showGiftCard = true;
      this.clearInput(this.inputReference);
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  setCardId(e) {
    this.inputReference = e;
    this.model.giftCardId = e.target.value;
    console.log('Setting cardId: ' + e.target.value);
  }

  clearInput(e) {
    e.target.value = '';
  }

  hideGiftCard(){
    this.model.showGiftCard = false;
    this.model.giftCardId = '';
    this.model.giftCardAmount = 0;
  }

  async redeem() {
    try {
      const deployedGiftCardsPool = await this.GiftCardsPool.deployed();
      console.log(deployedGiftCardsPool);
      const giftCardBalance = await deployedGiftCardsPool.redeem.sendTransaction(this.model.giftCardId, {from: this.model.account});
      console.log('Found balance: ' + giftCardBalance);
      this.hideGiftCard();
      this.setStatus('ETH Succesfully transfered to your selected wallet');
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  ngOnDestroy(): void {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }

}
