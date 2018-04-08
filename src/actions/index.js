import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=lkjlkjlkjasdas';

const MY_VAR = 'leoStinkys';

export function fetchPosts() {
  //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  const request = axios.get('http://reduxblog.herokuapp.com/api/posts?key=lkjlkjlkjasdas');
  //console.log("url is: ", request);
  console.log(`my fav smell is: ${MY_VAR}`);
  console.log('my NEW fave smell is:', API_KEY);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
