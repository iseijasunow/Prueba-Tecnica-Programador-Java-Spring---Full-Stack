import { Component, OnInit } from '@angular/core';
import { Clients } from '../shared/interfaces/clients';
import { ClientsService } from '../shared/services/clients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients!: Clients[];


  constructor(private clienteService: ClientsService) { }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(
     
      clients => this.clients = clients

    );

  }

  delete(client: Clients): void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro?',
      text: `¿Seguro que desea eliminar al cliente ${client.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!', 
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
         
        this.clienteService.delete(client.id).subscribe(
          Response => {
            this.clients = this.clients.filter(cli => cli !== client)
            swalWithBootstrapButtons.fire(
              'Cliente Eliminado!',
                  `Cliente ${client.name} eliminado con éxito.`,
                  'success'
            )

          }
        )
      } 
    })
   

  }

}
