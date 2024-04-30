import { MealPlanType } from "../../../types";
import MealPlanForm from "../MealPlanForm/MealPlanForm";

export default function MealPlanList({ mealPlans, deleteMealPlan }: { mealPlans: MealPlanType[], deleteMealPlan: Function }) {
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
        />
    ));

    return (
        <>  
            <h1>Meal Plan List</h1>
            {mealPlanItems}
        </>
    );
}