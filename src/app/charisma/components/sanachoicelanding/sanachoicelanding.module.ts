import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanachoicelandingRoutingModule } from './sanachoicelanding-routing.module';
import { SanachoicelandingComponent } from './sanachoicelanding.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import {InputTextareaModule} from "primeng/inputtextarea";
import {DividerModule} from "primeng/divider";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputMaskModule} from "primeng/inputmask";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {MatRadioModule} from "@angular/material/radio";
import {MatDialogModule} from "@angular/material/dialog";
import {TooltipModule} from "primeng/tooltip";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
    imports: [
        CommonModule,
        SanachoicelandingRoutingModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        AppConfigModule,
        InputTextareaModule,
        DividerModule,
        CheckboxModule,
        FormsModule,
        RadioButtonModule,
        InputMaskModule,
        FontAwesomeModule,
        MatButtonModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        DropdownModule,
        InputNumberModule,
        MatRadioModule,
        MatDialogModule,
        TooltipModule,
        MatChipsModule,
    ],
    declarations: [SanachoicelandingComponent]
})
export class SanachoiceLandingModule { }
