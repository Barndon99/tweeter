$(document).ready(function(){

  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      $('.container .tweets').prepend($tweet);
    }
  }
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
         <img src="${avatar}" alt="Profile Picture">
         <p>${userName}</p>
         <a id="userTweet"><p>${userHandle}</p></a>
       </header>
       <div class="bodyTweet">
         <p>${content}</p>
       </div>
       <footer>
         <time id="date" class="timeago" datetime="${time}">${timeago.format(time)}</time>
         <div id="iconsFooter">
             <i class="fas fa-flag iconColor"></i>
             <i class="fas fa-retweet iconColor"></i>
             <i class="fas fa-heart iconColor"></i>
       </div>
       </footer>
    </article>`
    
    return $tweet;
  }
  // Get's tweets from the /tweets path
  const loadTweets = function() {
    $.ajax({
      type: "GET",
      url: "/tweets"
    }).done(function (data) {
      console.log(data);
      renderTweets(data);
    });
  }
  //Call loadTweets to render function
  loadTweets();
});