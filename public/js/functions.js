//var jquery = require('jquery')
//var benefits = require('./benefits.js')

document.addEventListener("DOMContentLoaded",
  function () {
    console.log('DOM content loaded')
    //event function
    function set_vals(event){
      console.log(event.srcElement.id);
      console.log(benefits)
      console.log(benefits.multi)
      
    }
    // Unobtrusive event binding
    document.querySelector("button").addEventListener("click", set_vals);
  }
);

function insert() {
  console.log('loading requested item');
  // $.get('./snippets/test.html', function(data){
  //   $('#ajax_result').html(data);
  // });
  $.ajax({
    method: 'GET',
    url: 'data/test.json',
    datatype: 'json'
  }).done(function (data){
    console.log(data);
    data = $.makeArray(data);
    $.map(data, function(item, i){
      console.log(item);
      $('#ajax_result').append(`<p>${item.item.val}</p>`)
    });
  });
}