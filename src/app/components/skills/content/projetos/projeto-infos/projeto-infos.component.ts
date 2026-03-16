import { Component } from '@angular/core';
import { BlurComponent } from "../../../../banner/blur/blur.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Projeto, PROJETO_PADRAO } from '../../../../../model/projetos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projeto-infos',
  imports: [BlurComponent, RouterLink],
  templateUrl: './projeto-infos.component.html',
  styleUrl: './projeto-infos.component.scss'
})
export class ProjetoInfosComponent {
  constructor(private route: ActivatedRoute, private location: Location) {}


  projeto: Projeto | undefined


  ngOnInit() {
    this.projeto = PROJETO_PADRAO[Number(this.route.snapshot.paramMap.get('id'))];
  }


  voltar() {
    this.location.back();
  }
}
