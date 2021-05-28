import { environment } from './../../environments/environment';
import { Producto } from './../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = environment.productoURL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL);
  }

  public write(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(this.productoURL, producto);
  }

  public delete(id: number): Observable<Producto> {
    return this.httpClient.delete<Producto>(this.productoURL + `${id}`);
  }
}
