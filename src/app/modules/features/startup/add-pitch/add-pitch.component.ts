import { Component } from '@angular/core';

@Component({
  selector: 'app-add-pitch',
  templateUrl: './add-pitch.component.html',
  styleUrls: ['./add-pitch.component.scss'],
})
export class AddPitchComponent {
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => reader.readAsDataURL(file);
    }
  }

  content: string = '';
  editorConfig = {
    toolbar: [
      { name: 'document', items: ['Print'] },
      { name: 'clipboard', items: ['Undo', 'Redo'] },
      { name: 'styles', items: ['Styles', 'Format'] },
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'],
      },
      {
        name: 'paragraph',
        items: [
          'NumberedList',
          'BulletedList',
          '-',
          'Outdent',
          'Indent',
          '-',
          'Blockquote',
        ],
      },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'insert', items: ['Image', 'Table', 'HorizontalRule'] },
      { name: 'tools', items: ['Maximize'] },
      { name: 'editing', items: ['Scayt'] },
      { name: 'mode', items: ['Source'] },
    ],
  };
}
