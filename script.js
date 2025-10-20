const recipes = [
  {
    id: 1,
    name: "Waakye (Ghanaian Rice and Beans)",
    ingredients: [
        "Rice", "Black-eyed peas or red beans", "Waakye leaves (or baking soda)",
        "Salt", "Water", "Vegetable oil", "Optional: boiled eggs, spaghetti, fried plantain"
    ],
    instructions: [
        "Wash beans and boil with waakye leaves (or a pinch of baking soda) until partially soft.",
        "Add washed rice to the beans and cook together until both are soft and water is absorbed.",
        "Add a little oil and salt to taste.",
        "Serve hot with gari, boiled egg, spaghetti, fried fish, shito, and fried plantain."
    ],
    imageURL: "https://eatwellabi.com/wp-content/uploads/2021/09/Waakye-13.jpg"
  },
  {
    id: 2,
    name: "Chicken Shawarma",
    ingredients: [
        "Chicken breast", "Yogurt", "Garlic", "Lemon juice", "Olive oil",
        "Paprika", "Cumin", "Coriander", "Salt", "Pita bread", "Lettuce",
        "Tomatoes", "Onions", "Mayonnaise", "Hot sauce"
    ],
    instructions: [
        "In a bowl, mix yogurt, garlic, lemon juice, olive oil, paprika, cumin, coriander, and salt to make a marinade.",
        "Slice chicken thinly and marinate for at least 2 hours (overnight for best results).",
        "Grill or pan-fry the chicken until cooked through and slightly charred.",
        "Warm pita bread and layer with lettuce, tomatoes, onions, and the grilled chicken.",
        "Drizzle with mayonnaise and hot sauce, then roll it up tightly.",
        "Serve warm with fries or salad on the side."
    ],
    imageURL: "https://lifeloveandgoodfood.com/wp-content/uploads/2020/04/Chicken-Shawarma_09_1200x1200.jpg"
  },
  {
    id: 3,
    name: "Pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Butter"],
    instructions: [
      "Mix ingredients.",
      "Pour batter on hot pan.",
      "Flip and cook until golden."
    ],
    imageURL: "https://via.placeholder.com/300x200?text=Pancakes"
  },
  {
    id: 4,
    name: "Chicken Stir-Fry",
    ingredients: ["Chicken breast", "Soy sauce", "Bell peppers", "Broccoli", "Garlic"],
    instructions: [
      "Slice chicken and vegetables.",
      "Cook chicken until browned.",
      "Add veggies and soy sauce.",
      "Stir-fry for 5–7 minutes."
    ],
    imageURL: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/05/Chicken-Stir-Fry-main.jpg"
  },
  {
    id: 5,
    name: "Red Red (Ghanaian Beans Stew)",
    ingredients: ["Black-eyed peas", "Palm oil", "Onions",
        "Tomatoes", "Garlic", "Ginger", "Pepper", "Salt", "Ripe plantains", "Seasoning cubes"],
    instructions: [
        "Boil black-eyed peas until soft, then drain and set aside.",
        "Heat palm oil in a saucepan and add sliced onions.",
        "Add blended tomatoes, garlic, ginger, and pepper. Cook until the stew thickens.",
        "Season with salt and seasoning cubes.",
        "Add the cooked beans to the stew and simmer for 10–15 minutes.",
        "Fry ripe plantains in oil until golden brown.",
        "Serve beans stew with the fried plantains on the side."
    ],
    imageURL: "https://i.pinimg.com/736x/d4/06/53/d406536436d2a43c22e217d889c23b1f.jpg"
  },
  {
    id: 6,
    name: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
    instructions: [
      "Boil spaghetti.",
      "Cook beef with onion and garlic.",
      "Add sauce and simmer.",
      "Serve sauce over spaghetti."
    ],
    imageURL: "https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36.jpg"
  },
  {
    id: 7,
    name: "Ghanaian Jollof Rice",
  ingredients: [
    "Rice", "Tomato paste", "Fresh tomatoes", "Onions", 
    "Garlic", "Ginger", "Vegetable oil", "Thyme", 
    "Bay leaf", "Salt", "Pepper", "Chicken or beef stock"
  ],
  instructions: [
    "Blend tomatoes, onions, garlic, and ginger into a smooth mixture.",
    "Heat oil in a pot and fry the tomato paste for a few minutes.",
    "Add the blended mixture, thyme, bay leaf, salt, and pepper. Cook until sauce thickens.",
    "Add rice and stir to coat evenly with the sauce.",
    "Pour in stock and simmer on low heat until rice is cooked and fluffy.",
    "Serve hot with fried chicken, fish, or salad."
  ],
    imageURL: "https://mamaashanti.co.ke/wp-content/uploads/2022/09/cc40ed78e83fb91567443a0d076a4832.jpg"
  },
  {
    id: 8,
    name: "Fufu and Light Soup",
    ingredients: [
        "Cassava", "Plantain", "Tomatoes", "Onions", "Garlic", "Ginger",
        "Pepper", "Chicken or goat meat", "Tomato paste", "Salt", "Seasoning cubes", "Water"
    ],
    instructions: [
        "Peel cassava and plantains, cut into chunks, and boil until soft.",
        "Pound the boiled cassava and plantain together in a mortar until smooth and stretchy to make fufu.",
        "For the soup: blend tomatoes, onions, garlic, ginger, and pepper into a smooth paste.",
        "Pour the blend into a pot with your meat (chicken or goat), add tomato paste, salt, and seasoning cubes.",
        "Simmer until meat is tender and soup thickens slightly.",
        "Serve the hot light soup with freshly pounded fufu."
    ],
    imageURL: "https://pbs.twimg.com/media/EQ2AOoNXsAEqt_5.jpg"
  },
  {
    id: 9,
    name: "Fruit Smoothie",
    ingredients: ["Banana", "Strawberries", "Milk", "Honey"],
    instructions: [
      "Blend all ingredients until smooth.",
      "Pour into a glass and serve chilled."
    ],
    imageURL: "https://simplyfiveingredients.com/wp-content/uploads/2024/03/Smoothies-Featured-Image.jpg"
  },
  {
    id: 10,
    name: "Chocolate Brownies",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Butter", "Eggs"],
    instructions: [
      "Mix ingredients in a bowl.",
      "Pour into a tray.",
      "Bake at 180°C for 25 minutes."
    ],
    imageURL: "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/chocolate-brownies-recipe.png?fit=1080%2C1080&ssl=1"
  },
];

const recipeList = document.getElementById("recipe-list");
const recipeDetail = document.getElementById("recipe-detail");
const searchInput = document.getElementById("search-input");

s
function displayRecipes(data) {
  recipeList.innerHTML = "";
  data.forEach(recipe => {
    const card = document.createElement("article");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <figure>
        <img src="${recipe.imageURL}" alt="${recipe.name}" />
        <figcaption><h2>${recipe.name}</h2></figcaption>
      </figure>
    `;
    card.addEventListener("click", () => showRecipeDetail(recipe.id));
    recipeList.appendChild(card);
  });
}


function showRecipeDetail(id) {
  const recipe = recipes.find(r => r.id === id);
  recipeList.classList.add("hidden");
  recipeDetail.classList.remove("hidden");
  recipeDetail.innerHTML = `
    <h2>${recipe.name}</h2>
    <img src="${recipe.imageURL}" alt="${recipe.name}" />
    <h3>Ingredients</h3>
    <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
    <h3>Instructions</h3>
    <ol>${recipe.instructions.map(i => `<li>${i}</li>`).join("")}</ol>
    <button id="back-btn">Back to Recipes</button>
  `;
  document.getElementById("back-btn").addEventListener("click", goBack);
}

function goBack() {
  recipeDetail.classList.add("hidden");
  recipeList.classList.remove("hidden");
}


searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(term) ||
    r.ingredients.some(i => i.toLowerCase().includes(term))
  );
  displayRecipes(filtered);
});

window.addEventListener("DOMContentLoaded", () => displayRecipes(recipes));
