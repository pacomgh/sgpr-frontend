import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'
;
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

import { OptimiserComponent } from './optimiser/optimiser.component';
import { EvolverComponent } from './evolver/evolver.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { BacktesterComponent } from './backtester/backtester.component';
import { ReportsComponent } from './reports/reports.component';
import { PortfolioManagerComponent } from './portfolio-manager/portfolio-manager.component';
import { PortfolioOptimiserComponent } from './portfolio-optimiser/portfolio-optimiser.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { AutomatedEvolvingComponent } from './automated-evolving/automated-evolving.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    BacktesterComponent,
    OptimiserComponent,
    EvolverComponent,
    ReportsComponent,
    PortfolioManagerComponent,
    PortfolioOptimiserComponent,
    StrategiesComponent,
    AutomatedEvolvingComponent,
    PortfoliosComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    BacktesterComponent,
    OptimiserComponent,
    EvolverComponent,
    ReportsComponent,
    PortfolioManagerComponent,
    PortfolioOptimiserComponent,
    StrategiesComponent,
    AutomatedEvolvingComponent,
    PortfoliosComponent,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSliderModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PagesModule { }
