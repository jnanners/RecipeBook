import Recipes from "../components/Recipes"

const HomePage = ({deleteRecipe}) => {
    return (
        <>
            <Recipes deleteRecipe={deleteRecipe}/>
        </>
    )
}

export default HomePage