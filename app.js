const recipes = [
  {
    id: "1",
    name: "Chicken",
    link:
      "https://www.thekitchn.com/how-to-cook-chicken-the-easiest-simplest-method-cooking-lessons-from-the-kitchn-216562",

    calories: 2000,
    dietLabels: ["Protein", "Baked"],
    labels: ["Organic", "Lunch"],
  },
  {
    id: "2",
    name: "Chocolote",
    link:
      "https://www.thekitchn.com/how-to-cook-chicken-the-easiest-simplest-method-cooking-lessons-from-the-kitchn-216562",

    calories: 1500,
    dietLabels: ["Sugar"],
    labels: ["Cool", "dessert"],
  },
  {
    id: "3",
    name: "Chico",
    link:
      "https://www.thekitchn.com/how-to-cook-chicken-the-easiest-simplest-method-cooking-lessons-from-the-kitchn-216562",

    calories: 100,
    dietLabels: ["healthy"],
    labels: ["Organic"],
  },
];

// ===================================================================================

const ResultsContainer = document.getElementById("results");
// ===================================================================================
function onSearchSubmit(e) {
  e.preventDefault();
}
const filterRecipes = (input) =>
  recipes.filter((recipe) => recipe.name.toLowerCase().includes(input));

function onInputChange(e) {
  const searchText = e.target.value;
  const filteredRecipes = filterRecipes(searchText);

  if (filteredRecipes.length !== 0) {
    const htmlCards = filteredRecipes
      .map(
        (recipe) =>
          `
          <div class="card">
            <img src="./assets/chicken.jpeg" />
            <div class="card-name_button">
              <h3 class="recipe-title">${recipe.name}</h3>
              <a href="${recipe.link}"class="recipe-button">View Recipe</a>
            </div>
            <p class="recipe-calories">
              <span class="label">Calories: </span>
              ${recipe.calories}
            </p>
            <p class="recipe-diet_label">
              <span class="label">Diet Label: </span>
              ${recipe.labels.map((label) => label).join("")}
            </p>
            <p class="recipe-Health_labels">
              <span class="label"> Labels:</span>
              ${recipe.dietLabels.map((dlabel) => dlabel).join("")}
            </p>
          </div>
        `
      )
      .join("");
    ResultsContainer.innerHTML = htmlCards;
  } else {
    ResultsContainer.innerHTML = "<h3>No Results</h3>";
  }
}
// ===================================================================================

//
// Fetch API returns data
// map data to html
// inject html to page.
//
