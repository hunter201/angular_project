import { Component, OnInit } from '@angular/core';
import { ContentService } from '../service/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {


  

  constructor(private contentService: ContentService) { }

  
 

  ngOnInit(): void {
    
  }

  getData(): void {
    
    
  }

}

