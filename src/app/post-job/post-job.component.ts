import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
	public Editor = ClassicEditor;
 
  constructor() {}
 
  ngOnInit() {
  }

}
