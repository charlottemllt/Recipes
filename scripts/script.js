function addRecipe(id){
    let myDiv = document.getElementById("choices_recipes")
    // let html_text = "une recette"

    let new_recipes = document.createElement("div")
    new_recipes.id = `recipe_${id}`

    let multiselect_recipes = ""
    // console.log(_.get(RECIPES, recipe, undefined))
    Object.keys(RECIPES).forEach( (recipe, i) =>{
        let recette = RECIPES[recipe]
        multiselect_recipes = `${multiselect_recipes}
        <option value="${RECIPES[recipe]["ID"]}">${Object.keys(RECIPES)[i]}</option>`       
    })

    let div_content = `
    <span id="minus_${id}" class="minus">-</span>
    1
    <span id="plus_${id}" class="plus">+</span>
    <label for="recipe_name_${id}">Quelle recette ?</label><br>
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

function getSelectedRecipes(id){
    let Div = document.querySelectorAll(`#recipe_2 select`)[0]
    console.log(Div)
    console.log(Div.value)
    // let aa = Div.options[Div.selectedIndex].text
    return Div.value
}

function main() {
    id = 0

    let btnAddRecipe = document.getElementById("add_recettes")
    btnAddRecipe.addEventListener("click", () => {
        id = addRecipe(id)
    })

    let btnValidate = document.getElementById("validate_button")
    btnValidate.addEventListener("click", () => {
        let selected_recipes = getSelectedRecipes(id)
        console.log(selected_recipes)
    })
}