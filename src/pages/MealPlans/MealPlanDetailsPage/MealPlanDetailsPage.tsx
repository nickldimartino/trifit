import { FoodType, UserDataType } from "../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { Types } from "mongoose";
import FoodForm from "../../../components/Foods/FoodForm/FoodForm";
import * as mealPlansService from "../../../utilities/mealPlans-services";

export default function MealPlanDetailsPage({ foods, mealPlans, user }: { foods: FoodType[], mealPlans: any, user: UserDataType }) {
    const { id } = useParams();
    let thisMealPlan;
    let thisMealPlanFoods: FoodType[] = [];
    const navigate = useNavigate();

    for (let w = 0; w < mealPlans.length; w++) {
        if (mealPlans[w]._id === id) {
            thisMealPlan = mealPlans[w];
            break;
        }
    }

    thisMealPlan.foods.forEach((e: Types.ObjectId) => {
        foods.forEach((w: any) => {
            if (e === w._id) {
                thisMealPlanFoods.push(w);
            }
        })
    });

    async function removeExerciseFromWorkout(foodId: Types.ObjectId) {
        await mealPlansService.removeFoodFromMealPlan(id, foodId);
        navigate("/mealPlans");
    }

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
            deleteFood={removeExerciseFromWorkout}
            addFoodToMealPlan={()=>{}}
            user={user}
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