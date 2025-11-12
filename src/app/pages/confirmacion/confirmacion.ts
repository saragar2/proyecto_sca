import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from "../../components/menu/menu";

@Component({
  selector: 'app-confirmacion',
  imports: [Menu, RouterLink],
  templateUrl: './confirmacion.html',
  styleUrl: './confirmacion.css',
})
export class Confirmacion {

}
