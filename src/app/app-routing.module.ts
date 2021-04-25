import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ShopeComponent} from './shope/shope.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { combineLatest } from 'rxjs';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'shop',
    component: ShopeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
