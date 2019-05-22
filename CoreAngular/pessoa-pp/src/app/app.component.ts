import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbdModalComponent } from './Modal-Component'
import { NgbdModalContent } from './Modal-Component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pessoa-pp';
  constructor(private http: HttpClient) {}
    usuarios: any = [];
  ngOnInit() {
    this.BuscaUsuarios();
  }

BuscaUsuarios(){
     return this.http.get<usuario[]>("/api/Usuarios/RetornaUsuarios").subscribe(result => {
      this.usuarios = result;
    }, error => console.log(error));
}
}
class usuario {
  id: number;
  nome: string;
  idade: number;
}
