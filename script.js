function showBox() {
  document.querySelector(".box-options").classList.add("show-item");
}
function createParagraph() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div class="paragraph">
  <div id="input">
    <input type="text">
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
      <input type="text">
      <button onclick="createSection()">Criar</button>
    </div>
  </h1>
  `;
}
function createImage() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div id="input">
    <input type="text">
    <button onclick="createSectionwithImage()">Criar</button>
  </div>
  <img src="" alt="image" class="hide-item">
  `;
}
function createSectionwithImage() {
  const boxInput = document.querySelector("#input");
  const description = document.querySelector("input").value;
  boxInput.nextElementSibling.classList.remove("hide-item");
  boxInput.nextElementSibling.src = description;
  boxInput.classList.add("hide-item");
}
function createLine() {
  const article = document.querySelector("article");
  article.innerHTML += `
  <div class="line"></div>
  `;
}
