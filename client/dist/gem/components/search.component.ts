import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Plugin } from '../models/plugin.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'search',
  templateUrl: 'gem/templates/search.html'
})
export class SearchComponent implements OnInit {
  private searchUrl: string = '/search';
  plugins: Plugin[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {
    for (var j = 0; j < 10; j++) {
      var plug = new Plugin(1, 'Best Plugin 123', '1.0.0', new Date(), 'This is my plugin.', 'user1')
      var str = '';
      for (var i = 0; i < 300; i++) {
        str += 'a';
      }
      plug.content = str;
      this.plugins.push(plug);
    }
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.getAll(params['plugin']));
  }

  getAll(searchText: string) {
    console.log(this.searchUrl + '?searchText=' + searchText+'');
    this.http.get(this.searchUrl + '?searchText=' + searchText+'').subscribe(res => console.log(res));
    //.subscribe(res => {
    //  this.messages = JSON.parse(res.text());
    //  if (this.messages[0] == 'Success') {
    //    this.dialog.closeAll();
    //    this.router.navigateByUrl('/home');
    //  }
    //});
  }
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
