import { Component } from '@angular/core';
import {
  POLICY_DOCUMENTS_TABLE_COLUMN,
  POLICY_DOCUMENTS_TABLE_DATA,
} from 'src/app/constants/table.data';

@Component({
  selector: 'app-policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss'],
})
export class PolicyDocumentsComponent {
  tableColumns = [...POLICY_DOCUMENTS_TABLE_COLUMN];
  tableData = [...POLICY_DOCUMENTS_TABLE_DATA];

  downloadHandler(element: any) {
    const fileUrl = element.file_url;
    const fileName = `${element.name}`;
    const link = document.createElement('a');
    link.setAttribute('href', fileUrl);
    link.setAttribute('download', fileName);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
