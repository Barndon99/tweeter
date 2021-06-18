$(document).ready(function() {
  //Enables Timestamps
  const timeElement = $('time.timeago');
  const newTime = timeago.format(timeElement.attr("datetime"));
  timeElement.append(newTime);

  const renderTweets = function(tweets) {
    $(".container .tweets").empty();
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      $('.container .tweets').prepend($tweet);
    }
  };

  //Define escape function
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Creates a new DOM object for each tweet
  const createTweetElement = function (tweet) {
    const userName = tweet.user.name;
    const userHandle = tweet.user.handle;
    const content = tweet.content.text;
    const time = tweet.created_at;
    const avatar = tweet.user.avatars;
  
    const $tweet = `
    <article class="tweet" class="">
      <header>
         <img src="${escape(avatar)}" alt="Profile Picture">
         <p>${escape(userName)}</p>
         <a id="userTweet"><p>${escape(userHandle)}</p></a>
       </header>
       <div class="bodyTweet">
         <p>${escape(content)}</p>
       </div>
       <footer>
         <time id="date" class="timeago" datetime="${escape(time)}">${timeago.format(time)}</time>
         <div id="iconsFooter">
             <i class="fas fa-flag iconColor"></i>
             <i class="fas fa-retweet iconColor"></i>
             <i class="fas fa-heart iconColor"></i>
       </div>
       </footer>
    </article>`;
    
    return $tweet;
  };
  // Get's tweets from the /tweets path
  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: "/tweets"
    }).done(function (data) {
      console.log(data);
      renderTweets(data);
    });
  };
  loadTweets();
  //Handles form submission with JQuery shorthand AJAX
  $('form').submit(function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
  
    if ((formData.length - 5) > 140) {
      return $('#error').slideDown(1000);
    }

    if (formData === "text=") {
      $('textarea').val('');
      return $('#error2').slideDown(1000);
    }

    $.post('/tweets', formData).done(function(data){
      $('textarea').val('');
      $('.counter').val(140);
      loadTweets();
    });
  });
});