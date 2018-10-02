import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-graph-dialog',
  templateUrl: './graph-dialog.component.html',
  styleUrls: ['./graph-dialog.component.scss']
})
export class GraphDialogComponent implements OnInit {

  inputText: string;

  constructor(
    public dialogRef: MatDialogRef<GraphDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.inputText = this.data.inputText;
  }

}
