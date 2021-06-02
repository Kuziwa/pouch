import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { AdvancedtableComponent } from './advancedtable/advancedtable.component';
import { EngineeringComponent } from './engineering/engineering.component';

const routes: Routes = [
    {
        path: 'basic',
        component: BasicComponent
    },
    {
        path: 'advanced',
        component: AdvancedtableComponent
    },
    {
        path: 'engineering',
        component: EngineeringComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
