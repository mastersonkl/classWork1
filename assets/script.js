queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=f6i1E3K6bAvXwFAjIFlMvDZWCIHtrD3r";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response.response.docs);
  var results = response.response.docs;

  for (var i = 0; i < results.length; i++) {
    var articlesDiv = $("<div>");
    var p = $("<p>").text(JSON.stringify(results[i].headline.main));
    console.log(results[i].headline);
    $("#top-articles").append(p);
  }
});
