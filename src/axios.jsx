import axios from 'axios';
import {movies, actions} from './Constants/Constants'

const instance = axios.create({
  movies: movies,
  actions: actions,
});

export default instance;