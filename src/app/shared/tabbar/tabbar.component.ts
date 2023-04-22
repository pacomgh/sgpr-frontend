import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BacktesterComponent } from '../../pages/backtester/backtester.component';
import { OptimiserComponent } from '../../pages/optimiser/optimiser.component';
import { EvolverComponent } from '../../pages/evolver/evolver.component';
import { ReportsComponent } from '../../pages/reports/reports.component';
import { PortfolioManagerComponent } from '../../pages/portfolio-manager/portfolio-manager.component';
import { PortfolioOptimiserComponent } from '../../pages/portfolio-optimiser/portfolio-optimiser.component';
import { StrategiesComponent } from '../../pages/strategies/strategies.component';
import { AutomatedEvolvingComponent } from '../../pages/automated-evolving/automated-evolving.component';
import { PortfoliosComponent } from '../../pages/portfolios/portfolios.component';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.css']
})
export class TabbarComponent {

  tabLabels = [
    'Backtester', 'Optimiser', 'Evolver',
    'Reports', 'Portfolio Manager', 'Portfolio Optimiser',
    'Strategies', 'Portfolios', 'Automated Evolving'];
  tabComponents = [
    BacktesterComponent,
    OptimiserComponent,
    EvolverComponent,
    ReportsComponent,
    PortfolioManagerComponent,
    PortfolioOptimiserComponent,
    StrategiesComponent,
    PortfoliosComponent,
    AutomatedEvolvingComponent,
  ];

//   navLinks: any[];
//   activeLinkIndex = -1;
//   constructor(private router: Router) {
//     this.navLinks = [
//         {
//             label: 'Backtester',
//             link: '../../pages/backtester',
//             index: 0
//         },
//         {
//             label: 'Optimiser',
//             link: './second',
//             index: 1
//         },
//         {
//             label: 'Evolver',
//             link: './third',
//             index: 2
//         },
//         {
//             label: 'Reports',
//             link: './third',
//             index: 3
//         },
//         {
//             label: 'Portfolio Manager',
//             link: './third',
//             index: 4
//         },
//         {
//             label: 'Portfolio Optimiser',
//             link: './third',
//             index: 5
//         },
//         {
//             label: 'Strategies',
//             link: './third',
//             index: 6
//         },
//         {
//             label: 'Portfolios',
//             link: './third',
//             index: 7
//         },
//         {
//             label: 'Automated Evolving',
//             link: './third',
//             index: 8
//         },
//     ];
// }
// ngOnInit(): void {
//   this.router.events.subscribe((res) => {
//       this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
//   });
// }

}
