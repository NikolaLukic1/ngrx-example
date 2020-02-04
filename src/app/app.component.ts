import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './interfaces/post';
import { Store, select } from '@ngrx/store';
import { PostState } from './store/state/post.state';
import { Router } from '@angular/router';
import { GetPosts } from './store/actions/post.actions';
import { selectedPosts } from './store/selector/post.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts$: Observable<Post[]>;
  title = 'it255-v12';
 
  constructor(private _store: Store<PostState>, private _router: Router) {
    this.posts$ = this._store.pipe(selectedPosts);
  }
 
  ngOnInit() {
    this._store.dispatch(new GetPosts());
  }

  testFun() {
    this.posts$ = this._store.pipe(selectedPosts);
  }
 

}