import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { MvtstkComponent } from './pages/mvtstk/page-mvtstk/mvtstk.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';

const routes: Routes = [
  {path :'login',component: PageLoginComponent },
  {path :'inscrire',component: PageInscriptionComponent },
  {path :'',component: PageDashboardComponent,
    children:[
              {path:'statistiques',component:PageStatistiquesComponent},
              {path:'articles',component:PageArticleComponent},
              {path:'nouvelarticle',component:NouvelArticleComponent},
              {path:'mvtstk',component:MvtstkComponent},
              /* Client */
              {path:'clients',component:PageClientComponent},
              {
                path:'nouveauclient',component:NouveauCltFrsComponent,
                data:{origin:'client'}
              },
              {
                path:'commandeclient',component:PageCmdCltFrsComponent,
                data:{origin:'client'}  
              },
              {
                path:'nouvellecommandeclt',component:NouvelleCmdCltFrsComponent,
                data:{origin:'client'}  
              },
              /* fournisseur */
              {path:'fournisseurs',component:PageFournisseurComponent},
              {
                path:'nouveaufournisseur',component:NouveauCltFrsComponent,
                data:{origin:'fournisseur'}               
              },
              {
                path:'commandefournisseur',component:PageCmdCltFrsComponent,
                data:{origin:'fournisseur'}  
              },
              {
                path:'nouvellecommandefrs',component:NouvelleCmdCltFrsComponent,
                data:{origin:'fournisseur'}  
              },

              {path:'categories',component:PageCategorieComponent},
              {path:'nouvellecategorie',component:NouvelleCategoryComponent},

              {path:'utilisateurs',component:PageUtilisateurComponent},
              {path:'nouvelutilisateur',component:NouvelUtilisateurComponent},

              {path:'profil',component:PageProfilComponent},
              {path:'changermotdepasse',component:ChangerMotDePasseComponent},



            ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
