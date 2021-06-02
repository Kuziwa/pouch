import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { SaasComponent } from './saas/saas.component';
import { CryptoComponent } from './crypto/crypto.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
    {
        path: 'finance',
        component: DefaultComponent
    },
    {
        path: 'hr',
        component: SaasComponent
    },
    {
        path: 'procurement',
        component: CryptoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), Ng2SearchPipeModule],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
