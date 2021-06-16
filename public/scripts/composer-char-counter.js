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
});

$(document).ready(function() {
  const timeElement = $('time.timeago');
  const newTime = timeago.format(timeElement.attr("datetime"));
  timeElement.append(newTime);
});


