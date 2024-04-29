import FoodsList from "../../components/FoodsList/FoodsList";
import FoodsPicture from "../../components/FoodsPicture/FoodsPicture";
import Logo from "../../components/Logo/Logo"

export default function FoodsPage() {
    return (
        <>  
            <Logo />
            <h1>Foods Page</h1>
            <div>Filter</div>
            <FoodsList />
            <FoodsPicture />
        </>
    );
}