import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-employee-stats',
  templateUrl: './employee-stats.component.html',
  styleUrls: ['./employee-stats.component.css']
})
export class EmployeeStatsComponent implements OnInit, OnChanges {
  @Input('employeeDataMap') employeeDataMap;
  title;
  type;
  data = [];
  columnNames = [];
  options;
  width;
  height;
  constructor() { }

  ngOnInit() {
    console.log(this.employeeDataMap);
    this.title = 'Performance Evaluation';
    this.type = 'BarChart';
    this.data = [
       ["June", this.employeeDataMap.get('June').onbScore, this.employeeDataMap.get('June').retentionScore, this.employeeDataMap.get('June').qualityScore],
       ["July", this.employeeDataMap.get('July').onbScore, this.employeeDataMap.get('July').retentionScore, this.employeeDataMap.get('July').qualityScore],
       ["August", this.employeeDataMap.get('August').onbScore, this.employeeDataMap.get('August').retentionScore, this.employeeDataMap.get('August').qualityScore],
       ["September", this.employeeDataMap.get('September').onbScore, this.employeeDataMap.get('September').retentionScore, this.employeeDataMap.get('September').qualityScore],
       ["October", this.employeeDataMap.get('October').onbScore, this.employeeDataMap.get('October').retentionScore, this.employeeDataMap.get('October').qualityScore],
       ["November", this.employeeDataMap.get('November').onbScore, this.employeeDataMap.get('November').retentionScore, this.employeeDataMap.get('November').qualityScore]
    ];
    this.columnNames = ['Month', 'On Board Score','Retention Score', 'Quality Score'];
    this.options = {   
       hAxis: {
          title: 'Performance - ' + this.employeeDataMap.get('Employee')
       },
       vAxis:{
          minValue:0
       }  
    };
    this.width = 750;
    this.height = 600;
 }

 ngOnChanges() {
  console.log(this.employeeDataMap);
  this.title = 'Performance Evaluation';
    this.type = 'BarChart';
    this.data = [
       ["June", this.employeeDataMap.get('June').onbScore, this.employeeDataMap.get('June').retentionScore, this.employeeDataMap.get('June').qualityScore],
       ["July", this.employeeDataMap.get('July').onbScore, this.employeeDataMap.get('July').retentionScore, this.employeeDataMap.get('July').qualityScore],
       ["August", this.employeeDataMap.get('August').onbScore, this.employeeDataMap.get('August').retentionScore, this.employeeDataMap.get('August').qualityScore],
       ["September", this.employeeDataMap.get('September').onbScore, this.employeeDataMap.get('September').retentionScore, this.employeeDataMap.get('September').qualityScore],
       ["October", this.employeeDataMap.get('October').onbScore, this.employeeDataMap.get('October').retentionScore, this.employeeDataMap.get('October').qualityScore],
       ["November", this.employeeDataMap.get('November').onbScore, this.employeeDataMap.get('November').retentionScore, this.employeeDataMap.get('November').qualityScore]
    ];
    this.columnNames = ['Month', 'On Board Score','Retention Score', 'Quality Score'];
    this.options = {   
       hAxis: {
          title: 'Performance - ' + this.employeeDataMap.get('Employee')
       },
       vAxis:{
          minValue:0
       }  
    };
    this.width = 750;
    this.height = 600;
 }
 
}
