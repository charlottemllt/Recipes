function addRecipe(id){
    let myDiv = document.getElementById("choices_recipes")
    // let html_text = "une recette"

    let new_recipes = document.createElement("div")
    new_recipes.id = `recipe_${id}`
    new_recipes.classList = ["recipe"]

    let multiselect_recipes = ""
    Object.keys(RECIPES).forEach( (recipe, i) =>{
        // let recette = RECIPES[recipe]
        multiselect_recipes = `${multiselect_recipes}
        <option value="${Object.keys(RECIPES)[i]}">${RECIPES[recipe]["Name"]}</option>`    
        //<option value="${RECIPES[recipe]["ID"]}">${Object.keys(RECIPES)[i]}</option>    
    })

    // <label for="recipe_name_${id}">Quelle recette ?</label><br></br>
    let div_content = `
    <span id="minus_${id}" class="minus">-</span>
    <span id="portion_${id}" class="portion">1</span>
    <span id="plus_${id}" class="plus">+</span>
    <select name="recipe_name_${id}" id="name_recipe_${id}">
        ${multiselect_recipes}
    </select>
    <span id="cross_${id}" class="delete_recipe">x</span>
    `
    // <option value="espagne">Espagne</option>
    // <option value="royaume-uni">Royaume-Uni</option>
    // <option value="canada">Canada</option>
    // <option value="japon">Japon</option>
    new_recipes.innerHTML = div_content
    myDiv.appendChild(new_recipes);

    let btnRemoveRecipe = document.getElementById(`cross_${id}`)
    let div_id_to_remove = `recipe_${id}`
    btnRemoveRecipe.addEventListener("click", () => {
        RemoveRecipe(div_id_to_remove)
    })
    id = id + 1

    return id
}

function RemoveRecipe(id_div){
    let DivRecipe = document.getElementById(id_div)

    DivRecipe.remove();
}

function getSelectedRecipes(){
    let Divs = document.querySelectorAll(`.recipe select`)
    let id_recipes = []
    Divs.forEach( (div) => {
        id_recipes.push(div.value)
    })
    return id_recipes
}

function GenerateShoppingList(){
    let selected_recipes = getSelectedRecipes()
    let ingredients = {}
    selected_recipes.forEach( (recipe, i) => {
        let ingredients_to_add = RECIPES[recipe]["Ingrédients"]
        Object.keys(ingredients_to_add).forEach( (ing) => {
            if (!ingredients[ing]){
                ingredients[ing] = ingredients_to_add[ing]
            }
            else{
                ingredients[ing] = ingredients[ing] + ingredients_to_add[ing]
            }
        })
    })
    let div = document.getElementById("shopping_list_container")
    let shopping_list = document.createElement("div")
    shopping_list.classList = ["shopping_list"]
    let div_content = ``
    Object.keys(ingredients).forEach( (ing) => {
        div_content = `${div_content}
        <span class="row_shopping_list">${ingredients[ing]} ${ing}</span>`
    })
    shopping_list.innerHTML = div_content
    div.appendChild(shopping_list);
}

function main() {
    id = 0
    // Add a first recipe for initialisation
    id = addRecipe(id)

    let btnAddRecipe = document.getElementById("add_recettes")
    btnAddRecipe.addEventListener("click", () => {
        id = addRecipe(id)
    })

    let btnValidate = document.getElementById("validate_button")
    btnValidate.addEventListener("click", () => {
        GenerateShoppingList()
    })
}