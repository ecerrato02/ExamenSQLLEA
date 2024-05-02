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
      const departament_codi = 2
      const departament_nom = "Eduardo"

        this.http.put('http://localhost:3080/modifDeptCerrato',{departament_codi, departament_nom})
        console.log("Hecho")

      this.http.get('http://localhost:3080/impartirAssigCerrato').subscribe((data) => {
        console.log(data)

      })
      }
  }
