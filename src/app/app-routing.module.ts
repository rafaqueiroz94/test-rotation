import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { ErrorComponent } from './components/error/error.component';
import { ExitComponent } from './components/exit/exit.component';

const routes: Routes = [
  { 
    path:'', 
    component: EntryComponent 
  },
  {
     path:'exit', 
     component: ExitComponent,
     data: {
      values: []
    }
  },  
  { 
    path:'error', 
    component: ErrorComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
