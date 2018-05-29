import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    data: {
      title: 'Widgets'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes),
    FormsModule,//validasyon icin
    ReactiveFormsModule,//validasyon icin
    CommonModule //validasyon icin
  ],
  exports: [RouterModule],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
