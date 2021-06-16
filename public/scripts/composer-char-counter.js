$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on("input", function() {
    const chars = $(this).val();

    if (chars.length < 141) {
    $(".counter").html(`${140 - chars.length}`);
    } else {
    $(".counter").html(`<a class="negativeValues">${140 - chars.length}</a>`);
    }
  });
  // These two JQuery statements add shadow to tweets and hover property to icons
  $("#tweet").hover(function(){
    $(this).toggleClass("hoverOver");
  });

  //Change Icon colors on hover
  $("i.fas.fa-flag").hover(function(){
    $(this).toggleClass("iconColor");
  })

  $("i.fas.fa-retweet").hover(function(){
    $(this).toggleClass("iconColor");
  })

  $("i.fas.fa-heart").hover(function(){
    $(this).toggleClass("iconColor");
  })
});

$(document).ready(function() {
  const timeElement = $('time.timeago');
  const newTime = timeago.format(timeElement.attr("datetime"));
  timeElement.append(newTime);
});


