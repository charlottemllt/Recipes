function RecipesList(){
    let container = document.getElementById("recipes_container")

    Object.keys(RECIPES).forEach( (recipe, i) => {
        let recipe_div = document.createElement("div")
        recipe_div.id = `recipe_name_${recipe}`
        recipe_div.classList = ["recipe_name"]
        recipe_div.innerHTML = RECIPES[recipe]["Name"]
        container.appendChild(recipe_div);
        recipe_div.addEventListener("click", () => {
            DisplayRecipeDetails(recipe)
            container.classList.toggle("hidden")
        })
    })

    let add_recipe_div = document.createElement("a")
    add_recipe_div.id = `add_recipe`
    add_recipe_div.setAttribute('href', 'add_recipe.html');
    add_recipe_div.classList = ["recipe_name"]
    add_recipe_div.innerHTML = "+"
    container.appendChild(add_recipe_div);

}
function DisplayRecipeDetails(i){
    let details = document.getElementById("recipe_details")
    details.classList.toggle("hidden")
    details_html = `
    <span id="back_btn" class="back_btn">
        <- Retour
    </span>
    <span class="recipe_title">
        ${RECIPES[i]["Name"]}
    </span>`

    let nb_people = RECIPES[i]["Nombre de personnes"]
    details_html = details_html + `<span class="nb_people">Pour ${nb_people} personnes</span>`

    let tags = RECIPES[i]["Tags"]
    details_html = details_html + `<span class="tags">${tags.join(", ")}</span>`

    let preparation_time_min = RECIPES[i]["Temps"]
    let preparation_time_text = `${preparation_time_min} minutes`
    if (preparation_time_min >= 60){
        let minutes = preparation_time_min%60
        let hours = Math.floor(preparation_time_min/60)
        if (hours == 1){
            if (minutes == 0){
                preparation_time_text = `${hours} heure`
            }
            else{
                preparation_time_text = `${hours} heure et ${minutes} minutes`
            }
        }
        else{
            if (minutes == 0){
                preparation_time_text = `${hours} heures`
            }
            else{
                preparation_time_text = `${hours} heures et ${minutes} minutes`
            }
        }
        
    }
    details_html = details_html + `<span class="preparation_time">${preparation_time_text}</span>`


    let ing_list = RECIPES[i]["Ingrédients"]
    details_html = details_html + `<div class="ingredients_list">`
    Object.keys(ing_list).forEach( (ing, i) => {
        let unite = INGREDIENTS[ing][0]
        details_html = details_html + `<span class="ingredient">${ing_list[ing]} ${unite} ${ing}</span>`
    })
    details_html = details_html + `</div>`
    details.innerHTML = details_html

    let back_btn = document.getElementById("back_btn")
    back_btn.addEventListener("click", () => {
        HideRecipeDetails()
    })

}

function HideRecipeDetails(){
    // Hide recipe details
    let details = document.getElementById("recipe_details")
    details_html = ""
    details.innerHTML = details_html
    details.classList.toggle("hidden")

    // Display full list of recipes
    let container = document.getElementById("recipes_container")
    container.classList.toggle("hidden")
}