import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  public Editor = ClassicEditor;
  urgency: String[] = [    "Really Urgent","Urgent","Not Urgent"];

  level: String[] = ["Basic", "Entry", "Junior", "Senior"];
  categories: String[] = ["IT", "Accounting", "Plumbiing", "Construction", "Cleaning"];
  constructor() {}
 
  ngOnInit() {
    // this.Editor.ckeditor.ClassicEditor.css.
  }

}
