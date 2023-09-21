import { Component, OnInit } from '@angular/core';
import { ApiClienteService } from '../services/api-cliente.service';
import { Response } from '../Models/response';
import { DialogClienteComponent  } from './dialog/dialogCliente.component';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../Models/Cliente';
import { DialogDeleteComponent } from '../common/delete/dialogDelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{

  public lst: any[] = [];
  public columnas: string[] = ['id','nombre','acciones'];
  readonly widthModal = '300px';

  constructor(
    private apiCliente: ApiClienteService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
    ){}
  
  ngOnInit(): void {
    // this.getCliente();
  }
  
  getCliente(){
    this.apiCliente.getClientes().subscribe( response => {
      this.lst = response.data;
    });
    console.log(this.lst);
  }
  
  openAdd(){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width: this.widthModal
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCliente();
    });
  }

  openEdit(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width: this.widthModal,
      data: cliente
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getCliente();
    });
  }

  del(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogDeleteComponent,{
      width: this.widthModal
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiCliente.del(cliente.id).subscribe(result => {
          if(result.exito === 1){
            this.snackBar.open('Cliente eliminado con exito','',{duration: 2000})
            this.getCliente();
          }
        })
      }
    });
  }
}
