import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SanachoiceLandingComponent } from './sanachoiceLanding.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SanachoiceLandingComponent }
    ])],
    exports: [RouterModule]
})
export class SanachoiceLandingRoutingModule { }
