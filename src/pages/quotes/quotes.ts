import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Quote } from '../../data/data.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navParams: NavParams, public navCtrl: NavController) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  } 

}
