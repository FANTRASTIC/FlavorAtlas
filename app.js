const imagePool = {
  mexico: "assets/mexico-tacos.png",
  india: "assets/india-butter-chicken.png",
  japan: "assets/japan-ramen.png",
  italy: "assets/italy-pizza.png",
  morocco: "assets/morocco-tagine.png",
  france: "assets/france-ratatouille.png",
  brazil: "assets/brazil-feijoada.png",
  spicy1: "assets/mexico-tacos.png",
  spicy2: "assets/india-butter-chicken.png",
  spicy3: "assets/thai-red-curry.png",
  spicy4: "assets/korea-kimchi-jjigae.png",
  spicy5: "assets/morocco-tagine.png"
};

const cuisines = [
  {
    id: "mexico",
    country: "Mexico",
    code: "MX",
    flag: "🇲🇽",
    icon: "🌵",
    meal: "Tacos al Pastor",
    count: 24,
    image: imagePool.mexico,
    x: 20,
    y: 44,
    description: "Corn tortillas, chile, pineapple, and street-food energy."
  },
  {
    id: "italy",
    country: "Italy",
    code: "IT",
    flag: "🇮🇹",
    icon: "🌹",
    meal: "Margherita Pizza",
    count: 40,
    image: imagePool.italy,
    x: 49,
    y: 26,
    description: "Tomato, basil, and cheese in a simple Neapolitan classic."
  },
  {
    id: "france",
    country: "France",
    code: "FR",
    flag: "🇫🇷",
    icon: "⚜",
    meal: "Ratatouille",
    count: 32,
    image: imagePool.france,
    x: 63,
    y: 33,
    description: "A vegetable-forward dish with quiet countryside comfort."
  },
  {
    id: "japan",
    country: "Japan",
    code: "JP",
    flag: "🇯🇵",
    icon: "⛩",
    meal: "Ramen",
    count: 36,
    image: imagePool.japan,
    x: 84,
    y: 44,
    description: "Broth, noodles, toppings, and regional personality."
  },
  {
    id: "morocco",
    country: "Morocco",
    code: "MA",
    flag: "🇲🇦",
    icon: "✴",
    meal: "Chicken Tagine",
    count: 28,
    image: imagePool.morocco,
    x: 51,
    y: 63,
    description: "Slow-cooked warmth with spice, citrus, and preserved flavor."
  },
  {
    id: "india",
    country: "India",
    code: "IN",
    flag: "🇮🇳",
    icon: "🪷",
    meal: "Butter Chicken",
    count: 45,
    image: imagePool.india,
    x: 66,
    y: 61,
    description: "Creamy, spiced, tomato-rich comfort with global reach."
  },
  {
    id: "brazil",
    country: "Brazil",
    code: "BR",
    flag: "🇧🇷",
    icon: "🌿",
    meal: "Feijoada",
    count: 26,
    image: imagePool.brazil,
    x: 36,
    y: 75,
    description: "A deep, slow stew built for gathering at the table."
  }
];

const spicyPicks = [
  { name: "Mexican Chipotle Tacos", image: imagePool.spicy1, cuisine: "Mexico" },
  { name: "Indian Chicken Vindaloo", image: imagePool.spicy2, cuisine: "India" },
  { name: "Thai Red Curry", image: imagePool.spicy3, cuisine: "Thailand" },
  { name: "Korean Kimchi Jjigae", image: imagePool.spicy4, cuisine: "Korea" },
  { name: "Moroccan Harissa Lamb", image: imagePool.spicy5, cuisine: "Morocco" }
];

const recipeDetails = [
  ...cuisines.map((item) => ({
    id: item.id,
    title: item.meal,
    area: item.country,
    category: "Featured cuisine",
    image: item.image,
    ingredients: ["Signature spice base", "Fresh aromatics", "Regional staple", "Acid or herb finish"],
    instructions:
      "This prototype card is wired like a recipe detail route. In production, this content can come from TheMealDB, Edamam, Spoonacular, or your own recipe database."
  })),
  ...spicyPicks.map((item, index) => ({
    id: `spicy-${index}`,
    title: item.name,
    area: item.cuisine,
    category: "Spicy pick",
    image: item.image,
    ingredients: ["Chile base", "Garlic", "Oil or ghee", "Main protein or vegetable", "Fresh garnish"],
    instructions:
      "Treat this as a fast preview modal. A full production build can open a dedicated recipe page with ingredient quantities, steps, video, nutrition, and saved-list actions."
  }))
];

function init() {
  renderFlags();
  renderMapPins();
  renderCuisineCards();
  renderSpicyPicks();
  renderSearchResults("");
  bindInteractions();
  observeReveals();
}

function renderFlags() {
  document.querySelectorAll(".flags").forEach((strip) => {
    strip.innerHTML = Array.from({ length: 34 }, () => "<span></span>").join("");
  });
}

function renderMapPins() {
  const container = document.getElementById("map-pins");
  container.innerHTML = cuisines
    .map(
      (item) => `
        <article class="pin" style="left:${item.x}%; top:${item.y}%;">
          <button class="pin-button" type="button" data-recipe="${item.id}" aria-label="Open ${item.meal}">
            <svg class="pin-shape" viewBox="0 0 88 108" aria-hidden="true">
              <path d="M44 104C31 78 8 67 8 38 8 17 24 4 44 4s36 13 36 34c0 29-23 40-36 66Z" />
            </svg>
            <span class="pin-photo"><img src="${item.image}" alt="${item.meal}" /></span>
          </button>
          <span class="pin-label">
            <strong>${item.country}</strong>
            <small>${item.meal}</small>
          </span>
          <div class="pin-tooltip">
            <strong>${item.meal}</strong>
            <p>${item.description}</p>
            <button type="button" data-recipe="${item.id}">View Recipe &rarr;</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCuisineCards() {
  const container = document.getElementById("cuisine-cards");
  container.innerHTML = cuisines
    .map(
      (item) => `
        <article class="cuisine-card" data-recipe="${item.id}">
          <span class="culture-icon" aria-hidden="true">${item.icon}</span>
          <figure><img src="${item.image}" alt="${item.country} cuisine" loading="lazy" /></figure>
          <div class="cuisine-card-content">
              <h3><span class="flag-icon flag-${item.id}" aria-label="${item.country} flag"></span>${item.country}</h3>
            <p>${item.count} recipes</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSpicyPicks() {
  const panel = document.getElementById("spicy-picks");
  panel.innerHTML = spicyPicks
    .map(
      (item, index) => `
        <button class="spicy-card" type="button" data-recipe="spicy-${index}">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <strong>${item.name}</strong>
        </button>
      `
    )
    .join("");
}

function bindInteractions() {
  const drawer = document.querySelector(".mobile-drawer");
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".mobile-drawer a").forEach((link) => {
    link.addEventListener("click", () => drawer.classList.remove("open"));
  });

  const searchPanel = document.querySelector(".search-panel");
  document.querySelector(".search-toggle").addEventListener("click", () => {
    searchPanel.classList.toggle("open");
    if (searchPanel.classList.contains("open")) {
      document.getElementById("global-search").focus();
    }
  });

  document.getElementById("global-search").addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.scroll === "right" ? 1 : -1;
      document.getElementById("cuisine-cards").scrollBy({ left: direction * 560, behavior: "smooth" });
    });
  });

  document.body.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-recipe]");
    if (!trigger) return;
    openRecipe(trigger.dataset.recipe);
  });

  document.querySelector(".dialog-close").addEventListener("click", closeRecipe);
  document.getElementById("recipe-dialog").addEventListener("click", (event) => {
    if (event.target.id === "recipe-dialog") closeRecipe();
  });

  const mapStage = document.querySelector(".map-stage");
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  mapStage.addEventListener("pointerdown", (event) => {
    if (window.innerWidth > 1050) return;
    isDown = true;
    startX = event.pageX - mapStage.offsetLeft;
    scrollLeft = mapStage.scrollLeft;
    mapStage.setPointerCapture(event.pointerId);
  });
  mapStage.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    const x = event.pageX - mapStage.offsetLeft;
    mapStage.scrollLeft = scrollLeft - (x - startX);
  });
  mapStage.addEventListener("pointerup", () => {
    isDown = false;
    const hint = document.querySelector(".drag-hint");
    if (hint) hint.style.opacity = "0";
  });
}

function renderSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  const results = recipeDetails.filter((recipe) => {
    const haystack = `${recipe.title} ${recipe.area} ${recipe.category}`.toLowerCase();
    return !normalized || haystack.includes(normalized);
  });

  document.getElementById("search-results").innerHTML = results
    .slice(0, 6)
    .map(
      (recipe) => `
        <article class="search-result">
          <img src="${recipe.image}" alt="${recipe.title}" />
          <span>
            <strong>${recipe.title}</strong><br />
            <small>${recipe.area} - ${recipe.category}</small>
          </span>
          <button type="button" data-recipe="${recipe.id}">Open</button>
        </article>
      `
    )
    .join("");
}

function openRecipe(id) {
  const recipe = recipeDetails.find((item) => item.id === id);
  if (!recipe) return;
  document.getElementById("recipe-detail").innerHTML = `
    <article class="recipe-detail">
      <img src="${recipe.image}" alt="${recipe.title}" />
      <div class="recipe-detail-body">
        <p class="eyebrow">${recipe.area} - ${recipe.category}</p>
        <h3>${recipe.title}</h3>
        <p>${recipe.instructions}</p>
        <h4>Prototype ingredients</h4>
        <ul>${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
      </div>
    </article>
  `;
  const dialog = document.getElementById("recipe-dialog");
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeRecipe() {
  const dialog = document.getElementById("recipe-dialog");
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function observeReveals() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  reveals.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
    observer.observe(item);
  });
}

init();
