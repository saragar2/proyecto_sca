import { Component } from '@angular/core';
import { Menu } from "../../components/menu/menu";
import { Comenzar } from "../comenzar/comenzar";
import { Comidas } from "../../components/comidas/comidas";

@Component({
  selector: 'app-italiana',
  imports: [Menu, Comenzar, Comidas],
  templateUrl: './italiana.html',
  styleUrl: './italiana.css',
})
export class Italiana {

}
