import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateNoteModalComponent } from '../create-note-modal/create-note-modal.component';
import { NotesServiceService } from '../notes-service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-notes-layout',
  templateUrl: './notes-layout.component.html',
  styleUrls: ['./notes-layout.component.css']
})
export class NotesLayoutComponent implements OnInit  {

  notesData: Array<any> =[]
  
  constructor(
    public dialog: MatDialog, 
    private noteService: NotesServiceService,
    ) {}

  ngOnInit(): void {
    this.noteService.getAllData().subscribe(data => {
      console.log(data);
      this.notesData = data;
    })
  }

  openDialog() {
    this.dialog.open(CreateNoteModalComponent);
  }

  openNotesDialog(){
    this.dialog.open(CreateNoteModalComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
