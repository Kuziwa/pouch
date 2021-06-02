import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Spline from 'cubic-spline';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { DealService } from 'src/app/services/shared/deal.service';
import { reduce } from 'rxjs/operators';
import * as moment from 'moment';
import { DbService } from 'src/app/db.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

/**
 * Basic table component
 */
export class BasicComponent implements OnInit {


  // bread crumb items
  breadCrumbItems: Array<{}>; 
  rateArray: any[] = [];
  deals: any = [];
  margins: any = [];
  rateChart: any = {};
  keys: any = [];
  rate: any = [];
  smoothed: any = []
  fwdCurve: any=[];
  clientFilter: any;
  showGraph: boolean = false;
  Highcharts = Highcharts;
  Spline = Spline;
  spotRates: any = [];
  discountFactor: any = [];
  spotRates2: any = [];
  consolidated: any ={}
  // times: any = [0.25, 0.5, 0.75, 1, 1.25, 1.5,  2, 3,  5, 7, 10, 12,15, 20, 25, 30]
  // yields: any = [3.8, 4.3, 4.85, 5.2, 5.5, 5.7,  6.1, 6.95, 8, 8.8, 9.7, 10.2, 10.8, 11.160, 11.25, 11.29]
  // times = [1,2,3,4];
  // yields = [10,10.526,11.076,11.655]
  coupons = [5, 11.5, 13]
  times = [0.5,1,1.5,2,2.5];
  yields = [0.75,0.85,0.98,1.2,1.32]
  otherTimes: any = [];
  orig: any=[];
  yieldCurves: any=[];
  newCurve: any={};
  baseDate: any = moment().format('YYYY-MM-DD');
  horizonType: any = 0;
  horizons: any;
  horizonCount: number = 0;
  fwdRates: any=[];
  fwds: any[];
  frequency: number;
  parYields = []
  // constructor(public dealService: DealService) { }

  clients : any[] =[]
  passedInspections=[];
  selectedClient: any;
  completeInspections: any=[];
  constructor(private modalService: NgbModal, public db:DbService) { }

  public horizonTypeChanged(){
    console.log(this.horizonType); 
  }

  public saveCurve(){
    this.yieldCurves.push(this.newCurve); 
    console.log(this.yieldCurves);
    
  }

  public setHorizonDates(){
    console.log(this.baseDate);
    let myHorizonDates=[]; let horizonObject={}
    for (let i=1; i<this.horizonCount+1; i++){
      console.log(this.horizonType);
      console.log(i);
      
      horizonObject={};
      horizonObject['timeHorizoneDate'] = moment(this.baseDate).add(i, this.horizonType).format('YYYY-MM-DD');
      myHorizonDates.push(horizonObject)
    }
    console.log(myHorizonDates);
    
    this.rateArray.forEach(rate=>{
      rate.timeHorizoneDate = moment(this.baseDate).add(rate.time, 'years').format('YYYY-MM-DD')
    })
    
  }

  public calcFwd(){
    //  console.log(this.fwds);
     let spots = this.rateArray
     for (let i=1; i<spots.length; i++){
      let S1=spots[i].spot;  let S2=spots[i-1].spot
      let n1=spots[i].time; let n2 = spots[i-1].time
      spots[i].fwd = 100*(spots[i-1].discountFactor/spots[i].discountFactor-1)*this.frequency
      spots[i].fwd2 = (S1*n1-S2*n2)/(n1-n2)
     
  }
  console.log(spots);
  
     
  }

  public calcPrices(){
    let prices=[]; let df=0
    let sum=0; let pmnt=0;
    this.coupons.forEach(coupon=>{
      sum=0;  
      for (let i=1; i<5; i++){
        if (i==4){ pmnt = 100+coupon}
        else { pmnt = coupon }
        df=this.rateArray[i-1].discountFactor2;
        sum+=pmnt*df; 
        console.log(df+' '+pmnt+' '+sum);
        
      }
      prices.push(sum);
    })
    console.log(prices);
    let num = 0;  let den=0
    for (let i=1; i<5; i++){
      num = 1-this.rateArray[i-1].discountFactor2
      if (i==1){ 
        den = this.rateArray[0].discountFactor2;
        console.log(den);
        console.log('*********'); 
      }else{
      for (let k = 1; k<i; k++){ 
          den+=this.rateArray[k-1].discountFactor2 
      } }
      let answ=num/den
      console.log(i+' '+num+' '+den+' '+answ);  
    }
  }
   
  public run() {

    this.orig=[];
    this.smoothed = []
    this.fwds=[]

    this.spotRates[0] = this.rateArray[0].rate;
    this.spotRates2[0] = this.rateArray[0].rate;
    this.rateArray[0].spot = this.rateArray[0].rate;
    this.rateArray[0].fwd = this.rateArray[0].rate;
    this.discountFactor[0] = 1 / Math.pow((1 + this.rateArray[0].rate / 100), this.times[0]);
    this.rateArray[0]['discountFactor']= 1 / (1 + this.rateArray[0].rate * this.times[0] / 100);
    this.rateArray[0]['discountFactor2']= 1 / (1 + this.rateArray[0].rate * this.times[0] / 100);
    this.rateArray.forEach(data => {
      data['coupon'] = data.rate / this.frequency;
    });
    for (let i = 0; i < this.rateArray.length; i++) {
      let knownCashFlows = 0;
      let PV;
      console.log(this.rateArray[i].coupon);
      let coupon = this.rateArray[i].coupon
      
      for (let j = 0; j <= i; j++) {

        // calculate PV of known cashflows
        if (j == 0 && i == 0) {
          PV = coupon
        }
        if (j != i) {
          PV = coupon / Math.pow((1 + this.spotRates[j] / (this.frequency*100)), (j + 1))
          // PV = (this.spotRates[j]/2) / Math.pow((1 + this.rateArray[j].rate / 200), (j + 1))
          knownCashFlows += PV;
          console.log(i + ' ' + j + ' ' + coupon + ' ' + this.spotRates[j] + ' ' + PV + ' ' + knownCashFlows + ' *');
        }



        if (j < 4) {
          console.log(knownCashFlows); 
        }
        if (i === j && i != 0) {
          //solve for current spot rate
          // Math.pow(x, 1 / n);
          let temp = Math.pow((coupon + 100) / (100 - knownCashFlows), 1 / (j + 1)) - 1;
          let temp2 = Math.pow((coupon + 100) / (100 - knownCashFlows), 1 / j) - 1;
          this.spotRates[j] = temp * this.frequency* 100;
          this.rateArray[j]['spot'] = this.spotRates[j];
          this.spotRates2[j] = temp2 * 100 / 2;
          this.margins[j] = this.spotRates[j] - this.rateArray[j]['rate']
          this.rateArray[j]['margin'] = this.margins[j];
          this.rateArray[j]['discountFactor'] =  Math.exp(-1*this.rateArray[j].rate / 100 * this.times[j])
          this.rateArray[j]['discountFactor2'] =  1/Math.pow(1+this.rateArray[j].rate / 100,this.times[j])
          this.rateArray[j]['fwd'] = 100*(this.rateArray[i-1].discountFactor/this.rateArray[i].discountFactor-1)*this.frequency
          let S1=this.rateArray[i].spot;  let S2=this.rateArray[i-1].spot
          let n1=this.rateArray[i].time; let n2 = this.rateArray[i-1].time
            this.rateArray[i].fwd2 = (S1*n1-S2*n2)/(n1-n2)
          let yspot = 2*(Math.pow((1/this.rateArray[j]['discountFactor2']),(1/(this.frequency*this.rateArray[j].time)))-1)
      this.rateArray[j].spot2=yspot*100
          console.log(i + ' ' + j + ' ' + this.rateArray[j]['rate'] + ' ' + this.spotRates[j] + ' ' + knownCashFlows);
        }
        if (i == 0) {
          console.log(i + ' ' + j + ' ' + this.rateArray[j]['rate'] + ' ' + this.spotRates[j] + ' ' + knownCashFlows);
        }
      }
      // Save new spot rate
    }
    console.log(this.rateArray);

    this.keys = [];
    this.rate = [];
    this.rateArray.forEach(data => {
      this.keys.push(data.time);
      this.rate.push(data.rate);
      this.fwds.push(data.fwd)
    });

    this.rateArray[0].fwd=this.rateArray[0].rate

    // Elegant math
    // this.fwdRates[0]=this.rateArray[0].rate
    // for (let i=0; i<this.rateArray.length-1; i++){
    //     console.log(i);
    //    this.rateArray[i+1].fwd  = (this.rateArray[i+1].rate*this.rateArray[i+1].time - this.rateArray[i].rate*this.rateArray[i].time)/(this.rateArray[i+1].time -this.rateArray[i].time);
    //    this.fwdRates[i+1]=this.rateArray[i+1].fwd
    // }

    console.log(this.spotRates);
    console.log(this.rate);
    let spline = new Spline(this.times, this.spotRates)
    let spline2 = new Spline(this.times, this.rate)
    let fwdspline = new Spline(this.times, this.fwds)
    // let fwdSpline = new Spline(this.times, this.fwdRates)
    let turbo=12*this.times[this.times.length-1]
  let obj={}
     for (let i = 0; i < turbo; i++) {
       let tt=i/12
      this.smoothed.push(spline.at(tt)); 
      this.fwdCurve.push(fwdspline.at(tt))
      this.orig.push(spline2.at(tt))
      this.otherTimes.push(tt)
      let myObj = {};
      myObj = {
        'zeroRate': spline2.at(tt),
        'fwdRate': spline.at(tt),
        // 'fwdRate2': spline.at(tt)/12,
        'discountFactor': 1 / Math.pow((1 + spline2.at(tt) / 100), tt),
        'df2': Math.exp(-1*tt*spline2.at(tt)/100),
        'timeHorizonDate':moment(this.baseDate).add(tt, 'years').format('YYYY-MM-DD')
      }
      this.consolidated[tt]=myObj;
    }
    
    let myData=[{
      'name': 'Spot Curve',
      'data': this.smoothed,
      'marker': { enabled: false },
      color: 'red',
      visible: true,
      showInLegend: true,
    }, {
      'name': 'FWD Curve',
      'data': this.fwdCurve,
      'marker': { enabled: false },
      color: 'yellow',
      visible: true,
      showInLegend: true,
    },
    {
      'name': 'Swap Curve',
      'data': this.orig,
      'marker': { enabled: false },
      visible: true,
      showInLegend: true,
    }];
    this.rateChart = {
      series: myData,
      plotOptions:
      {
        series:
        {

          connectNulls: true,
          marker:
          {
            enabled: true,
            value: 'x'
          }
        }
      },
      chart: { type: 'spline' },
      title: { text: 'Swap Curve' },
      subtitle: { text: 'Bootstraping' }, 
      xAxis: { categories: this.otherTimes, tickInterval:5,
        labels: { 
          format: '{value:.1f}'
      } },
      yAxis: { title: { text: '' } },
      legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle' },
      // rangeSelector: { selected: 1 },
    };

    this.showGraph = true;
  }

  public runIns(){
    this.clients.forEach(client=>{
      if (client.name=='Lisa Dere'){
        client.passedInspections.forEach(nme => {
          let obj={'name':nme}
          this.db.updateAt('levels',obj)
        });
      }
    })
  }
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Inspections', active: true }];
    
    this.db.collection$('clients').subscribe(data=>{
      this.clients=data;
      this.runIns();
    })
    let spline = new Spline(this.times, this.yields)
    // for (let i = 0; i < 30; i++) {
    //   this.smoothed.push(spline.at(i));
    //   this.otherTimes.push(i)
    // }
    // this.rateChart = {
    //   series: [
    //     {
    //       data: this.smoothed,
    //       name: 'Smootheed',
    //       marker: { enabled: false },
    //     }
    //   ],
    //   chart: { type: 'spline' },
    //   title: { text: 'Spot Curve' },
    //   subtitle: { text: 'Bootstraping' },
    //   xAxis: { categories: this.otherTimes },
    //   yAxis: { title: { text: '' } },
    //   legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle' },
    //   rangeSelector: { selected: 1 },
    // };

    // this.showGraph = true;
    for (let i = 0; i < this.times.length; i++) {
      let myObj = {};
      let time = (i + 1) / 2;
      // myObj['time'] = time;
      myObj['time'] = this.times[i];
      myObj['rate'] = this.yields[i]
      console.log(myObj);
      this.rateArray.push(myObj);
    }
    console.log(this.rateArray);


  }

    /**
   * Open scroll modal
   * @param scrollDataModal scroll modal data
   */
  scrollModal(scrollDataModal: any, client) {
    this.modalService.open(scrollDataModal, { scrollable: true });
    this.selectedClient = client
  }
  
  public completeInspection(){
    
  }

  public saveChanges(str){ 
      this.selectedClient.approved=str 
      this.completeInspections.push(this.selectedClient);
      let i=0;
      this.clients.forEach(cl=>{
        if (cl.standNo==this.selectedClient.standNo){
          this.clients.splice(i,1) 
        }
        i++;
      })
  }
}
