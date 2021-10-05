//var jquery = require('jquery')

document.addEventListener("DOMContentLoaded",
  function () {
    console.log('DOM content loaded')
    //event function
      $('#aggregates_form').on('click', agg_ajax);
    }
  );
function agg_ajax(){
  console.log('agg_ajax function invoked')
  $.ajax({
    method: 'GET',
    url: './snippets/agg_form.html',
    datatype: 'html'
  }).done(function(data){
    $('.ajax_form').html(data);
    bens_list();
  });
}

function bens_list(){
  $('#role').on('blur',function(){
    var choice =$('#role').val();
    console.log(choice);
    $('#benefits_list div').empty();
    $.map(benefits, function(item, i){
      if(item.role.includes(choice)){
        $('#benefits_list').append(`<div><input class="form-check-input" type="checkbox" value="${item.tag}" name="benefits">
        <label class="form-check-label" for="${item.tag}">${item.benefit}</label></div>`)
      }
    })
  })
}