let posts = "http://my-json-server.typicode.com/typicode/demo/posts",
  comments = " https://my-json-server.typicode.com/typicode/demo/comments";

  fetch('http://my-json-server.typicode.com/typicode/demo/posts')
  .then(response => response.json())
    .then(json => console.log(json))
    .then (json => json.map(function () {
        return console.log(json.title);
    }))
    .catch(err => console.log(err));
