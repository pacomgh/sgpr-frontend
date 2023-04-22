import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { BacktesterComponent } from './pages/backtester/backtester.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes:Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotpagefoundComponent  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
