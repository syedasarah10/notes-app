import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-create-note-modal',
  templateUrl: './create-note-modal.component.html',
  styleUrls: ['./create-note-modal.component.css']
})
export class CreateNoteModalComponent {
  @Output() noteText: string = '';
  @Output() noteTitle: string = '';
  
  // onSaveClick(save : any){
  //   noteSaved = [{noteTitle:'', noteText: ''}];
  //   this.http.post("https://65253d6967cfb1e59ce6efa0.mockapi.io/note", noteSaved).subscribe((data) => {});
  // }

 onSaveClick(save : any){
  console.log(save);
 }

  // onSaveClick(save: any): Observable<any> {
  //   return this.http.post<any>(this.noteTitle, this.noteText);
  // }


  //const noteSaved = [{noteTitle: '', noteText:''}];
  // onSaveClick(save:any){
  //   return this.httpClient.post('https://65253d6967cfb1e59ce6efa0.mockapi.io/note', save).subscribe(
  //       (response: any) => {
  //           // Use your response data here
  //           console.log(response);
  //       }
  //   );
  // }

  // notesData: Array<any> =[]
  
  // constructor(private noteService: NotesServiceService) {}

  // ngOnInit(): void {
  //   this.noteService.onSaveClick(this.noteText).subscribe((data: any[]) => {
  //     console.log(data);
  //     this.notesData = data;
  //   })
  // }

}
