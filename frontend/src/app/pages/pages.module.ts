import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule, NbMenuModule, NbPopoverModule, NbSelectModule, NbTabsetModule, NbTooltipModule, NbWindowModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PlatformsComponent } from '../admin/pages/platforms/platforms.component';
import { HistoryComponent } from '../admin/pages/history/history.component';
import { HomeComponent } from '../admin/pages/home/home.component';
import { ParametersComponent } from '../admin/pages/parameters/parameters.component';
import { ResourcesComponent } from '../admin/pages/resources/resources.component';
import { SupportComponent } from '../admin/pages/support/support.component';
import { ModalOverlaysComponent } from './modal-overlays/modal-overlays.component';
import { ToastrComponent } from './modal-overlays/toastr/toastr.component';
import { DialogComponent } from './modal-overlays/dialog/dialog.component';
import { ShowcaseDialogComponent } from './modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from './modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';
import { WindowComponent } from './modal-overlays/window/window.component';
import { WindowFormComponent } from './modal-overlays/window/window-form/window-form.component';
import { PopoversComponent } from './modal-overlays/popovers/popovers.component';
import { NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent } from './modal-overlays/popovers/popover-examples.component';
import { TooltipComponent } from './modal-overlays/tooltip/tooltip.component';
import { FormsModule } from '@angular/forms';
import { ModalOverlaysRoutingModule } from './modal-overlays/modal-overlays-routing.module';
import { TablesModule } from './tables/tables.module';

const COMPONENTS = [
  ModalOverlaysComponent,
  ToastrComponent,
  DialogComponent,
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
  WindowComponent,
  WindowFormComponent,
  PopoversComponent,
  NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
  TooltipComponent,
];

const ENTRY_COMPONENTS = [
  ShowcaseDialogComponent,
  DialogNamePromptComponent,
  WindowFormComponent,
  NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
];

const MODULES = [
  FormsModule,
  ThemeModule,
  ModalOverlaysRoutingModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
  TablesModule,
];





@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    CommonModule,
    MODULES,
  ],
  declarations: [
    PagesComponent,
    PlatformsComponent,
    HomeComponent,
    ParametersComponent,
    ResourcesComponent,
    SupportComponent,
    COMPONENTS,
    
  ],

  entryComponents: {
    ...ENTRY_COMPONENTS,
  }
})
export class PagesModule {
}
