import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'popup',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>) {}

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

}
