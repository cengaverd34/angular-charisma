import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SanachoicelandingComponent } from './sanachoicelanding.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SanachoicelandingComponent }
    ])],
    exports: [RouterModule]
})
export class SanachoicelandingRoutingModule { }
