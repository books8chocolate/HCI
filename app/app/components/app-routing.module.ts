import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { mainComponent } from './main.component';
import { inventoryComponent } from './inventory.component';
import { bsInfoComponent } from './bsInfo.component';


const routes: Routes = [
    { path: '', redirectTo: '/Inventory', pathMatch: 'full' },
    { path: 'Main', component: mainComponent },
    { path: 'Inventory', component: inventoryComponent },
    { path: 'bsInfo', component: bsInfoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }