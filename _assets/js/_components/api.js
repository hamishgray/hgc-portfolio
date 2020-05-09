function truncateString(str, length) {
  return str.length > length ? str.substring(0, length - 3) + '...' : str
}

// =========================================
//  STRAPI
// =========================================



var endpoint = "http://localhost:1337";
var request = new XMLHttpRequest();


if( $('body').hasClass('layout--posts') ){
  // GET ALL POSTS
  request.open('GET', endpoint + '/posts/', true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    data.forEach(post => {

      var container = "<div class='col col-6'><div class='post-tile'>";

      if(post.cover && post.cover !=""){
        container += "<div class='img img--16-9' style='background-image: url("+endpoint+post.cover[0].url+")'></div>";
      }
      if(post.title && post.title !=""){
        container += "<div class='boxpad--lg'><h2 class='t t4'>" + post.title + "</h2>";
      }
      if(post.content && post.content !=""){
        container += "<p>" + truncateString(post.content,160) + "</p>";
      }
      container += "<a href='post/?post=" + post.id + "'>Read more</a>";

      $('#posts').append(container + "</div></div></div>");

    });

  }
  request.send();
}



if( $('body').hasClass('layout--single') ){

  // GET SINGLE POST
  var postId = queryString('post');

  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', endpoint + '/posts/' + postId, true)

  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    var container = $("#single-post");

    if(data.cover && data.cover !=""){
      container.append("<div class='img img--21-9' style='background-image: url(" + endpoint + data.cover[0].url + ")'></div>");
    }
    if(data.title && data.title !=""){
      container.append("<h1 class='t t1'>" + data.title + "</h1>");
    }
    if(data.content && data.content !=""){
      container.append("<p>" + data.content + "</p>");
    }

  }

  // Send request
  request.send()
}

