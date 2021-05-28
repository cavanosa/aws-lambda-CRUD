import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { NgxSpinnerModule } from "ngx-spinner";
import { ListComponent } from './producto/list.component';
import { CreateComponent } from './producto/create.component';
import { UpdateComponent } from './producto/update.component';
import { DetailComponent } from './producto/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
