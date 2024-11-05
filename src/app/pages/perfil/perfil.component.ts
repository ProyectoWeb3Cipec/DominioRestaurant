import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Perfil } from '../../core/interfaces/perfil';
import { PerfilService } from '../../core/services/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  standalone:true,
  imports:[CommonModule, FormsModule]
})
export class PerfilComponent {
  headerService = inject(HeaderService);
  router = inject(Router)
  perfilService = inject(PerfilService)

  ngOnInit(): void {
      this.headerService.titulo.set("Perfil");
      if (this.perfilService.perfil()){
        this.perfil = {...this.perfilService.perfil()!}
      }
  }
  perfil:Perfil = {
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
    detalleEntrega: "",
  }
  guardarDatosPerfil(){
    localStorage.setItem('perfil',JSON.stringify(this.perfil));
    this.router.navigate(["/carrito"])
  }
}

