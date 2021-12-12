import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {NgLetModule} from "ng-let";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgLetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
