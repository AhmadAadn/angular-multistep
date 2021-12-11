import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import { SummaryComponent } from './summary/summary.component';
@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
