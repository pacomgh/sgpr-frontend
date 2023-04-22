
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { ProgressComponent } from './../pages/progress/progress.component';
import { Grafica1Component } from './../pages/grafica1/grafica1.component';
import { PagesComponent } from './../pages/pages.component';
import { BacktesterComponent } from './../pages/backtester/backtester.component';
import { EvolverComponent } from './evolver/evolver.component';
import { OptimiserComponent } from './optimiser/optimiser.component';
import { ReportsComponent } from './reports/reports.component';
import { PortfolioManagerComponent } from './portfolio-manager/portfolio-manager.component';
import { PortfolioOptimiserComponent } from './portfolio-optimiser/portfolio-optimiser.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { AutomatedEvolvingComponent } from './automated-evolving/automated-evolving.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

const routes:Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: 'backtester', component: BacktesterComponent },
      { path: 'optimiser', component: OptimiserComponent },
      { path: 'evolver', component: EvolverComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'portfolio-manager', component: PortfolioManagerComponent },
      { path: 'portfolio-optimiser', component: PortfolioOptimiserComponent, },
      { path: 'strategies', component: StrategiesComponent, },
      { path: 'strategies', component: PortfoliosComponent, },
      { path: 'automated-evolving', component: AutomatedEvolvingComponent, },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
