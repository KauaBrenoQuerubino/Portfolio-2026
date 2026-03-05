import { Component } from '@angular/core';
import { ProjetosComponent } from './content/projetos/projetos.component';
import { NgClass } from '@angular/common';
import { CertificadosComponent } from "./content/certificados/certificados.component";
import { HabilidadesComponent } from "./content/habilidades/habilidades.component";


@Component({
  selector: 'app-skills',
  imports: [ProjetosComponent, NgClass, CertificadosComponent, HabilidadesComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  btnSelect = 1;


}
