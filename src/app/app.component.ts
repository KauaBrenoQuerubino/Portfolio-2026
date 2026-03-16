import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from "./components/banner/banner.component";
import { NavComponent } from "./components/nav/nav.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { SkillsComponent } from './components/skills/skills.component';
import { ProjetoInfosComponent } from "./components/skills/content/projetos/projeto-infos/projeto-infos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'Portifolio-2026';
}
