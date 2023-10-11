import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes-widget',
  templateUrl: './notes-widget.component.html',
  styleUrls: ['./notes-widget.component.css'],
})

export class NotesWidgetComponent {

  @Input() noteText: string = '';
  @Input() noteTitle: string = '';
}
