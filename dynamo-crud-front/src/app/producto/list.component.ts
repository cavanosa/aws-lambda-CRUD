import { Producto } from './../models/producto';
import { ProductoService } from './../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productos: Producto[] = [];

  textSpinner = '';

  max: number;

  constructor(
    private productoService: ProductoService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(): void {
    this.textSpinner = 'loading products...';
    this.spinner.show();
    this.productoService.list().subscribe(data => {
      this.productos = this.orderBy(data);
      this.max = this.getMax();
      this.spinner.hide();
    });
  }

  orderBy(productos: Producto[]): Producto[] {
    return productos.sort((a, b) => (a.id > b.id ? 1 : -1))
  }

  getMax(): number {
    return Math.max(...this.productos.map(p => p.id));
  }

  onDelete(id: number): void {
    this.textSpinner = 'deleting product...';
    this.spinner.show();
    this.productoService.delete(id).subscribe(data => {
      this.onLoad();
    });
  }

}
