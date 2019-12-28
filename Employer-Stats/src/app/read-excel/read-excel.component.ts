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

  constructor() { }

  ngOnInit() {

  }

  handleFile(e) {
    // this.fileToUpload = files.item(0);
    let files = e.target.files, f = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
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
    console.log(worksheet1Json);
    let worksheet1JsonLength = worksheet1Json.length;
    for (let i=2; i < worksheet1JsonLength; i++) {
      this.employeeName.push(worksheet1Json[i][0])
    }
    this.isDropdownLoaded = true;
  }

}
