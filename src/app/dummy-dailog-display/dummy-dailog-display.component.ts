import { Component, Inject, inject, INJECTOR } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dummy-dailog-display',
  templateUrl: './dummy-dailog-display.component.html',
  styleUrls: ['./dummy-dailog-display.component.css']
})
export class DummyDailogDisplayComponent {
  constructor (
    public dialogRef : MatDialogRef <DummyDailogDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){}
  ngOninit() : void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick() : void{
    this.dialogRef.close(123);
  }

}
