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
       </> 
    )
}
export default RecipeList