import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesRoutingModule } from './tables-routing.module';
import { AdvancedSortableDirective } from './advancedtable/advanced-sortable.directive'
import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { EngineeringComponent } from './engineering/engineering.component';

@NgModule({
  declarations: [BasicComponent, AdvancedtableComponent, AdvancedSortableDirective, EngineeringComponent],
  imports: [
    CommonModule,
    TablesRoutingModule, HighchartsChartModule,
    UIModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule
  ]
})
export class TablesModule { }
