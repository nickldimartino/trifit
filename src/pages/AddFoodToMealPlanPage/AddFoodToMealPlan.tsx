import { MealPlanType } from "../../types";
import { useParams } from "react-router-dom";
import { Types } from "mongoose";
import MealPlanForm from "../../components/MealPlans/MealPlanForm/MealPlanForm";

export default function AddFoodToMealPlan({ mealPlans, deleteMealPlan, addFoodToMealPlan }: { mealPlans: MealPlanType[], deleteMealPlan: Function, addFoodToMealPlan: Function }) {
    const { id } = useParams();

    const mealPlanItems = mealPlans.map((m: any, idx: number) => (
        <MealPlanForm 
            id={m._id}
            key={idx}
            name={m.name}
            foods={m.foods}
            totalCalories={m.totalCalories}
            totalProtein={m.totalProtein}
            totalCarbohydrates={m.totalCarbohydrates}
            totalFat={m.totalFat}
            addFoodToMealPlan={addFoodToMealPlan}
            deleteMealPlan={deleteMealPlan}
            foodId={new Types.ObjectId(id)}
        />
    ));
    
    return (
        <>
            <h1>Add Food to Meal Plan</h1>
            {mealPlanItems}
        </>
    );
}