$('.nav-toggle').click(function(){
	console.log($(this));
	$(this).toggleClass('open');
	$(".nav").slideToggle();
});

function getGit(username) {
  $.getJSON("https://api.github.com/users/" + username + "/repos?access_token=460652d3e53333c115958f31e88bcd3f300683ca", function(data, status) {
    var repos = [];
    $.each(data, function(key, val) {
      repos.push("<li id=" + val.id + "'><a href='" + val.html_url + "' target='_blank'>" + val.name + "</a></li>");
    });

    $("<ul/>", {
      "class": "git-repo",
      "html": repos.join("")
    }).appendTo(".repos");
  }, 'jsonp');
}
getGit("mcmullengreg");
