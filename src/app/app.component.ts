import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eğitim için oluşturulmuş bir angular projsidir. Başarılar';
  name= 'İbrahim';
  model = new Model();
  getName(){
    return this.model.user;
  }
  getItem(){
    return this.model.items.filter(item=>!item.action);
  }
}
