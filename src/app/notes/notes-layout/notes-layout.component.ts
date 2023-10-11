import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteModalComponent } from '../create-note-modal/create-note-modal.component';

@Component({
  selector: 'app-notes-layout',
  templateUrl: './notes-layout.component.html',
  styleUrls: ['./notes-layout.component.css']
})
export class NotesLayoutComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CreateNoteModalComponent);
  }
}
