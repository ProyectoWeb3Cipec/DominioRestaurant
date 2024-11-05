import { Component, inject } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarjetaProductoComponent } from '../../core/components/tarjeta-producto/tarjeta-producto.component';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/interfaces/productos';
import { Busqueda } from '../../core/interfaces/busqueda';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, TarjetaProductoComponent]
})

export class BuscarComponent {
  headerService = inject(HeaderService);
  productosService = inject(ProductosService);
  productos:Producto[] = []

  ngOnInit(): void {
    this.headerService.titulo.set("Buscar");
    this.productosService.getAll().then(res => this.productos = res);
  }
  parametrosBusqueda:Busqueda ={
    texto:"",
    aptoVegetariano:false,
    aptoVegano:false,
  }
    async buscar(){
      this.productos = await this.productosService.buscar(this.parametrosBusqueda);
  }
}
