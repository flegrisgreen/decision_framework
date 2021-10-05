// var jquery = require('jquery')
// var benefits = require('./benefits.js')

document.addEventListener("DOMContentLoaded",
  function () {
    console.log('DOM content loaded')

    $('.top-btn').on('click', function(e){
      //console.log(e);
      var source = e.currentTarget.id;
  
      if(source == "functions"){
        $('.sidenav').empty();
        $.map(agg_functions, function(item, i){
          $(".sidenav").append(`<button type="button" class="func-btn" id="${item.function}">${item.function}</button>`);
      })
      $(".sidenav").append('<p style="color: black; height:50px;">Spacer</p>');
      func_btns()

      }else if(source == 'benefits'){
        $('.sidenav').empty();
        $.map(benefits, function(item, i){
          $(".sidenav").append(`<button type="button" class="ben-btn" id="${item.tag}">${item.benefit}</button>`);
      })
      $(".sidenav").append('<p style="color: black; height:50px;">Spacer</p>');
      benefit_btns();

    }else{
      $('.sidenav').empty();
      $('.content').empty();
      $('.col-head').remove();
    }
    }); 
  }
);

function func_btns(){
  $('.func-btn').on('click', function(e){
    $('.content').empty();
    $('.col-head').remove();
    var source = e.currentTarget.id;
    var func = agg_functions[source];
    $("#description").html(`<h3 class="col-head">${func.function}</h3>`);
    $("#col1").prepend(`<h4 class="col-head">Function class</h4>`);
    $("#col2").prepend(`<h4 class="col-head">Requirements</h4>`);
    $("#col3").prepend(`<h4 class="col-head">Methods</h4>`);

    $('#col1 ul').append(`<li>${func.function_class.agg}</li>`);
    
    for(i=0; i < func.requirements.length;i++){
    $('#col2 ul').append(`<li>${func.requirements[i]}</li>`);
    }
    for(i=0; i < func.methods.length;i++){
    $('#col3 ul').append(`<li>${func.methods[i]}</li>`);
    }
  })
}

function benefit_btns(){
  $('.ben-btn').on('click', function(e){
    $('.content').empty();
    $('.col-head').remove();
    var source = e.currentTarget.id;
    var ben = benefits[source];
    $("#description").append(`<h3 class="col-head">${ben.description}</h3>`);
    $("#col1").prepend(`<h4 class="col-head">Related functions</h4>`);
    $("#col2").prepend(`<h4 class="col-head">Roles</h4>`);
    $("#col3").prepend(`<h4 class="col-head">Type of aggregate</h4>`);
    for(i=0; i < ben.related_functions.length;i++){
    $('#col1 ul').append(`<li>${ben.related_functions[i].function}</li>`);
    }
    for(i=0; i < ben.role.length;i++){
    $('#col2 ul').append(`<li>${ben.role[i]}</li>`);
    }
    for(i=0; i < ben.type_of_agg.length;i++){
    $('#col3 ul').append(`<li>${ben.type_of_agg[i]}</li>`);
    }
  })
}

// function insert() {
//   console.log('loading requested item');
//   // $.get('./snippets/test.html', function(data){
//   //   $('#ajax_result').html(data);
//   // });
//   $.ajax({
//     method: 'GET',
//     url: './benefits.js',
//     datatype: 'script'
//   }).done(function (data){
//     console.log(data);
//     console.log(benefits)
//     $.map(data, function(item, i){
//       console.log(item);
//       $('#ajax_result').append(`<p>${item.benefit}</p>`)
//     });
//   });
// }