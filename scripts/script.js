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
    <div id="number_portions_${id}" class="number_portions">
        <span id="minus_${id}" class="minus btn">
            -
        </span>
        <span id="portion_${id}" class="portion">
            1
        </span>
        <span id="plus_${id}" class="plus btn">
            +
        </span>
    </div>
    <select name="recipe_name_${id}" id="name_recipe_${id}" class="btn">
        ${multiselect_recipes}
    </select>
    <span id="cross_${id}" class="delete_recipe">
        x
    </span>
    `

    new_recipes.innerHTML = div_content
    myDiv.appendChild(new_recipes);

    let btnRemoveRecipe = document.getElementById(`cross_${id}`)
    let div_id_to_remove = `recipe_${id}`
    btnRemoveRecipe.addEventListener("click", () => {
        RemoveRecipe(div_id_to_remove)
    })

    let portion_id = `portion_${id}`
    let btnPlus = document.getElementById(`plus_${id}`)
    btnPlus.addEventListener("click", () => {
        increment(portion_id)
    })
    let btnMinus = document.getElementById(`minus_${id}`)
    btnMinus.addEventListener("click", () => {
        decrement(portion_id)
    })
    id = id + 1

    return id
}

function RemoveRecipe(id_div){
    let DivRecipe = document.getElementById(id_div)

    DivRecipe.remove();
}

function increment(span_id){
    let span = document.getElementById(span_id)
    let portion = parseInt(span.innerHTML)
    span.innerHTML = portion + 1
}

function decrement(span_id){
    let span = document.getElementById(span_id)
    let portion = parseInt(span.innerHTML)
    if (portion > 1){
        span.innerHTML = portion - 1
    }
}

function getSelectedRecipes(){
    let Divs = document.querySelectorAll(`.recipe select`)
    let id_recipes = []
    Divs.forEach( (div) => {
        id_recipes.push(div.value)
    })
    return id_recipes
}

function getPortions(){
    let spans = document.querySelectorAll(`.portion`)
    let portions = []
    spans.forEach( (span) => {
        portions.push(parseInt(span.innerHTML))
    })
    return portions
}

function GenerateShoppingList(){
    let selected_recipes = getSelectedRecipes()
    let portions = getPortions()
    let ingredients = {}
    selected_recipes.forEach( (recipe, i) => {
        let ingredients_to_add = RECIPES[recipe]["Ingrédients"]
        let nb_people = RECIPES[recipe]["Nombre de personnes"]
        Object.keys(ingredients_to_add).forEach( (ing) => {
            if (!ingredients[ing]){
                ingredients[ing] = portions[i] / nb_people * ingredients_to_add[ing]
            }
            else{
                ingredients[ing] = ingredients[ing] + portions[i] / nb_people * ingredients_to_add[ing]
            }
        })
    })
    let div = document.getElementById("shopping_list_container")
    let div_content = ``
    Object.keys(ingredients).forEach( (ing) => {
        let unite = INGREDIENTS[ing][0]
        let ing_display = ing
        if (ingredients[ing] > 1){
            ing_display = INGREDIENTS[ing][3]
        }
        div_content = `${div_content}
        <span class="row_shopping_list">${ingredients[ing]} ${unite} ${ing_display}</span>`
    })
    div.innerHTML = div_content
}

function ChangeDisplayMainPage(){
    let recipesSelectionContainer = document.getElementById("selection_recettes")
    let shoppingListContainer = document.getElementById("shopping_list")
    recipesSelectionContainer.classList.toggle("not_selected")
    shoppingListContainer.classList.toggle("not_selected")
}

function main() {
    id = 0
    // Add a first recipe for initialisation
    id = addRecipe(id)

    let btnAddRecipe = document.getElementById("add_recettes")
    btnAddRecipe.addEventListener("click", () => {
        id = addRecipe(id)
    })

    // let btnValidate = document.getElementById("validate_button")
    // btnValidate.addEventListener("click", () => {
    //     GenerateShoppingList()
    // })

    // Display either the selection of recipes or the shopping list
    let btnDisplayRecipe = document.getElementById("nav_recipes")
    btnDisplayRecipe.addEventListener("click", () => {
        ChangeDisplayMainPage()
    })
    let btnDisplayShoppingList = document.getElementById("nav_shopping_list")
    btnDisplayShoppingList.addEventListener("click", () => {
        GenerateShoppingList()
        ChangeDisplayMainPage()
    })
}