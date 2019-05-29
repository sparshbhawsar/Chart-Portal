import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';


@Component({
  selector: 'app-createchart',
  templateUrl: './createchart.component.html',
  styleUrls: ['./createchart.component.css']
})
export class CreatechartComponent implements AfterViewInit {

  datasets: Array<{ x: ConstrainDouble, y: ConstrainDouble, c: ConstrainDouble, u: ConstrainDouble }> = []
  XValues:Array<ConstrainDouble>
  YValues:Array<ConstrainDouble>
  labelX:string;
  labelY:string;
  Chartname:Array<ConstrainDouble>;
  UserID:Array<ConstrainDouble>;
  chartType:string;
  chartTypes:Array<any>;
  userID:number;

  addvalues(valueX: any, valueY: any, chartname: any, userid: any): void {
    this.datasets.push({ x: valueX, y: valueY, c: chartname, u: userid });
  }
 
  insertData(chartType:string): void {
    this.chartType=chartType;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new URLSearchParams();
    let data={
      "chartid":5,
      "datasets":JSON.stringify(this.datasets)
    }
    this._http.post('http://localhost/chartform/src/app/insertdata.php',(data), 
    {headers: headers}).subscribe(res=>console.log(res));
    this.loadData();
  }
  loadData():void{
    this.XValues=[]
    this.YValues=[]
    this.Chartname=[]
    this.UserID=[]
    this.datasets.forEach(element => {
      this.Chartname.push(element.c);
      this.UserID.push(element.u);
      this.XValues.push(element.x);
      this.YValues.push(element.y);

    });
    this.showChart();

  }
  showChart():void{
    let X = this.XValues
    let Y =this.YValues
    let C = this.Chartname
    let U = this.UserID
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: this.chartType,
      data: {
        labels: this.XValues,
        datasets: [
          {
            data: this.YValues,
            borderColor: '#3cba9f',
            fill: false,
            labels:this.XValues
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })
  }
  
  chart: any;
  @ViewChild('canvas') canvas: ElementRef;
  constructor(public _http: HttpClient)
   {
    this._http.get("http://localhost/chartform/src/app/getcharttypes.php")
    .subscribe(res=>this.chartTypes=Array.of(res))
  }


  ngAfterViewInit(){
    this.userID=parseInt(localStorage.getItem("userID"));
  }
}



