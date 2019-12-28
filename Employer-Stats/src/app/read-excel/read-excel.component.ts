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

  constructor() { }

  ngOnInit() {

  }

  handleFile(e) {
    // this.fileToUpload = files.item(0);
    let files = e.target.files, f = files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
    let data = new Uint8Array(e.target.result);
    let workbook = XLSX.read(data, {type: 'array'});
    /* DO SOMETHING WITH workbook HERE */
    let worksheet1Json = XLSX.utils.sheet_to_json(workbook.Sheets['2019']);
    console.log(worksheet1Json);
  };
  reader.readAsArrayBuffer(f);
  }

}
