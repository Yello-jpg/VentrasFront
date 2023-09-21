import { Component, Inject } from "@angular/core";
import { MatDialogRef , MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/Models/Cliente";
import { ApiClienteService } from "src/app/services/api-cliente.service";


@Component({
    styleUrls: ['./dialogCliente.component.scss'],
    templateUrl: "dialogCliente.component.html"
})
export class DialogClienteComponent{

    public nombre: string = '';

    constructor(public dialogRef: MatDialogRef<DialogClienteComponent>,
        public apiCliente: ApiClienteService,
        public snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public cliente: Cliente){
            if(this.cliente !== null){
                this.nombre = cliente.name;
            }
        }

    close(){
       this.dialogRef.close(); 
    }

    addClient(){
        const cliente: Cliente = { id: this.cliente.id, name: this.nombre };
        this.apiCliente.edit(cliente).subscribe(response => {
            if(response.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente '+ this.nombre +' editado con éxito','',{duration: 2000});
            }
        });
    }

    editClient(){
        const cliente: Cliente = { id:0, name: this.nombre };
        this.apiCliente.add(cliente).subscribe(response => {
            if(response.exito === 1){
                this.dialogRef.close();
                this.snackBar.open('Cliente '+ this.nombre +' insertado con éxito','',{duration: 2000});
            }
        });
    }
}