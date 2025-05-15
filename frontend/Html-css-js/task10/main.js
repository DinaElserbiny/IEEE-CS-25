const request = new XMLHttpRequest();
request.open("GET", "articles.json");

request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    const mainData = JSON.parse(request.responseText);

    mainData.forEach(article => {
      article.category = "All";
    });

    console.log("mainData Variable Content");
    console.log(mainData);

    const updatedData = JSON.stringify(mainData);
    console.log("updatedData Variable Content");
    console.log(updatedData);

    const container = document.getElementById("data");

    mainData.forEach(article => {
      const articleDiv = document.createElement("div");
      articleDiv.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.body}</p>
        <p>Author: ${article.author}</p>
        <p>Category: ${article.category}</p>
      `;
      container.appendChild(articleDiv);
    });

    console.log("Data Loaded");
  }
};

request.send();
