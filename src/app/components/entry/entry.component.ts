import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  value: string = '';

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }

  navigate() {
    this.saveData();
    this.router.navigate(['/exit']) 
  }

  saveData() {
    const data = this.value.split(',');
    this.sharedDataService.setValue(data);
  }



}
