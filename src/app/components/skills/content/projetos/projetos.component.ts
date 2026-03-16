import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJETO_PADRAO } from '../../../../model/projetos';

@Component({
  selector: 'app-projetos',
  imports: [RouterLink],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {


  projetos: any[] = PROJETO_PADRAO

  
}
