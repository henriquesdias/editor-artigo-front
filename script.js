function showBox() {
  document.querySelector(".box-options").classList.add("show-item");
}
function createParagraph() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div class="paragraph">
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
  <h1>
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
  <img src="" alt="image" class="hide-item img">
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
  <div class="line"></div>
  `;
}
