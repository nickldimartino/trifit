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
    deleteMealPlan
}: { 
    id: Types.ObjectId, 
    name: string, 
    foods: MealPlanType[],
    totalCalories: number,
    totalProtein: number,
    totalCarbohydrates: number,
    totalFat: number,
    deleteMealPlan: Function,
}) {

    return(
        <div>
            <p>{name} &nbsp; {totalCalories} &nbsp; {totalProtein} &nbsp; {totalCarbohydrates} &nbsp; {totalFat} &nbsp;</p>
            <Link to={{pathname: `/mealplans/edit/${id}/${name}/${totalCalories}/${totalProtein}/${totalCarbohydrates}/${totalFat}`}}>Edit</Link>
            <button onClick={() => deleteMealPlan(id)}>Delete</button>
        </div>
    );
}