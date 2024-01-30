var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  //prevent auto submission
  e.preventDefault();

  var name = document.getElementById("name").value;
  var body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: name,
      body: body,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var results = document.getElementById("results");
      results.innerHTML = `<p>The title of the document is ${data.title}</p>
      <p>The body of the document is ${data.body}</p>`;
    });
});
