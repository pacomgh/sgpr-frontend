import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    TabbarComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    TabbarComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
