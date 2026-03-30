import { Component } from '@angular/core';
import { BlurComponent } from "../../../../banner/blur/blur.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Projeto, PROJETO_PADRAO } from '../../../../../model/projetos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projeto-infos',
  imports: [BlurComponent],
  templateUrl: './projeto-infos.component.html',
  styleUrl: './projeto-infos.component.scss'
})
export class ProjetoInfosComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}


  projeto: Projeto | undefined


  ngOnInit() {
    this.projeto = PROJETO_PADRAO[Number(this.route.snapshot.paramMap.get('id'))];
  }


  voltar() {
    this.router.navigate(['/']);
  }
}
