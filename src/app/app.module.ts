import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { EventBindingComponent } from './event-binding/event-binding.component';
import {MatInputModule} from '@angular/material/input';
import { DirectiveStructuralNgifComponent } from './directive-structural-ngif/directive-structural-ngif.component';
import { DirectiveStructuralNgforComponent } from './directive-structural-ngfor/directive-structural-ngfor.component';
import { DirectiveStructuralNgswitchComponent } from './directive-structural-ngswitch/directive-structural-ngswitch.component';
import { DirectiveAttributeNgstyleComponent } from './directive-attribute-ngstyle/directive-attribute-ngstyle.component';
import { DirectiveAttributeNgclassComponent } from './directive-attribute-ngclass/directive-attribute-ngclass.component';
import { ChildOfParentToChildComponent } from './parent-to-child/child-of-parent-to-child/child-of-parent-to-child.component';
import { ParentOfParentToChildComponent } from './parent-to-child/parent-of-parent-to-child/parent-of-parent-to-child.component';
import { ChildOfChildToParentComponent } from './child-to-parent/child-of-child-to-parent/child-of-child-to-parent.component';
import { ParentOfChildToParentComponent } from './child-to-parent/parent-of-child-to-parent/parent-of-child-to-parent.component';
import { VariableTemplateComponent } from './variable-template/variable-template.component';
import { HighlightDirective } from './directive-custom/highlight.directive';
import { ParentOfHighlightComponent } from './parent-of-highlight/parent-of-highlight.component';
import { PipesComponent } from './pipes/pipes.component';




@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    EventBindingComponent,
    DirectiveStructuralNgifComponent,
    DirectiveStructuralNgforComponent,
    DirectiveStructuralNgswitchComponent,
    DirectiveAttributeNgstyleComponent,
    DirectiveAttributeNgclassComponent,
    ChildOfParentToChildComponent,
    ParentOfParentToChildComponent,
    ChildOfChildToParentComponent,
    ParentOfChildToParentComponent,
    VariableTemplateComponent,
    HighlightDirective,
    ParentOfHighlightComponent,
    PipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
