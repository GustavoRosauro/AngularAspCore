import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbdModalComponent } from './Modal-Component'
import { NgbdModalContent } from './Modal-Component';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pessoa-pp';
  constructor(private http: HttpClient, private modal: NgbdModalComponent) { }
  usuarios: any = [];
  ngOnInit() {
    this.BuscaUsuarios();
  }

BuscaUsuarios(){
     return this.http.get<usuario[]>("/api/Usuarios/RetornaUsuarios").subscribe(result => {
      this.usuarios = result;
    }, error => console.log(error));
}
  DeletaUsuarios(id: number) {
    var result = confirm("Você deseja excluir esse registro");
    if (result === true) {
      return this.http.delete("/api/Usuarios/DeletaRegistro/" + id).subscribe(result => {
        this.BuscaUsuarios();
      }, error => console.log(error));
    }
  }
  GetUserById(id: number) {
    return this.http.get<usuario>("/api/Usuarios/GetUserById/" + id).subscribe(result => {
    this.modal.openUSer(result);
    },error=> console.log(error))
  }
}
class usuario {
  id: number;
  nome: string;
  idade: number;
}
