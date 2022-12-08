export class Model {
  user:string;
  items;
  constructor() {
    this.user = "ibrahim";
    this.items = [
      new TodoItem("Spor", false),
      new TodoItem("Kahvaltı", true),
      new TodoItem("Kod Yazma", true),
      new TodoItem("İngilizce Speaking", false),

    ];

  }
}
// const m = new Model();
export class TodoItem {
  description;
  action;
  constructor(description:string, action:boolean ){
    this.description = description;
    this.action = action;
  }
}
