import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjetoInfosComponent } from './components/skills/content/projetos/projeto-infos/projeto-infos.component';
import { IndexComponent } from './components/index/index.component';

export const routes: Routes = [

    {
        path: "",
        component:  IndexComponent 
    },
    {
        path: "projeto/:id",
        component: ProjetoInfosComponent
    }

];
