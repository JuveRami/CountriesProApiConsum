import { Component } from '@angular/core';
import { ApiService } from './api.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-countries';
  fileName = 'ExcelCountries.xlsx';
  allCountries:any;
  constructor(private api:ApiService) { 

  }
  exportExcel():void{
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);
    
    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws, 'Country_sheet1');

    XLSX.writeFile(wb,this.fileName)
  }

  ngOnInit(){
    this.api.apiCountryAll().subscribe((data)=>{
      console.log("get api data",data);
      this.allCountries = data;
    })
  }
}
