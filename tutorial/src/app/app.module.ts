import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { PageComponent } from './page/page.component';
import { Page404Component } from './page404/page404.component';
import { ColorDirective } from './color.directive';
import { DragDropDirective } from './dragdrop.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './charts/charts.component';

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    DragDropDirective,
    AppComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent,
    BlogComponent,
    PageComponent,
    Page404Component,
    ColorDirective,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ChartsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'it' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
