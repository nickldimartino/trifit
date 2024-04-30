import Logo from "../../../components/Logo/Logo"
import { useState, useEffect } from "react";
import { MealPlanType } from "../../../types";
import * as mealPlansServices from "../../../utilities/mealPlans-services";
import { Types } from "mongoose";
import NewMealPlanForm from "../../../components/MealPlans/NewMealPlanForm/NewMealPlanForm";
import MealPlanList from "../../../components/MealPlans/MealPlansList/MealPlansList";

export default function MealPlanPage({ mealPlans, setMealPlans, editMealPlan, user, addFoodToMealPlan, deleteMealPlan }: { mealPlans: any, setMealPlans: Function, editMealPlan: Function, user: MealPlanType, addFoodToMealPlan: Function, deleteMealPlan: Function }) {
    const [newMealPlan, setNewMealPlan] = useState<MealPlanType[]>([]);

    async function getMealPlans() {
        let newMealPlanSet = await mealPlansServices.getMealPlansData();
        setMealPlans(newMealPlanSet);
    }

    async function addNewMealPlan(mealPlan: MealPlanType) {
        await mealPlansServices.createMealPlanData(mealPlan);
        setNewMealPlan([ ...newMealPlan, mealPlan]);
    }

    useEffect(() => {
        getMealPlans();
    }, [newMealPlan]);

    return (
        <>  
            <Logo />
            <h1>Meal Plans Page</h1>
            <div>Filter</div>
            <NewMealPlanForm addNewMealPlan={addNewMealPlan}/>
            <MealPlanList mealPlans={mealPlans} deleteMealPlan={deleteMealPlan} addFoodToMealPlan={addFoodToMealPlan}/>
        </>
    );
}
