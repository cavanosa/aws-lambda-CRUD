import { NgxSpinnerService } from 'ngx-spinner';
import { ProductoService } from './../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from './../models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  nombre = '';
  precio = '';
  max: number;
  producto: Producto = null;
  textSpinner = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( data => {
      this.max = data.max;
    });
  }

  onCreate(): void {
    this.max++;
    this.producto = new Producto(this.max, this.nombre, this.precio);
    this.textSpinner = 'creating product...';
    this.spinner.show();
    this.productoService.write(this.producto).subscribe( data => {
      this.spinner.hide();
      this.router.navigate(['/']);
    });
  }

}
