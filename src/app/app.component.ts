import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { MatDialog } from '@angular/material/dialog';
import { DummyDailogDisplayComponent } from './dummy-dailog-display/dummy-dailog-display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';
  
  constructor(private _bottomSheet: MatBottomSheet, public dailog: MatDialog) { }
  openBottomSheet(): void {
    this._bottomSheet.open(DummyDisplayComponent);
  }

  openDialog(): void {
    const dialogRef = this.dailog.open(DummyDailogDisplayComponent, {
      width: '300px',
      height: '200px',
      data: { name: 'khan', phone: '9985632613' },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);  
    });
  }
}