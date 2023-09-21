import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogVentaComponent } from './dialog/dialogVenta.component';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent {

  readonly width: string = '600px';

  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar){

  }

  openAdd(){
    console.log("Click Venta");
    const dialogRef = this.dialog.open(DialogVentaComponent,{width: this.width});
  }
}
