import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'popup',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  hasScrollUntilTheEnd = false;

  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>) {}

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  @HostListener('scroll', ['$event'])
onScroll(event: any) {
  console.log("=========> scrolling: ", event.target.offsetHeight, event.target.scrollTop);
    // visible height + pixel scrolled >= total height
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("=========> End");
      this.hasScrollUntilTheEnd = true;
    }
}

}
