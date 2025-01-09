import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipesList from "../../components/recipesList";

const Favorites = () => {
    
    const { favoriteList } = useContext(GlobalContext);

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-12">
            {favoriteList && favoriteList.length > 0 ? (
                favoriteList.map((item, index) => (
                    <RecipesList key={index} item={item} />
                ))
            ) : (
                <div className="text-2xl text-center mt-12">No favorites</div>
            )}
        </div>
    );
};

export default Favorites;
