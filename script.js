function showBox() {
  document.querySelector(".box-options").classList.add("show-item");
}
function createParagraph() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div class="paragraph" draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
  <div id="input">
    <input type="text" placeholder="Digite o seu parágrafo">
    <button onclick="createSection()">Criar</button>
  </div>
</div>`;
}
function createSection() {
  const boxInput = document.querySelector("#input");
  const description = document.querySelector("input").value;
  let type = "";
  if (boxInput.parentNode.tagName === "DIV") {
    type = "paragraph";
  } else {
    type = "title";
  }
  boxInput.parentNode.innerHTML = description;
  boxInput.classList.add("hide-item");
  putRequest({ type, content: description });
}
function createTitle() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <h1 draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
    <div id="input">
      <input type="text" input="Digite seu título">
      <button onclick="createSection()">Criar</button>
    </div>
  </h1>
  `;
}
function createImage() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div id="input">
    <input type="text" input="Digite a URL da sua imagem">
    <button onclick="createSectionwithImage()">Criar</button>
  </div>
  <img src="" alt="image" class="hide-item img" draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
  `;
}
function createSectionwithImage() {
  const boxInput = document.querySelector("#input");
  const description = document.querySelector("input").value;
  boxInput.nextElementSibling.classList.remove("hide-item");
  boxInput.nextElementSibling.src = description;
  boxInput.remove();
  putRequest({ type: "img", content: description });
}
function createLine() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div class="line" draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
    <div></div>
  </div>
  `;
  putRequest({ type: "line" });
}
function drag(e) {
  e.dataTransfer.setData("firstElement", e.target.outerHTML);
  e.dataTransfer.effectAllowed = "move";
  setTimeout(() => {
    e.target.classList.add("hide-item");
  }, 0);
}
function allowDrop(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("firstElement");
  e.target.insertAdjacentHTML("beforeBegin", data);
  e.dataTransfer.clearData();
}
function putRequest(body) {
  const URL = "http://localhost:4001/api/getArticle";
  fetch(URL, {
    mode: "cors",
    method: "PUT",
    body: JSON.stringify(body),
  })
    .catch((res) => console.log(res))
    .then((res) => res.json())
    .then((res) => console.log(res));
}
function getRequest() {
  const URL = "http://localhost:4001/api/getArticle";
  return fetch(URL, {
    mode: "cors",
  });
}
loadingArticle();
function loadingArticle() {
  const article = document.querySelector("article");
  getRequest()
    .catch((res) => console.log(res))
    .then((response) => response.json())
    .then((data) =>
      data.forEach((e) => {
        if (e.type === "title") {
          article.innerHTML += `
          <h1 draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
          ${e.content}
          </h1>`;
        }
        if (e.type === "paragraph") {
          article.innerHTML += `
          <div class="paragraph" draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
            ${e.content}
          </div>
          `;
        }
        if (e.type === "line") {
          article.innerHTML += `
          <div class="line" draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
          <div></div>
        </div>`;
        }
        if (e.type === "img") {
          article.innerHTML += `<img src="${e.content}" alt="image" class="img" draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">`;
        }
      })
    );
}
