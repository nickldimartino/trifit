import { Types } from "mongoose";
import { Link } from 'react-router-dom';
import { MealPlanType } from "../../../types";

export default function MealPlanForm({ 
    id, 
    name, 
    foods,
    totalCalories,
    totalProtein,
    totalCarbohydrates,
    totalFat,
    deleteMealPlan,
    addFoodToMealPlan,
    foodId
}: { 
    id: Types.ObjectId, 
    name: string, 
    foods: MealPlanType[],
    totalCalories: number,
    totalProtein: number,
    totalCarbohydrates: number,
    totalFat: number,
    deleteMealPlan: Function,
    addFoodToMealPlan: Function,
    foodId: Types.ObjectId
}) {

    return(
        <div>
            <p>{name} &nbsp; {totalCalories} &nbsp; {totalProtein} &nbsp; {totalCarbohydrates} &nbsp; {totalFat} &nbsp;</p>
            <button onClick={() => addFoodToMealPlan(id, foodId)}>Add</button>
            <Link to={{pathname: `/mealplans/edit/${id}/${name}/${totalCalories}/${totalProtein}/${totalCarbohydrates}/${totalFat}`}}>Edit</Link>
            <button onClick={() => deleteMealPlan(id)}>Delete</button>
        </div>
    );
}