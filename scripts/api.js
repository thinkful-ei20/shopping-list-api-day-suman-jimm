'use strict';
/* global */

// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sumanjimm';

  function getItems(callback){
    callback('api module works!');
  }

  return {
    getItems,
  };
}());