import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent implements OnInit {

  data: string[] = [];
  rotation: string[] = [];
  error: boolean = false;

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.data = this.sharedDataService.getValue();
    this.buildTableStatic(this.data);
    this.buildTableRotation(this.data);
  }

  buildTableStatic(data: string[]) {
    if(this.checkLength(data.length)) {
      let sizeRow = data.length === 9 ? 3 : (data.length / 2);
      let sizeColumn = data.length === 9 ? 3 : 2;

      this.createRowAndColumnDOM(sizeRow, sizeColumn, 'body-static', true);
      return this.error = false;
    }

    return this.error = true;
  }

  buildTableRotation(data: string[]) {
    if(data.length === 4) {

      this.rotation[0] = data[2];
      this.rotation[1] = data[0];
      this.rotation[2] = data[3];
      this.rotation[3] = data[1];

      this.createRowAndColumnDOM(2, 2, 'body-rotation', false);
    }

    if(data.length === 6) {
      this.rotation[0] = data[2];
      this.rotation[1] = data[0];
      this.rotation[2] = data[4];
      this.rotation[3] = data[1];
      this.rotation[4] = data[5];
      this.rotation[5] = data[3];

      this.createRowAndColumnDOM(3, 2, 'body-rotation', false);             
    }

    if(data.length === 8) {
      this.rotation[0] = data[2];
      this.rotation[1] = data[0];
      this.rotation[2] = data[4];
      this.rotation[3] = data[1];
      this.rotation[4] = data[6];
      this.rotation[5] = data[3];
      this.rotation[6] = data[7];
      this.rotation[7] = data[5];

      this.createRowAndColumnDOM(4, 2, 'body-rotation', false);              
    }

    if(data.length === 9) {      
        this.rotation[0] = data[3];
        this.rotation[1] = data[0];
        this.rotation[2] = data[1];
        this.rotation[3] = data[6];
        this.rotation[4] = data[4];
        this.rotation[5] = data[2];
        this.rotation[6] = data[7];
        this.rotation[7] = data[8];
        this.rotation[8] = data[5];

        this.createRowAndColumnDOM(3, 3, 'body-rotation', false);              
    }    
  }

  createTable() {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    return { table, tbody };
  }

  checkLength(value: number): boolean {
    return {
      1: true,
      4: true,
      6: true,
      8: true,
      9: true, 
    }[value] || false;
  }
 
  createRowAndColumnDOM(sizeRow: number, sizeColumn: number, nameBody: string, isStatic: boolean) {
    let { table, tbody } = this.createTable();

    document.getElementById(nameBody)?.appendChild(table);
    
    let index = 0;

    for(let i = 0; i < sizeRow; i++) {
      let row = document.createElement('tr');

      for(let i = 0; i < sizeColumn; i++) { 
       
        let row_data = document.createElement('td');
        row_data.innerHTML = isStatic ? this.data[index] : this.rotation[index];
        row_data.setAttribute('id', 'table')


        if(row_data.innerHTML !== 'undefined') {
          // document.getElementById(nameBody)?.classList.add('table');
          row.appendChild(row_data);
        }

        index++;

      }

      tbody.appendChild(row);
      const element = document.getElementById('table');

      if(element !== null) {
        element.style.border = '1px solid black';
      
    }
  }
}

  navigateBack() {
    this.router.navigate(['']);
  }

}
