import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comidas',
  imports: [],
  templateUrl: './comidas.html',
  styleUrl: './comidas.css',
})
export class Comidas {
	@Input() imagenUrl= '';
	@Input() titulo= '';
	@Input() descripcion= '';
	@Input() ingredientes= '';
}
