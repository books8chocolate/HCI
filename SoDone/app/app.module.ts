import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



import { mainComponent }  from './components/main.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ mainComponent ],
  bootstrap:    [ mainComponent ]
})
export class AppModule { }
