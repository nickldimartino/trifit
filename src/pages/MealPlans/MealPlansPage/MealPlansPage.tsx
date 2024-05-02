/*----------------------------------- Module Imports -----------------------------------*/
// External
import { useEffect, useState } from "react";

// Internal
import Logo from "../../../components/Logo/Logo";
import MealPlanList from "../../../components/MealPlans/MealPlansList/MealPlansList";
import NewMealPlanForm from "../../../components/MealPlans/NewMealPlanForm/NewMealPlanForm";
import * as mealPlansService from "../../../utilities/mealPlans-services";

// Types
import { MealPlanType } from "../../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function MealPlanPage({
  mealPlans,
  setMealPlans,
  editMealPlan,
  user,
  addFoodToMealPlan,
  deleteMealPlan,
}: {
  mealPlans: MealPlanType[];
  setMealPlans: Function;
  editMealPlan: Function;
  user: MealPlanType;
  addFoodToMealPlan: Function;
  deleteMealPlan: Function;
}) {
  // new meal plan state
  const [newMealPlan, setNewMealPlan] = useState<MealPlanType[]>([]);

  // get all the meal plans
  async function getMealPlans() {
    // get all the meal plans
    let newMealPlanSet = await mealPlansService.getMealPlansData();
    // set the meal plans state to the retrieved meal plans
    setMealPlans(newMealPlanSet);
  }

  // add a new meal plan
  async function addNewMealPlan(mealPlan: MealPlanType) {
    // add the meal plan
    await mealPlansService.createMealPlanData(mealPlan);

    // add the meal plan to the meal plan state
    setNewMealPlan([...newMealPlan, mealPlan]);
  }

  // render the page once when the state chanegs
  useEffect(() => {
    getMealPlans();
  }, [newMealPlan]);

  // render the New Meal Plan Form and Meal Plan list
  return (
    <>
      <Logo />
      <h1>Meal Plans Page</h1>
      <div>Filter</div>
      <NewMealPlanForm addNewMealPlan={addNewMealPlan} />
      <MealPlanList
        mealPlans={mealPlans}
        deleteMealPlan={deleteMealPlan}
        addFoodToMealPlan={addFoodToMealPlan}
      />
    </>
  );
}
