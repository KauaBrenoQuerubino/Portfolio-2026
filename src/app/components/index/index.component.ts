import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NavComponent } from '../nav/nav.component';
import { ProjetoInfosComponent } from '../skills/content/projetos/projeto-infos/projeto-infos.component';
import { SkillsComponent } from '../skills/skills.component';
import { SobreComponent } from '../sobre/sobre.component';

@Component({
  selector: 'app-index',
   imports: [
      BannerComponent,
      NavComponent,
      SobreComponent,
      SkillsComponent,
      ProjetoInfosComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
