
const Recipe = ({cakeName, ingredients, rating}) => {

return (
    <div
    className="recipe">
        <header> Recipe {cakeName} </header>
        <main>
        <>
            <section>
                {
                    cakes.map((cake, index) => {
                        return(
                            <div key={index}>
                                <h3>{cake.cakeName}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}</p>
            </section>
        </>
        </main>
    </div>


)

}

export default Recipe;