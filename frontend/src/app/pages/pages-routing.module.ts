import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PlatformsComponent } from '../admin/pages/platforms/platforms.component';
import { HomeComponent } from '../admin/pages/home/home.component';
import { HistoryComponent } from "../admin/pages/history/history.component";
import { SupportComponent } from '../admin/pages/support/support.component';
import { ResourcesComponent } from '../admin/pages/resources/resources.component';
import { ParametersComponent } from '../admin/pages/parameters/parameters.component';
import { CommonModule } from '@angular/common';
import { TreeGridComponent } from './tables/tree-grid/tree-grid.component';
import { MessagesComponent } from '../admin/pages/messages/messages.component';

const routes: Routes = [
  {
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'resources',
      component: ResourcesComponent,
    },
    {
      path: 'organizations',
      component: PlatformsComponent,
    },
    {
      path: 'support',
      component: SupportComponent,
    },
    {
      path: 'parameters',
      component: ParametersComponent,
    },
    {
      path: 'history',
      component: HistoryComponent,
    },
    {
      path: 'messages',
      component: MessagesComponent,
    }
    ,
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    // {
    //   path: 'modal-overlays',
    //   loadChildren: () => import('./modal-overlays/modal-overlays.module')
    //     .then(m => m.ModalOverlaysModule),
    // },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}