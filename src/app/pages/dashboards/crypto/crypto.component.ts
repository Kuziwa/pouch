import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { walletRadialChart, overviewChart, transactionsData, bitconinChart, ethereumChart, litecoinChart } from './data';

import { ChartType, Transactions } from './crypto.model';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  walletRadialChart: ChartType;
  overviewChart: ChartType;
  bitconinChart: ChartType;
  ethereumChart: ChartType;
  litecoinChart: ChartType;

  transactionsData: Transactions[];

  configData;
  newUploads: any=[];
  updatedFiles: any=[];

  constructor(private dbs: DbService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Crypto', active: true }];

    //this._fetchData();
  this.dbs.collection$('files').subscribe(data=>{
    console.log(data);
    data.forEach(file=>{
      if (file['updated']==true){
        this.updatedFiles.push(file)
      }else{
        this.newUploads.push(file)
      }
    })
    
  })
    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };
  }


  private _fetchData() {
    this.walletRadialChart = walletRadialChart;
    this.overviewChart = overviewChart;
    this.transactionsData = transactionsData;
    this.bitconinChart = bitconinChart;
    this.ethereumChart = ethereumChart;
    this.litecoinChart = litecoinChart;
  }
}
