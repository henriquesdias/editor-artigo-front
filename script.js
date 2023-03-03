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
  boxInput.parentNode.innerHTML = description;
  boxInput.classList.add("hide-item");
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
}
function createLine() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div class="line" draggable="true" ondragover="allowDrop(event)" ondrop="drop(event)" ondragstart="drag(event)">
    <div></div>
  </div>
  `;
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
