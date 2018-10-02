import { Component, OnInit, Input } from '@angular/core';
import { MarkdownPreviewDialogComponent } from '../../components/markdown-preview-dialog/markdown-preview-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.scss']
})
export class MarkdownPreviewComponent implements OnInit {

  @Input() inputText: string;
  @Input() smallView: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openMarkdownDialog() {
    this.dialog.open(MarkdownPreviewDialogComponent, {
      panelClass: 'full-width-dialog',
      data: {
        inputText: this.inputText
      }
    });
  }

}
