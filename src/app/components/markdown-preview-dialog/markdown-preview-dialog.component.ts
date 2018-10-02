import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-markdown-preview-dialog',
  templateUrl: './markdown-preview-dialog.component.html',
  styleUrls: ['./markdown-preview-dialog.component.scss']
})
export class MarkdownPreviewDialogComponent implements OnInit {

  inputText: string;

  constructor(
    public dialogRef: MatDialogRef<MarkdownPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.inputText = this.data.inputText;
  }

}
