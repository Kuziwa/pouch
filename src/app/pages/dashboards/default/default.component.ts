import { Component, OnInit } from '@angular/core';

import { emailSentBarChart, monthlyEarningChart, transactions, statData } from './data';

import { ChartType } from './dashboard.model';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  transactions;
  statData;
  newUploads: any=[];
  updatedFiles: any=[];

  constructor(private dbs: DbService) { }

  ngOnInit() {
    this.updatedFiles=[];
    this.dbs.collection$('files').subscribe(data=>{
      console.log(data);
      data.forEach(file=>{
        if (file['updated']==true && file['department']=='Finance'){
          this.updatedFiles.push(file);
          console.log(this.updatedFiles);
          
        }else{
          this.newUploads.push(file)
        }
      })
      
    })
    /**
     * Fetches the data
     */
    this.fetchData();
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;
    this.transactions = transactions;
    this.statData = statData;
  }

}
