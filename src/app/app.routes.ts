import { Routes } from '@angular/router';

import { Comenzar } from './pages/comenzar/comenzar';

import { Landing } from './pages/landing/landing';

import { HacerPedido } from './pages/hacer-pedido/hacer-pedido';

import { Italiana } from './pages/italiana/italiana';

export const routes: Routes = [
    { path: '', component: Landing },
	{ path: 'comenzar', component: Comenzar },
    { path: 'hacerPedido', component: HacerPedido },
    { path: 'italiana', component: Italiana },
];
