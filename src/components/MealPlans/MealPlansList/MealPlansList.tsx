import { MealPlanType } from "../../../types";
import MealPlanForm from "../MealPlanForm/MealPlanForm";
import { Types } from "mongoose";

export default function MealPlanList({ mealPlans, deleteMealPlan, addFoodToMealPlan }: { mealPlans: MealPlanType[], deleteMealPlan: Function, addFoodToMealPlan: Function }) {
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
            deleteMealPlan={deleteMealPlan}
            addFoodToMealPlan={addFoodToMealPlan}
            foodId={new Types.ObjectId("123456789101112131415161")}
        />
    ));

    return (
        <>  
            <h1>Meal Plan List</h1>
            {mealPlanItems}
        </>
    );
}