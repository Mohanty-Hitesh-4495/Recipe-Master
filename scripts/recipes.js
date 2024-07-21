const recipes = [
    {
        name: "Paneer Butter Masala",
        type: "veg",
        ingredients: ["Paneer", "Butter", "Tomato", "Cream"],
        instructions: "Heat butter in a pan and sauté cumin seeds, bay leaf, chopped onions, garlic, and ginger until golden brown. Add chopped tomatoes and cook until soft, then blend into a smooth paste. Return the paste to the pan, add cashew paste, spices, sugar, and cream, and cook for a few minutes. Stir in paneer cubes and simmer for 5-7 minutes. Garnish with coriander leaves and serve hot with naan, roti, or rice.",
        imageUrl: "https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2023/5/3/paneer-butter-masala.jpg"
    },
    {
        name: "Chicken Biryani",
        type: "non-veg",
        ingredients: ["Chicken", "Rice", "Spices", "Yogurt"],
        instructions: "Marinate chicken with yogurt and spices for at least an hour, then cook with onions, tomatoes, and more spices until tender. Layer the cooked chicken with partially cooked basmati rice, saffron milk, and fried onions in a pot, and cook on low heat (dum) for 20-30 minutes. Garnish with fresh coriander and mint leaves before serving.",
        imageUrl: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
    },
    {
        name: "Pav Bhaji",
        type: "veg",
        ingredients: ["Potatoes", "Tomatoes", "Onions", "Peas", "Capsicum", "Butter", "Pav Bhaji Masala"],
        instructions: "Cook chopped vegetables (potatoes, peas, tomatoes, onions, capsicum) with spices until soft, then mash and simmer with butter and pav bhaji masala. Serve hot with buttered pav bread, garnished with fresh coriander and a squeeze of lemon.",
        imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe-500x500.jpg"
    },
    {
        name: "Butter Chicken",
        type: "non-veg",
        ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"],
        instructions: "Marinate chicken, cook with butter, tomatoes, and cream, add spices, and simmer until done.",
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400"
    },
    {
        name: "Veg Pulao",
        type: "veg",
        ingredients: ["Rice", "Mixed Vegetables", "Spices"],
        instructions: "Cook rice with mixed vegetables and spices until fluffy.",
        imageUrl: "https://www.funfoodfrolic.com/wp-content/uploads/2022/05/Veg-Pulao-Blog.jpg"
    },
    {
        name: "Chicken Curry",
        type: "non-veg",
        ingredients: ["Chicken", "Onions", "Tomatoes", "Yogurt", "Spices"],
        instructions: "Cook chicken with onions, tomatoes, and yogurt, add spices, and simmer until cooked.",
        imageUrl: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg"
    },
    {
        name: "Aloo Paratha",
        type: "veg",
        ingredients: ["Whole Wheat Flour", "Potatoes", "Spices"],
        instructions: "Make dough with flour, stuff with mashed potatoes and spices, roll and cook on a griddle.",
        imageUrl: "https://www.cookwithkushi.com/wp-content/uploads/2021/03/Best_aloo_paratha_mashed_potato_flatbread.jpg"
    },
    {
        name: "Fish Tacos",
        type: "non-veg",
        ingredients: ["Fish Fillets", "Tortillas", "Cabbage Slaw", "Avocado", "Salsa"],
        instructions: "Grill fish, assemble with tortillas, cabbage slaw, avocado, and salsa.",
        imageUrl: "https://www.howsweeteats.com/wp-content/uploads/2023/08/grilled-fish-tacos-17.jpg"
    },
    {
        name: "Veggie Pizza",
        type: "veg",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Bell Peppers", "Mushrooms", "Olives", "Cheese"],
        instructions: "Spread sauce on dough, top with vegetables and cheese, bake until crust is golden.",
        imageUrl: "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg"
    },
    {
        name: "Spaghetti Carbonara",
        type: "non-veg",
        ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
        instructions: "Cook spaghetti, fry bacon, mix with eggs and cheese, toss with spaghetti.",
        imageUrl: "https://www.usdairy.com/getmedia/1a9efa87-5f85-4392-8a67-3836755be069/creamy_carbonara.jpg?width=1500&height=1001&ext=.jpg"
    },
    {
        name: "Paneer Tikka",
        type: "veg",
        ingredients: ["Paneer", "Bell Peppers", "Onions", "Yogurt", "Spices"],
        instructions: "Marinate paneer and vegetables, grill until charred.",
        imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg"
    },
    {
        name: "Mutton Rogan Josh",
        type: "non-veg",
        ingredients: ["Mutton", "Yogurt", "Onions", "Tomatoes", "Spices"],
        instructions: "Cook mutton with yogurt, onions, tomatoes, and spices until tender.",
        imageUrl: "    https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpvrhP0XQkWl_0Ti2TRumM5D9HKUFLvUeTmvgFqingINqgmu7JqifyCsWyrz3NCUAg-YuqqJ6xPPlp0vpyKyg5C1iXgPrpzpJeptWQWZrfPoeUBQkFmjYeRUuDfUVcgqu9ugI8B5HxmS8/s1600/Mutton+Rogan+Josh+Recipe.JPG"
    },
    {
        name: "Chocolate Cake",
        type: "veg",
        ingredients: ["Flour", "Sugar", "Cocoa Powder", "Eggs", "Butter", "Milk", "Baking Powder"],
        instructions: "Mix dry ingredients, beat eggs, add wet ingredients, bake until fluffy.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcclIxyMMSgPH3Lqw6XnQivuSEzrhkK14GKA&s"
    },
    {
        name: "Sushi Rolls",
        type: "non-veg",
        ingredients: ["Sushi Rice", "Nori Sheets", "Fish (Salmon or Tuna)", "Avocado", "Cucumber"],
        instructions: "Spread rice on nori, add fish, avocado, and cucumber, roll tightly.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvEQ41CA5ZKEFtZLMtvaOmjb6QNdoATi421w&s"
    }
];

const displayRecipes = (recipeList) => {
    const recipeContainer = document.getElementById("recipe-list");
    recipeContainer.innerHTML = ""; // Clear existing content

    recipeList.forEach(recipe => {
        const recipeItem = document.createElement("div");
        recipeItem.className = "recipe-item";
        recipeItem.innerHTML = `
            <img src="${recipe.imageUrl}" alt="${recipe.name}" class="recipe-image">
            <h3>${recipe.name}</h3>
            <p>Type: ${recipe.type}</p>
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            <p>Instructions: ${recipe.instructions}</p>
        `;
        recipeContainer.appendChild(recipeItem);
    });
};

const filterRecipesByType = (type) => {
    if (type === "all") {
        displayRecipes(recipes);
    } else {
        const filteredRecipes = recipes.filter(recipe => recipe.type === type);
        displayRecipes(filteredRecipes);
    }
};

const searchRecipesByName = (name) => {
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
    displayRecipes(filteredRecipes);
};

document.addEventListener("DOMContentLoaded", () => {
    displayRecipes(recipes);

    const filterSelect = document.getElementById("filter-type");
    filterSelect.addEventListener("change", (e) => {
        filterRecipesByType(e.target.value);
    });

    const searchInput = document.getElementById("search-name");
    searchInput.addEventListener("input", (e) => {
        searchRecipesByName(e.target.value);
    });

    const addRecipeForm = document.getElementById("add-recipe-form");
    addRecipeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("recipe-name").value.trim();
        const type = document.getElementById("recipe-type").value;
        const ingredients = document.getElementById("recipe-ingredients").value.split(",").map(ingredient => ingredient.trim());
        const instructions = document.getElementById("recipe-instructions").value.trim();
        const imageUrl = document.getElementById("recipe-image").value.trim();

        const newRecipe = { name, type, ingredients, instructions, imageUrl };
        recipes.push(newRecipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));

        alert("Recipe added successfully!");
        addRecipeForm.reset();
        displayRecipes(recipes);
    });
});
