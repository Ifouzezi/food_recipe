import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";



const Details = () => {

    const { id } = useParams();
    const { recipeDetails, setRecipeDetails } = useContext(GlobalContext);

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
            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetails?.recipe?.image_url}
                        alt={recipeDetails?.recipe?.title}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default Details;