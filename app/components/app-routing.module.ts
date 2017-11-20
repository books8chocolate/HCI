import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { mainComponent } from './main.component';
import { inventoryComponent } from './inventory.component';
import { bsInfoComponent } from './bsInfo.component';
import { homeComponent } from './home.component';
import { cartComponent } from './cart.component';


const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Main', component: mainComponent },
    { path: 'Inventory', component: inventoryComponent },
    { path: 'bsInfo', component: bsInfoComponent },
    { path: 'Cart', component: cartComponent },
    { path: 'Home', component: homeComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }