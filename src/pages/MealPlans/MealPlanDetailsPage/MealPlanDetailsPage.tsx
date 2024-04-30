import { FoodType } from "../../../types";
import { useParams } from "react-router-dom";
import ExerciseForm from "../../../components/Exercises/ExerciseForm/ExerciseForm";
import { Types } from "mongoose";
import FoodForm from "../../../components/Foods/FoodForm/FoodForm";

export default function MealPlanDetailsPage({ foods, mealPlans }: { foods: FoodType[], mealPlans: any }) {
    const { id } = useParams();
    let thisMealPlan;
    let thisMealPlanFoods: FoodType[] = [];

    for (let w = 0; w < mealPlans.length; w++) {
        if (mealPlans[w]._id === id) {
            thisMealPlan = mealPlans[w];
            break;
        }
    }

    thisMealPlan.foods.forEach((e: Types.ObjectId) => {
        foods.forEach((w: any) => {
            if (e == w._id) {
                thisMealPlanFoods.push(w);
            }
        })
    });

    const foodItems = thisMealPlanFoods.map((f: any, idx: number) => (
        <FoodForm 
            id={f._id}
            key={idx}
            name={f.name}
            type={f.type}
            calories={f.calories}
            protein={f.protein}
            carbohydrates={f.carbohydrates}
            fat={f.fat}
            deleteFood={()=>{}}
            addFoodToMealPlan={()=>{}}
        />
    ));

    return (
        <>
            <h1>Meal Plan Details Page</h1>
            <h3>{thisMealPlan.name}</h3>
            {foodItems}
        </>
    );
}