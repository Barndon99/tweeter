/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData =  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

$(document).ready(function(){

  const createTweetElement = function (tweet) {
    const userName = tweet.user.name;
    const userHandle = tweet.user.handle;
    const content = tweet.content.text;
    const time = tweet.created_at;
    const avatar = tweet.user.avatar;
  
    const $tweet = `
    <article id="tweet">
      <header>
         <img src="${avatar}" alt="Profile Picture">
         <p>${userName}</p>
         <a id="userTweet"><p>${userHandle}</p></a>
       </header>
       <div class="bodyTweet">
         <p>${content}</p>
       </div>
       <footer>
         <time id="date" class="timeago" datetime="${time}"></time>
         <div id="iconsFooter">
             <i class="fas fa-flag"></i>
             <i class="fas fa-retweet"></i>
             <i class="fas fa-heart"></i>
       </div>
       </footer>
    </article>`
    
    return $tweet;
  }

  const $tweet = createTweetElement(tweetData);
  
  console.log($tweet); // to see what it looks like
  
  $('.container .new-tweet').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  
});