import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTooltipModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';
import { MarkdownModule } from 'ngx-markdown';
import { GraphDialogComponent } from './components/graph-dialog/graph-dialog.component';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphDialogComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxGraphModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MarkdownModule.forRoot()
  ],
  entryComponents: [
    GraphDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
