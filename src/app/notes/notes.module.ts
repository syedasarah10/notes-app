import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesLayoutComponent } from './notes-layout/notes-layout.component';
import { NotesAppComponent } from './notes-app/notes-app.component';
import { NotesWidgetComponent } from './notes-widget/notes-widget.component';
import { CreateNoteModalComponent } from './create-note-modal/create-note-modal.component';
import { NotePageComponent } from './note-page/note-page.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NotesServiceService } from './notes-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    NotesLayoutComponent,
    NotesAppComponent,
    NotesWidgetComponent,
    CreateNoteModalComponent,
    NotePageComponent
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  exports:[
    NotesAppComponent
  ],
  providers:[
    NotesServiceService
  ]
})
export class NotesModule { }

