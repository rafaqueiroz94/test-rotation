import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  
  data: string[] = [];
  tipsText: string = '';
 
  constructor(private router: Router, private sharedDataService: SharedDataService) { }
 
  ngOnInit(): void {
    this.data = this.sharedDataService.getValue();
    this.tipsText = this.message(this.data.length);
  }

  message(value: number): string {
    if(value > 9) {
      return "Tente inserir uma quantidade de números, menor que 10, separados por vírgula Ex: 1,2,3,4,5,6,7,8,9"
    }

    return {
      0: "Campo vazio! Insira algum valor.",
      2: "Tente inserir uma quantidade de números, maior que 03, separados por vírgula Ex: 1,2,3,4",
      3: "Tente inserir uma quantidade de números, maior que 03, separados por vírgula Ex: 1,2,3,4",
      5: "Tente inserir uma quantidade de números, que sejam múltiplos de 2 ou 3, separados por vírgula Ex: 1,2,3,4,5,6",
      7: "Tente inserir uma quantidade de números, que sejam múltiplos de 2 ou 3, separados por vírgula Ex: 1,2,3,4,5,6",
    }[value] || '';
  }
  
  navigateBack() {
    this.sharedDataService.clearValue();
    this.router.navigate(['']);
  }

}
