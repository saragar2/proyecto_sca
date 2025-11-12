import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comidas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './comidas.html',
  styleUrl: './comidas.css',
})
export class Comidas {
	@Input() imagenUrl= '';
	@Input() titulo= '';
	@Input() descripcion= '';
	@Input() ingredientes= '';
}
