import { FoodType } from "../../types";
import FoodForm from "../FoodForm/FoodForm";

export default function FoodsList({ foods, deleteFood }: { foods: FoodType[], deleteFood: Function }) {
    const foodItems = foods.map((f: any, idx: number) => (
        <FoodForm 
            id={f._id}
            key={idx}
            name={f.name}
            type={f.type}
            calories={f.calories}
            protein={f.protein}
            carbohydrates={f.carbohydrates}
            fat={f.fat}
            deleteFood={deleteFood}
        />
    ));

    return (
        <>  
            <h1>Exercises List</h1>
            {foodItems}
        </>
    );
}