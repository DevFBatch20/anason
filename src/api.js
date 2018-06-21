import axios from 'axios';

export default axios.create({
  baseURL: 'https://amazonb20.herokuapp.com/api/v1/',
});
