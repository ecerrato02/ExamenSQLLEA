import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
  HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExamenSQLLEA';

    constructor(private http: HttpClient) {

    this.http.get('http://localhost:3080/llistaAssigCerrato').subscribe((data) => {
      console.log("Prueba de lo que debería de salir")
      console.log(data)
    })
      const DEPT_CODI = 2
      const dept_nom = "Eduardo"
      const dept_telefon = 384723213


        this.http.put('http://localhost:3080/modifDeptCerrato',{DEPT_CODI, dept_nom, dept_telefon}).subscribe((data) => {
          console.log("Hecho")
          console.log(data)
        })

      this.http.get('http://localhost:3080/impartirAssigCerrato').subscribe((data) => {
        console.log(data)

      })
      }
  }
