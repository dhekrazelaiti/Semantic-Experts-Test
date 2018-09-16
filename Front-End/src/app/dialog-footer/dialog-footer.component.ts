import { Component,
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-footer',
  templateUrl: './dialog-footer.component.html',
  styleUrls: ['./dialog-footer.component.css']
})
export class DialogFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('==========> ngOnInit');
  }

  ngOnChanges() {
    console.log(`==========> ngOnChanges()`);
  }

  ngDoCheck() {
    console.log("==========> ngDoCheck()")
  }

  ngAfterContentInit() {
    console.log("==========> ngAfterContentInit()");
  }

  ngAfterContentChecked() {
    console.log("==========> ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("==========> ngAfterViewInit()");
  }

  ngAfterViewChecked() {
    console.log("==========> ngAfterViewChecked() ");
  }

  ngOnDestroy() {
    console.log("==========> ngOnDestroy()");
  }

}
