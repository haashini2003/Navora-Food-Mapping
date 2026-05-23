/********************
 THEME
********************/
function toggleTheme() {

  document.body.classList.toggle("dark-theme");

  const themeBtn =
    document.getElementById("themeBtn");

  if (document.body.classList.contains("dark-theme")) {

    localStorage.setItem("theme", "dark");

    if (themeBtn) {
      themeBtn.innerHTML = "☀️";
    }

  } else {

    localStorage.setItem("theme", "light");

    if (themeBtn) {
      themeBtn.innerHTML = "🌙";
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {

  const theme =
    localStorage.getItem("theme");

  const themeBtn =
    document.getElementById("themeBtn");

  if (theme === "dark") {

    document.body.classList.add("dark-theme");

    if (themeBtn) {
      themeBtn.innerHTML = "☀️";
    }
  }

  loadCards();
});


/********************
 REVIEWS
********************/
let reviews = [];

function addReview() {

  const name =
    document.getElementById("reviewName").value;

  const text =
    document.getElementById("reviewText").value;

  const rating =
    document.getElementById("reviewRating").value;

  const imgInput =
    document.getElementById("reviewImage");

  let imageUrl = "";

  if (imgInput.files && imgInput.files[0]) {

    imageUrl =
      URL.createObjectURL(imgInput.files[0]);
  }

  reviews.push({
    name,
    text,
    rating,
    image: imageUrl
  });

  renderReviews();

  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
}

function renderReviews() {

  const container =
    document.getElementById("reviewList");

  container.innerHTML = "";

  reviews.forEach(r => {

    container.innerHTML += `

      <div class="review-card">

        <h4>${r.name}</h4>

        <p>${"⭐".repeat(r.rating)}</p>

        <p>${r.text}</p>

        ${r.image
          ? `<img src="${r.image}" class="review-img"/>`
          : ""
        }

        <button onclick="likeReview(this)">
          ❤️ Like
        </button>

      </div>
    `;
  });
}

function likeReview(btn) {
  btn.innerHTML = "❤️ Liked";
}


/********************
 SUGGEST
********************/
function submitSuggest() {
  alert("Thank you for your suggestion ❤️");
}


/********************
 SEARCH LOCATION
********************/
function searchLocation() {

  const location =
    document.getElementById("locationInput").value;

  if (location.trim() === "") {

    alert("Please enter a location");
    return;
  }

  alert("Searching in " + location);
}


/********************
 MAIN CATEGORY DATA
********************/
const places = [

  {
    name: "Hotel",
    type: "Stay",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Restaurant",
    type: "Food",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Cafe",
    type: "Coffee",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Pizza Hut",
    type: "Pizza",
    image:
      "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "KFC",
    type: "Food",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Fast Food",
    type: "Quick Bite",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=60"
  }

];


/********************
 LOAD MAIN CARDS
********************/
function loadCards() {

  const container =
    document.getElementById("cardsContainer");

  if (!container) return;

  container.innerHTML = "";

  places.forEach(place => {

    container.innerHTML += `

      <div class="card"
           onclick="handleCategory('${place.name}')">

        <img src="${place.image}" />

        <div class="card-content">

          <h3>${place.name}</h3>

          <p>${place.type}</p>

        </div>

      </div>
    `;
  });
}


/********************
 HANDLE CATEGORY
********************/
function handleCategory(category) {

  if (category === "Hotel") {
    window.location.href = "hotel.html";
  }

  else if (category === "Restaurant") {
    window.location.href = "restaurant.html";
  }

  else if (category === "Cafe") {
    window.location.href = "cafe.html";
  }

  else if (category === "KFC") {
    window.location.href = "kfc.html";
  }

  else if (category === "Pizza Hut") {
    window.location.href = "pizzahut.html";
  }

  else if (category === "Fast Food") {
    window.location.href = "fastfood.html";
  }
}


/********************
 OPEN POPUP
********************/
function openHotelPopup(data, title) {

  const popup =
    document.getElementById("hotelPopup");

  const popupTitle =
    document.querySelector(".popup-header h2");

  const grid =
    document.getElementById("hotelGrid");

  if (!popup || !popupTitle || !grid) {

    console.error(
      "hotelPopup OR hotelGrid OR popupTitle missing in HTML"
    );

    return;
  }

  popup.style.display = "flex";

  popupTitle.innerHTML = title;

  renderPopupCards(data);
}


/********************
 CLOSE POPUP
********************/
function closeHotel() {

  const popup =
    document.getElementById("hotelPopup");

  if (popup) {
    popup.style.display = "none";
  }
}


/********************
 RENDER POPUP CARDS
********************/
function renderPopupCards(list) {

  const grid =
    document.getElementById("hotelGrid");

  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(item => {

    grid.innerHTML += `

      <div class="hotel-card">

        <img
          src="${item.image}"
          class="hotel-img"
        />

        <h3>${item.name}</h3>

        <p>⭐ ${item.rating}</p>

        <button
          onclick="selectPlace('${item.name}')">

          View

        </button>

      </div>
    `;
  });
}


/********************
 FILTER SEARCH
********************/
function filterHotels() {

  const input =
    document.getElementById("hotelSearch");

  if (!input) return;

  const search =
    input.value.toLowerCase();

  const allData = [

    ...hotelList,
    ...restaurantList,
    ...cafeList,
    ...pizzaList,
    ...kfcList,
    ...fastFoodList

  ];

  const filtered =
    allData.filter(item =>
      item.name
        .toLowerCase()
        .includes(search)
    );

  renderPopupCards(filtered);
}


/********************
 SELECT PLACE
********************/
function selectPlace(name) {
  alert(name + " selected ❤️");
}


/********************
 HOTEL LIST
********************/
const hotelList = [

  {
    name: "Grand Galaxy Hotel",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=60",
    rating: "4.9"
  },

  {
    name: "Ocean View Inn",
    image:
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=900&q=60",
    rating: "4.7"
  },

  {
    name: "Royal Nest Hotel",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=60",
    rating: "4.8"
  },

  {
    name: "Sunrise Resort",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=60",
    rating: "4.6"
  }

];


/********************
 RESTAURANT LIST
********************/
const restaurantList = [

  {
    name: "Spice Garden",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=60",
    rating: "4.8"
  },

  {
    name: "Royal Dine",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=60",
    rating: "4.7"
  }

];


/********************
 CAFE LIST
********************/
const cafeList = [

  {
    name: "Coffee Bliss",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=60",
    rating: "4.8"
  },

  {
    name: "Mocha Heaven",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=60",
    rating: "4.6"
  }

];


/********************
 PIZZA LIST
********************/
const pizzaList = [

  {
    name: "Pizza Hut Colombo",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=60",
    rating: "4.7"
  }

];


/********************
 KFC LIST
********************/
const kfcList = [

  {
    name: "KFC Colombo",
    image:
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&w=900&q=60",
    rating: "4.8"
  }

];


/********************
 FAST FOOD LIST
********************/
const fastFoodList = [

  {
    name: "Burger Spot",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=60",
    rating: "4.7"
  }

];