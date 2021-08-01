import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Content {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {



  pages: Object = {
    'home': { title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg' },
    'about': { title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg' },
    'contact': { title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg' }
  };

  constructor(private httpClient: HttpClient) { }

  getContent(url: string): Observable<any> {
    return this.httpClient.get('url');
  }


}
