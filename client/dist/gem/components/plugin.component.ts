import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';

import {
  PluginService
} from '../services/plugin.service';

type Plugin = {
  title: string;
  content: string,
}

@Component({
  selector: 'plugin',
  templateUrl: 'gem/templates/plugin.html'
})
export class PluginComponent {
  /*
  todos: Plugin[] = [];
  todoForm: Todo;

  constructor(private _todoService: PluginService) {
    this.todoForm = {
      "todoMessage": ""
    };
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this._todoService
        .getAll()
        .subscribe((todos) => {
          this.todos = todos;
        });
  }

  add(message:string):void {
    this._todoService
        .add(message)
        .subscribe((m) => {
          this.todos.push(m);
          this.todoForm.todoMessage = "";
        });
  }

  remove(id:string):void {
    this._todoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      })
  }
  */
}
