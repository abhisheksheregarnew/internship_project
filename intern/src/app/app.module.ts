import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatFormFieldModule,MatInputModule, MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatAccordion,} from '@angular/material';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
MatToolbarModule,
MatExpansionModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
