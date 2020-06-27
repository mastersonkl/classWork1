queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=f6i1E3K6bAvXwFAjIFlMvDZWCIHtrD3r";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  var results = response.docs;

  for (var i = 0; i < results.length; i++) {
    var articlesDiv = $("<div>");
    var p = $("<p>").text(results[i].headline);
    console.log(results[i].headline);
  }
});
