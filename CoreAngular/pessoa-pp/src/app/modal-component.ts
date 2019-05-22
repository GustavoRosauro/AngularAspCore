import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './Modal/Usuario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-content.html'
})
export class NgbdModalContent implements OnInit {
  @ViewChild('form') form: NgForm;
  usuario: Usuario;
  ngOnInit() {
    this.usuario = new Usuario;
  }
  constructor(public activeModal: NgbActiveModal, private http: HttpClient) { }
  modal: NgbdModalComponent;
  Cadastro() {
    this.PostFuncao(this.usuario);
  }
  PostFuncao(usuario: Usuario) {
    return this.http.post("/api/Usuarios/InseriRegistro", usuario).subscribe(result => {
      this.activeModal.close();
    }, (error: any) => { console.log(error) });
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
}
