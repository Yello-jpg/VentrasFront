import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Concepto } from "src/app/Models/concepto";
import { Venta } from "src/app/Models/venta";
import { ApiVentaService } from "src/app/services/api-venta.service";

@Component({
    templateUrl: 'dialogVenta.component.html'
})
export class DialogVentaComponent{

    public venta: Venta;
    public conceptos: Concepto[];

    public conceptoForm = this.formBuilder.group({
        cantidad: [0, Validators.required],
        idProducto: [1, Validators.required],
        importe: [0, Validators.required]
    });

    constructor(public dialogRef: MatDialogRef<DialogVentaComponent>,
        public snackBar: MatSnackBar,
        public formBuilder: FormBuilder,
        public apiVenta: ApiVentaService){
            this.conceptos = [];
            this.venta = {idCliente: 2, conceptos:[]};
    }

    close(){
        this.dialogRef.close();
    }

    addConcepto(){
        this.conceptos.push(this.conceptoForm.value as Concepto);
    }

    addVenta(){
        this.venta.conceptos = this.conceptos;
        console.log(this.venta);
        this.apiVenta.Add(this.venta).subscribe(res => {
            if(res.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Venta hecha con éxito','',{
                    duration: 2000,
                });
            }
        });
    }

}