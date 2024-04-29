import { useState, useEffect } from "react";
import FoodsList from "../../components/Foods/FoodsList/FoodsList";
import FoodsPicture from "../../components/Foods/FoodsPicture/FoodsPicture";
import Logo from "../../components/Logo/Logo"
import { FoodType } from "../../types";
import { Types } from "mongoose";
import NewFoodForm from "../../components/Foods/NewFoodForm/NewFoodForm";
import * as foodsService from "../../utilities/foods-service";

export default function FoodsPage({ foods, setFoods }: { foods: any, setFoods: Function }) {
    const [newFood, setNewFood] = useState<FoodType[]>([]);

    async function getFoods() {
        let newFoodSet = await foodsService.getFoodData();
        setFoods(newFoodSet);
    }
    
    async function addNewFood(food: FoodType) {
        await foodsService.createFoodData(food);
        setNewFood([ ...newFood, food]);
    }

    async function deleteFood(id: Types.ObjectId) {
        const updatedExercises = await foodsService.deleteFood(id);
        setFoods(updatedExercises);
    }

    useEffect(() => {
        getFoods();
    }, []);

    return (
        <>  
            <Logo />
            <h1>Food Page Page</h1>
            <div>Filter</div>
            <NewFoodForm addNewFood={addNewFood}/>
            <FoodsList 
                foods={foods}
                deleteFood={deleteFood}/>
            <FoodsPicture />
        </>
    );
}