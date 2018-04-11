'use strict';
/* global */

// eslint-disable-next-line no-unused-vars
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sumanjimm';

  function getItems(callback){
    //callback('api module works!');
    $.getJSON(`${BASE_URL}/items`,callback);
  }

  function createItem(name, callback){
    let newItem =JSON.stringify({
      name : name,
    });
    $.ajax({
      url : `${BASE_URL}/items`,
      method : 'POST',
      data : newItem,
      contentType : 'application/json',
      success : callback,
    });    
    
  }

  return {
    getItems,
    createItem,
  };
}());