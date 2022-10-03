import Recipe from "./Recipe";

const RecipeList = ({recipes}) => {

    return(
       <>
       <h3>Cake Recipes</h3>
    {
       recipes.map((recipe,index) => 
       {
        return <Recipe key = {index} cakeName={recipe.cakeName} ingredients=
        {recipe.ingredients} rating={recipe.rating} />


       }) 
    }

      <section>
      <h4>Average cake rating: </h4>
      <p>{(recipes.reduce((total, recipe) => total + recipe.rating, 0) / recipes.length)}</p>
      </section>

       </> 
    )
}
export default RecipeList