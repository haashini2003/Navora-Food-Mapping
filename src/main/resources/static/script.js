 function toggleTheme() {
   document.body.classList.toggle("dark-theme");

   // optional save preference
   if (document.body.classList.contains("dark-theme")) {
     localStorage.setItem("theme", "dark");
   } else {
     localStorage.setItem("theme", "light");
   }
 }

 // load saved theme
 window.onload = function () {
   const theme = localStorage.getItem("theme");

   if (theme === "dark") {
     document.body.classList.add("dark-theme");
   }
 };

 // REVIEWS
 let reviews = [];

 function addReview() {
   const name = document.getElementById("reviewName").value;
   const text = document.getElementById("reviewText").value;
   const rating = document.getElementById("reviewRating").value;
   const imgInput = document.getElementById("reviewImage");

   let imageUrl = "";

   if (imgInput.files && imgInput.files[0]) {
     imageUrl = URL.createObjectURL(imgInput.files[0]);
   }

   const review = {
     name,
     text,
     rating,
     image: imageUrl
   };

   reviews.push(review);
   renderReviews();

   document.getElementById("reviewName").value = "";
   document.getElementById("reviewText").value = "";
 }

 function renderReviews() {
   const container = document.getElementById("reviewList");
   container.innerHTML = "";

   reviews.forEach(r => {
     container.innerHTML += `
       <div class="review-card">
         <h4>${r.name}</h4>
         <p>${"⭐".repeat(r.rating)}</p>
         <p>${r.text}</p>
         ${r.image ? `<img src="${r.image}" />` : ""}
         <button onclick="likeReview(this)">❤️ Like</button>
       </div>
     `;
   });
 }

 function likeReview(btn) {
   btn.innerText = "❤️ Liked";
 }

 // SUGGEST
 function submitSuggest() {
   alert("Thank you for your suggestion!");
 }

 const places = [
   {
     name: "Hotel",
     type: "Stay",
     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
     desc: "Luxury hotel with AC rooms, pool and free WiFi"
   },
   {
     name: "Restaurant",
     type: "Food",
     image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60",
     desc: "Multi cuisine restaurant with Sri Lankan foods"
   },
   {
     name: "Cafe",
     type: "Coffee",
     image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=60",
     desc: "Cozy cafe with coffee, snacks and desserts"
   },
   {
     name: "Pizza Hut",
     type: "Pizza",
     image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=60",
     desc: "Famous Pizza Hut style cheesy pizzas"
   },
   {
     name: "KFC",
     type: "Food",
     image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=60",
     desc: "Hot fried chicken meals with fries and drinks"
   },
   {
     name: "Fast Food",
     type: "Quick Bite",
     image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=60",
     desc: "Burgers, fries and quick meals"
   }
 ];

 // LOAD CARDS
 function loadCards() {
   const container = document.getElementById("cardsContainer");
   container.innerHTML = "";

   places.forEach(p => {
     container.innerHTML += `
       <div class="card" onclick="openDetails('${p.name}')">
         <img src="${p.image}" />
         <div class="card-content">
           <h3>${p.name}</h3>
           <p>${p.type}</p>
         </div>
       </div>
     `;
   });
 }

 // OPEN DETAILS MODAL
 function openDetails(name) {
   const item = places.find(p => p.name === name);

   document.getElementById("modalBody").innerHTML = `
     <h2>${item.name}</h2>
     <img src="${item.image}" style="width:100%;border-radius:10px"/>
     <p style="margin-top:10px">${item.desc}</p>
   `;

   document.getElementById("detailsModal").style.display = "block";
 }

 // CLOSE MODAL
 function closeModal() {
   document.getElementById("detailsModal").style.display = "none";
 }

 // INIT
 loadCards();

 const hotelList = [
   "Grand Galaxy Hotel",
   "Ocean View Inn",
   "Sunrise Resort",
   "Blue Sky Lodge",
   "Royal Nest Hotel",
   "Hill Top Stay",
   "City Light Hotel",
   "Pearl Residency",
   "Skyline Suites",
   "Golden Palm Hotel",
   "Elite Comfort Inn",
   "Mountain Breeze Hotel",
   "Harbour View Stay",
   "Crystal Lake Hotel",
   "Urban Star Lodge",
   "Royal Crown Hotel",
   "Silver Sand Resort",
   "Palm Grove Inn",
   "Metro Grand Stay",
   "Diamond Bay Hotel",
   "Golden Star Residency",
   "Sunset Paradise Hotel",
   "Royal Beach Inn",
   "Evergreen Hills Hotel",
   "Infinity Suites",
   "Cloud Nine Hotel",
   "Lotus Grand Stay",
   "Velvet Sky Hotel",
   "Crystal Crown Inn",
   "Paradise Gate Hotel",
   "Blue Ocean Resort",
   "Emerald View Hotel",
   "Golden Leaf Lodge",
   "Star Light Residency",
   "Majestic Stay Hotel",
   "Royal Peak Resort",
   "Silver Moon Inn",
   "City Crown Hotel",
   "Green Valley Lodge",
   "Royal Lotus Hotel",
   "Sunshine Bay Stay",
   "Hill Crest Hotel",
   "Grand Horizon Inn",
   "Ocean Pearl Suites",
   "Royal Empire Hotel",
   "Sky High Residency",
   "Golden Horizon Stay",
   "Blue Pearl Lodge",
   "Crystal Sky Hotel",
   "Elite Grand Inn"
 ];

 function openHotel() {
   document.getElementById("hotelPopup").style.display = "block";
   renderHotels(hotelList);
 }

 function closeHotel() {
   document.getElementById("hotelPopup").style.display = "none";
 }

 function renderHotels(list) {
   const grid = document.getElementById("hotelGrid");

   let html = "";

   list.forEach(name => {
     html += `
       <div class="hotel-card">
         <h3>${name}</h3>
         <p>⭐ 4.${Math.floor(Math.random() * 9)} Rating</p>
         <button onclick="selectHotel('${name}')">View</button>
       </div>
     `;
   });

   grid.innerHTML = html;
 }

 function filterHotels() {
   const value = document.getElementById("hotelSearch").value.toLowerCase();

   const filtered = hotelList.filter(h =>
     h.toLowerCase().includes(value)
   );

   renderHotels(filtered);
 }

 function selectHotel(name){
   alert(name + " selected");
 }