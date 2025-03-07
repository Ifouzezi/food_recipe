import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Navbar = () => {

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    console.log(searchParam);

    return (
        <nav className="flex justify-between items-center py-5 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold">
                <NavLink to={'/'} className="text-black" >
                    FoodRecipes
                </NavLink>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    placeholder="Search for recipes..."
                    className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
                />
            </form>
            <ul className="flex gap-5">
                <NavLink to={'/'} className="text-black hover:text-gray-700 duration-300" >
                    Home
                </NavLink>
                <NavLink to={'/favorites'} className="text-black hover:text-gray-700 duration-300" >
                    Favorites
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;