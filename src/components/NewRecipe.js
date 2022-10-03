import { useState } from "react"

const NewRecipe = ({onSubmit}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleCakeNameChange = (event) => {
        setCakeName(event.target.value)
    }
    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value)
    }
    const handleRatingChange = (event) => {
        setRating(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        if (cakeName == ""  || ingredients == ""  || rating == 0){
            return
        }

        const NewRecipe = {
            cakeName: cakeName,
            ingredients: ingredients,
            rating: rating
        }

        setCakeName("");
        setIngredients("");
        setRating(0);
        onSubmit(NewRecipe);
    }

    return(
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="cakeName">Recipe Name:</label>
            <input 
                type="text"
                id="cakeName"
                onChange={handleCakeNameChange}
                value={cakeName}
            />
            <label htmlFor="ingredients">Ingredients:</label>
            <input 
                type="text"
                id="ingredients"
                onChange={handleIngredientsChange}
                value={ingredients}
            />
            <label htmlFor="rating">Rating:</label>
            <input 
                type="number"
                id="rating"
                onChange={handleRatingChange}
                value={rating}
            />
            <input type="submit" value="Add Recipe"/>
        </form>
    )
}

export default NewRecipe;