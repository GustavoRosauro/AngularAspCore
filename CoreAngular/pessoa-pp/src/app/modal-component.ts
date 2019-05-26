import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './Modal/Usuario';
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.html'
})
export class NgbdModalContent implements OnInit {
  @ViewChild('form') form: NgForm;
  @Input() teste: Usuario;
  usuario: Usuario;
  appcomponent: AppComponent;
  button: string;
  ngOnInit() {
    if (this.teste != null) {
      this.usuario = this.teste;
      this.button = 'Alterar'
    }
    else {
      this.usuario = new Usuario;
      this.button = 'Cadastrar'
    }
  }
  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private router: Router) { }
  modal: NgbdModalComponent;
  Cadastro() {
    this.PostFuncao(this.usuario);
  }
  PostFuncao(usuario: Usuario) {
    if (usuario.id == null) {
      return this.http.post("/api/Usuarios/InseriRegistro", usuario).subscribe(result => {
        this.activeModal.close();
        this.router.navigateByUrl("/Lista");
      }, (error: any) => { console.log(error) });
    } else {
      return this.http.put("/api/Usuarios/Atualizar", usuario).subscribe(data => {
        this.activeModal.close();
        this.router.navigateByUrl("/Lista");
      }, error => { console.log(error)});
    }
  }
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) { }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
  close(): void {
    this.modalService.dismissAll;
  }
  openUSer(usuario: Usuario): void{
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.teste = usuario;
  }
}
