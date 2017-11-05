import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './components/app-routing.module';

import { mainComponent }  from './components/main.component';
import { inventoryComponent } from './components/inventory.component';
import { bsInfoComponent } from './components/bsInfo.component';
import { tabsComponent } from './components/tabs.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule],
    declarations: [mainComponent, inventoryComponent, bsInfoComponent, tabsComponent],
    bootstrap:    [ mainComponent ]
})
export class AppModule { }
