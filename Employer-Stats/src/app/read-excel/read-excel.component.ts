import { Component, OnInit } from '@angular/core';

// import { utils, read, XLSX$Utils} from 'xlsx';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-excel',
  templateUrl: './read-excel.component.html',
  styleUrls: ['./read-excel.component.css']
})
export class ReadExcelComponent implements OnInit {

  fileToUpload: File = null;
  isDropdownLoaded = false;
  startProgress = false;
  workbookData: any;
  employeeName = [];
  employeeDataMap = new Map();
  showChart = false;

  constructor() { }

  ngOnInit() {

  }

  handleFile(e) {
    // this.fileToUpload = files.item(0);
    let files = e.target.files, f = files[0];
    let reader = new FileReader();
    reader.onload = (e: any) => {
    let data = new Uint8Array(e.target.result);
    let workbook = XLSX.read(data, {type: 'array'});
    this.workbookData = workbook;
    this.startProgress = true;
    /* DO SOMETHING WITH workbook HERE */
  };
  reader.readAsArrayBuffer(f);
  }

  populateDropDown() {
    let worksheet1Json = XLSX.utils.sheet_to_json(this.workbookData.Sheets['2019'], {
      header: 1,
      defval: '',
      blankrows: true
    }); 
    let worksheet1JsonLength = worksheet1Json.length;
    for (let i=2; i < worksheet1JsonLength; i++) {
      this.employeeName.push(worksheet1Json[i][0])
    }
    this.isDropdownLoaded = true;
  }

  onSelectEmployee(employeeName) {
    this.showChart = false;
    this.employeeDataMap.clear();
    let sampleMap = new Map();
    this.employeeDataMap = sampleMap;
    this.employeeDataMap.set('Employee', employeeName);
    let juneJSON = XLSX.utils.sheet_to_json(this.workbookData.Sheets['June'], {
      header: 1,
      defval: '',
      blankrows: true
    });
    this.employeeDataMap.set('June', this.filterEmployeeSpecificInformation(juneJSON, employeeName));
    let julyJSON = XLSX.utils.sheet_to_json(this.workbookData.Sheets['July'], {
      header: 1,
      defval: '',
      blankrows: true
    });
    this.employeeDataMap.set('July', this.filterEmployeeSpecificInformation(juneJSON, employeeName));
    let augustJSON = XLSX.utils.sheet_to_json(this.workbookData.Sheets['Aug'], {
      header: 1,
      defval: '',
      blankrows: true
    });
    this.employeeDataMap.set('August', this.filterEmployeeSpecificInformation(augustJSON, employeeName));

    let septemberJSON = XLSX.utils.sheet_to_json(this.workbookData.Sheets['Sep'], {
      header: 1,
      defval: '',
      blankrows: true
    });
    this.employeeDataMap.set('September', this.filterEmployeeSpecificInformation(septemberJSON, employeeName));

    let octJSON = XLSX.utils.sheet_to_json(this.workbookData.Sheets['Oct'], {
      header: 1,
      defval: '',
      blankrows: true
    });
    this.employeeDataMap.set('October', this.filterEmployeeSpecificInformation(octJSON, employeeName));

    let novemberJSON = XLSX.utils.sheet_to_json(this.workbookData.Sheets['Nov'], {
      header: 1,
      defval: '',
      blankrows: true
    });
    this.employeeDataMap.set('November', this.filterEmployeeSpecificInformation(juneJSON, employeeName));
    
    this.showChart = true;
  }

  filterEmployeeSpecificInformation(monthJSON, employeeName) {
    let monthObject = {
      'validity': false,
      'onbScore': 0,
      'retentionScore': 0,
      'qualityScore': 0
    }
    let coordinate = null;
    let length = monthJSON.length;
    for (let i=4; i<length; i++) {
      if (employeeName === monthJSON[i][0]) {
        monthObject['validity'] = true;
        monthObject['onbScore'] = monthJSON[i][18]
        monthObject['retentionScore'] = monthJSON[i][19]
        monthObject['qualityScore'] = monthJSON[i][20]
      }
    }
    return monthObject;
  }

}
