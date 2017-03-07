import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { PluginService } from '../services/plugin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Plugin } from '../models/plugin.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'search',
  templateUrl: 'gem/templates/search.html'
})
export class SearchComponent implements OnInit {
  private searchUrl: string = '/search';
  private searchText: string = '';
  pink: string = AppConstants.pink;
  purple: string = AppConstants.purple;
  plugins: Plugin[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => this.getAll(params['plugin']));
  }

  getPlugins(arr){
    console.log(arr[0]);
    this.plugins = arr;
    //for(i=0;i<arr.)
  }

  getAll(searchText: string) {
    this.searchText = searchText;
    this.http.get(this.searchUrl + '?searchText=' + searchText+'').subscribe(res => this.getPlugins(JSON.parse(res.text())));
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
