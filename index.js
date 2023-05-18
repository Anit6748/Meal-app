// Store meals in an array
let meals = [];

// Get form and list elements
const mealForm = document.getElementById('mealForm');
const mealList = document.getElementById('mealList');

// Add a meal
mealForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get meal details
  const mealName = document.getElementById('mealName').value;
  const mealDescription = document.getElementById('mealDescription').value;
  
  // Create a new meal object
  const meal = {
    name: mealName,
    description: mealDescription
  };
  
  // Add meal to the array
  meals.push(meal);
  
  // Clear the form inputs
  document.getElementById('mealName').value = '';
  document.getElementById('mealDescription').value = '';
  
  // Update the meal list
  updateMealList();
});

// Search meals
document.getElementById('searchInput').addEventListener('input', function(event) {
  const searchText = event.target.value.toLowerCase();
  const filteredMeals = meals.filter(function(meal) {
    return meal.name.toLowerCase().includes(searchText) ||
           meal.description.toLowerCase().includes(searchText);
  });
  
  // Update the meal list with filtered results
  updateMealList(filteredMeals);
});

// Function to update the meal list
function updateMealList(mealsArray = meals) {
  mealList.innerHTML = '';
  
  mealsArray.forEach(function(meal) {
    const li = document.createElement('li');
    li.textContent = meal.name + ': ' + meal.description;
    mealList.appendChild(li);
  });
}
