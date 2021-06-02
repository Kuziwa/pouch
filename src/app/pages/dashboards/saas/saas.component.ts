import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DbService } from 'src/app/db.service';

import { earningLineChart, salesAnalyticsDonutChart, ChatData } from './data';

import { ChartType, ChatMessage } from './saas.model';

@Component({
  selector: 'app-saas',
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss']
})
export class SaasComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: string;
  earningLineChart: ChartType;
  salesAnalyticsDonutChart: ChartType;
  ChatData: ChatMessage[];

  formData: FormGroup;

  // Form submit
  chatSubmit: boolean;

  configData; 
  newUploads: any=[];
  updatedFiles: any=[];
 
  constructor(public formBuilder: FormBuilder, private dbs: DbService) { }
  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Saas', active: true }];
    this.updatedFiles=[];
    this._fetchData();
    this.dbs.collection$('files').subscribe(data=>{
      console.log(data);
      data.forEach(file=>{
        if (file['updated']==true && file['department']=='HR'){
          this.updatedFiles.push(file);
          console.log(this.updatedFiles);
          
        }else{
          this.newUploads.push(file)
        }
      })
      
    })

    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message').value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.ChatData.push({
        align: 'right',
        name: 'Henry Wells',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null
      });
    }

    this.chatSubmit = true;
  }

  private _fetchData() {
    this.earningLineChart = earningLineChart;
    this.salesAnalyticsDonutChart = salesAnalyticsDonutChart;
    this.ChatData = ChatData;
  }
}
