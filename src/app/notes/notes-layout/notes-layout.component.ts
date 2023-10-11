import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateNoteModalComponent } from '../create-note-modal/create-note-modal.component';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-notes-layout',
  templateUrl: './notes-layout.component.html',
  styleUrls: ['./notes-layout.component.css']
})
export class NotesLayoutComponent implements OnInit  {

  notesData: Array<any> =[]
  
  constructor(public dialog: MatDialog, private noteService: NotesServiceService) {}

  ngOnInit(): void {
    this.noteService.getAllData().subscribe(data => {
      console.log(data);
      this.notesData = data;
    })
  }

  openDialog() {
    this.dialog.open(CreateNoteModalComponent);
  }
}
