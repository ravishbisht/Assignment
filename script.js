const cards = document.querySelector("#cards");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => renderData(data));

function renderData(data) {
  data.map((elem, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    if (index === 0) {
      card.classList.add("first-card");
    }
    card.innerHTML = `<div class="card">
    <img src="${elem.image}" alt="Dr. img" class="drimg">
    <div class="card-content">
    <h2>${elem.name}</h2>
    <p>${elem.specialty}</p>
    </div> 
  </div>`;
    cards.appendChild(card);
  });
}
