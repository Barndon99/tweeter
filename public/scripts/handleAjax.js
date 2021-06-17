//$(document).ready(function(){
//  $('form').submit(function(event){
//    event.preventDefault();
//   
//    const formData = $(this).serialize();
//    console.log(formData);
//    if((formData.length - 5) > 140) {
//      return alert("Too many characters!!");
//    }
//
//    if(formData === "text=") {
//      $('textarea').val('');
//      return alert("Cannot Submit a blank tweet");
//    }
//
//    $.ajax({
//      type: "POST",
//      url: "/tweets",
//      data: formData,
//      dataType: "json",
//    }).done(function (data) {
//      console.log("in function");
//      //loadTweets();
//    });
//
//    console.log('this seems to be working');
//  });
//});
