const Recipe = ({recipe}) => {
    return (
        <div className="p-6 rounded-lg shadow-md text-center">
            <a href={recipe.link} target="_blank" className="text-2xl text-blue-400">{recipe.title}</a>
            <p>{recipe.cookTime} minutes</p>
        </div>
    )
}

export default Recipe