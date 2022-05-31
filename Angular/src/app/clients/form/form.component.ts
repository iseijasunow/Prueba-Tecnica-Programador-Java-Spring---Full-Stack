import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clients } from 'src/app/shared/interfaces/clients';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public client: Clients = new Clients();

  constructor( private clienteService: ClientsService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.cargarCliente();
  }

  public create(): void {
    this.clienteService
      .create(this.client)
      .subscribe((response) => this.router.navigate(['/clientes']));
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((Clients) => (this.client = Clients));
      }
    });
  }

/**   update(): void {
    this.clienteService.getCliente(this.clients)
      .subscribe(
        json => {
          this.router.navigate(['/clientes']);
          swal('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success');
        },
      )
  }// */

}
