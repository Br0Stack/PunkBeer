import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalOptions } from './modal-options';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalOptions
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    FilterPipeModule
  ],
  exports: [NgbdModalOptions],
  bootstrap: [AppComponent, NgbdModalOptions],
  providers: [TestService, AppComponent],
})
export class AppModule { }
