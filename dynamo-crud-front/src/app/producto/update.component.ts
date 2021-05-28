import { NgxSpinnerService } from 'ngx-spinner';
import { ProductoService } from './../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  producto: Producto = null;
  textSpinner = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe( prod => {
      this.producto = new Producto(prod.id, prod.nombre, prod.precio)
    });
  }

  onUpdate(): void {
    this.textSpinner = 'updating...';
    this.spinner.show();
    this.productoService.write(this.producto).subscribe( data => {
      this.spinner.hide();
      this.router.navigate(['/']);
    });
  }

}
