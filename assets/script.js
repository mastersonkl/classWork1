queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=f6i1E3K6bAvXwFAjIFlMvDZWCIHtrD3r";

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
