import { Routes } from '@angular/router';
import { TimeoutComponent } from './comps/timeout-component/timeout-component';
import { DashboardComponent } from './comps/dashboard-component/dashboard-component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'timeout', component: TimeoutComponent}
];
