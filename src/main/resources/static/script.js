/********************
 THEME
********************/
function toggleTheme() {

  document.body.classList.toggle("dark-theme");

  const themeBtn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    if (themeBtn) themeBtn.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    if (themeBtn) themeBtn.innerHTML = "🌙";
  }
}

window.addEventListener("DOMContentLoaded", () => {

  const theme = localStorage.getItem("theme");
  const themeBtn = document.getElementById("themeBtn");

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeBtn) themeBtn.innerHTML = "☀️";
  } else {
    document.body.classList.remove("dark-theme");
  }

  loadCards();

  updateCartUI(); // ✅ CART INIT FIX
});


/********************
 REVIEWS
********************/
let reviews = [];

function addReview() {

  const name = document.getElementById("reviewName").value;
  const text = document.getElementById("reviewText").value;
  const rating = document.getElementById("reviewRating").value;
  const imgInput = document.getElementById("reviewImage");

  let imageUrl = "";

  if (imgInput?.files?.[0]) {
    imageUrl = URL.createObjectURL(imgInput.files[0]);
  }

  reviews.push({ name, text, rating, image: imageUrl });

  renderReviews();

  document.getElementById("reviewName").value = "";
  document.getElementById("reviewText").value = "";
}

function renderReviews() {

  const container = document.getElementById("reviewList");
  if (!container) return;

  container.innerHTML = "";

  reviews.forEach(r => {

    container.innerHTML += `
      <div class="review-card">
        <h4>${r.name}</h4>
        <p>${"⭐".repeat(r.rating)}</p>
        <p>${r.text}</p>

        ${r.image ? `<img src="${r.image}" class="review-img"/>` : ""}

        <button onclick="likeReview(this)">❤️ Like</button>
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
  const location = document.getElementById("locationInput").value;

  if (!location.trim()) {
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Restaurant",
    type: "Food",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Cafe",
    type: "Coffee",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Pizza Hut",
    type: "Pizza",
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "KFC",
    type: "Food",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=1200&q=60"
  },

  {
    name: "Fast Food",
    type: "Quick Bite",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=60"
  }

];


/********************
 LOAD CARDS
********************/
function loadCards() {

  const container = document.getElementById("cardsContainer");
  if (!container) return;

  container.innerHTML = "";

  places.forEach(place => {

    container.innerHTML += `
      <div class="card" onclick="handleCategory('${place.name}')">
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
 CART SYSTEM (FIXED)
********************/
let cart = []; // ✅ IMPORTANT FIX

function addToCart(item){
  cart.push(item);
  updateCartUI();
}

function updateCartUI(){
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cart.length;
}

function openCart(){

  if(cart.length === 0){
    alert("Cart is empty 🛒");
    return;
  }

  let msg = "🛒 Your Cart:\n\n";

  cart.forEach((c,i)=>{
    msg += `${i+1}. ${c.name} - Rs ${c.price}\n`;
  });

  alert(msg);
}


/********************
 HANDLE CATEGORY
********************/
function handleCategory(category) {

  if (category === "Hotel") window.location.href = "hotel.html";
  else if (category === "Restaurant") window.location.href = "restaurant.html";
  else if (category === "Cafe") window.location.href = "cafe.html";
  else if (category === "KFC") window.location.href = "kfc.html";
  else if (category === "Pizza Hut") window.location.href = "pizzahut.html";
  else if (category === "Fast Food") window.location.href = "fastfood.html";
}


/********************
 POPUP SYSTEM
********************/
function openHotelPopup(data, title) {

  const popup = document.getElementById("hotelPopup");
  const popupTitle = document.querySelector(".popup-header h2");

  if (!popup || !popupTitle) return;

  popup.style.display = "flex";
  popupTitle.innerHTML = title;

  renderPopupCards(data);
}

function closeHotel() {
  const popup = document.getElementById("hotelPopup");
  if (popup) popup.style.display = "none";
}


/********************
 RENDER POPUP
********************/
function renderPopupCards(list) {

  const grid = document.getElementById("hotelGrid");
  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(item => {

    grid.innerHTML += `
      <div class="hotel-card">
        <img src="${item.image}" class="hotel-img"/>
        <h3>${item.name}</h3>
        <p>⭐ ${item.rating}</p>
        <button onclick="selectPlace('${item.name}')">View</button>
      </div>
    `;
  });
}


/********************
 SELECT
********************/
function selectPlace(name) {
  alert(name + " selected ❤️");
}


/********************
 FILTER SEARCH
********************/
function filterHotels() {

  const input = document.getElementById("hotelSearch");
  if (!input) return;

  const search = input.value.toLowerCase();

  const allData = [
    ...(hotelList || []),
    ...(restaurantList || []),
    ...(cafeList || []),
    ...(pizzaList || []),
    ...(kfcList || []),
    ...(fastFoodList || [])
  ];

  const filtered = allData.filter(item =>
    item.name.toLowerCase().includes(search)
  );

  renderPopupCards(filtered);
}


/********************
 DATA LISTS
********************/
const hotelList = [
  { name: "Grand Galaxy Hotel", image: "...", rating: "4.9" },
  { name: "Ocean View Inn", image: "...", rating: "4.7" }
];

const restaurantList = [
  { name: "Spice Garden", image: "...", rating: "4.8" }
];

const cafeList = [
  { name: "Coffee Bliss", image: "...", rating: "4.8" }
];

const pizzaList = [
  { name: "Pizza Hut Colombo", image: "...", rating: "4.7" }
];

const kfcList = [
  { name: "KFC Colombo", image: "...", rating: "4.8" }
];

const fastFoodList = [
  { name: "Burger Spot", image: "...", rating: "4.7" }
];