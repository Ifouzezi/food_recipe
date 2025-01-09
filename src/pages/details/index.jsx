import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";



const Details = () => {

    const { id } = useParams();
    const {
        recipeDetails,
        setRecipeDetails,
        handleAddToFavorite,
        favoriteList
    } = useContext(GlobalContext);

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();

            console.log(data);
            if (data?.data?.recipe) {
                setRecipeDetails(data?.data);
            }
        }

        getRecipeDetails();
    }, []);

    console.log(recipeDetails, 'recipeDetails');

    return (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="row-start-1 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetails?.recipe?.image_url}
                        alt={recipeDetails?.recipe?.title}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm text-cyan-700 font-medium">
                    {recipeDetails?.recipe?.publisher}
                </span>
                <h3 className="font-bold text-xl truncate mb-3 text-black">
                    {recipeDetails?.recipe?.title}
                </h3>
                <div>
                    <button
                        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
                        onClick={() => handleAddToFavorite(recipeDetails?.recipe)}
                    >
                        {favoriteList.findIndex(
                            (item) => item.id === recipeDetails?.recipe?.id
                        ) !== -1 ? "Remove from favorites" : "Add to favorites"}
                    </button>
                </div>
                <div className="px-4 py-6 border border-gray-200 rounded-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">Ingredients</h2>
                    <ul className="space-y-2">
                        {recipeDetails?.recipe?.ingredients.map((ingredient, index) => (
                            <li key={index} className="flex justify-between text-gray-700">
                                <span className="font-medium">
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span className="text-gray-500">{ingredient.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Details;