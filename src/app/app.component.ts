import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eğitim için oluşturulmuş bir angular projsidir. Başarılar';
  name= 'İbrahim';
  isDisplay=false;
  model = new Model();
  getName(){
    return this.model.user;
  }
  getItem(){
    if(this.isDisplay){
      return this.model.items;
    }
    else{
      return this.model.items.filter(item=>!item.action);
    }

  }
  addItem(value:string){
    if(value!=""){
      this.model.items.push(new TodoItem(value, false));
    }

  }

}
