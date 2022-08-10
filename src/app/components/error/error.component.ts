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
    this.tips();
  }

  tips(){
    let i = this.data.length;
    console.log(i);
    if(i == 0){
      this.tipsText = "Campo vazio! Insira algum valor."
    }
    if(i==2 || i==3){
      this.tipsText = "Tente inserir uma quantidade de números, maior que 03, separados por vírgula Ex: 1,2,3,4"
    }
    if(i==5 || i==7){
      this.tipsText = "Tente inserir uma quantidade de números, que sejam múltiplos de 2 ou 3, separados por vírgula Ex: 1,2,3,4,5,6"
    }
    if(i>9){
      this.tipsText = "Tente inserir uma quantidade de números, menor que 10, separados por vírgula Ex: 1,2,3,4,5,6,7,8,9"
    }
  }
  
  navigateBack(){
    this.sharedDataService.clearValue();
    this.router.navigate(['']);
  }

}
