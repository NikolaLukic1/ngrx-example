import { createSelector } from '@ngrx/store';
 
const selectPosts = (state: any) => state.posts;
 
export const selectedPosts = createSelector(
  selectPosts,
  (state: any) => {
    return state.posts;
  }
);