import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MealPlanType } from "../../types";
import { Types } from "mongoose";

export default function EditMealPlanPage({ editMealPlan }: { editMealPlan: Function }) {
    const { id, name, foods } = useParams();
    const [newMealPlan, setNewMealPlan] = useState({
        name: "",
        foods: [],
        totalCalories: 0,
        totalProtein: 0,
        totalCarbohydrates: 0,
        totalFat: 0
    });
    const navigate = useNavigate();

    function handleEditMealPlan(evt: React.ChangeEvent<any>) {
        evt.preventDefault();

        const edittedMealPlanData: MealPlanType = {
            id: new Types.ObjectId(id),
            name: newMealPlan.name,
            foods: newMealPlan.foods,
            totalCalories: newMealPlan.totalCalories,
            totalProtein: newMealPlan.totalProtein,
            totalCarbohydrates: newMealPlan.totalCarbohydrates,
            totalFat: newMealPlan.totalFat,
        }

        editMealPlan(edittedMealPlanData);
        
        navigate("/mealplans");
    }

    function handleOnChange(evt: React.ChangeEvent<any>) {
        const newMealPlanData = { ...newMealPlan, [evt.target.name]: evt.target.value }
        setNewMealPlan(newMealPlanData);
    }

    return (
        <>
            <h1>Edit Meal Plan Page</h1>
            <form onSubmit={handleEditMealPlan}>
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                        onChange={handleOnChange}
                        value={newMealPlan.name}
                        placeholder="Meal Plan Name"
                        required
                    />
                </label>
                <label>
                    Foods
                    <input 
                        name="foods"
                        type="text"
                        onChange={handleOnChange}
                        value={newMealPlan.foods}
                    />
                </label>
                <label>
                    Total Calories
                    <input 
                        name="totalCalories"
                        type="text"
                        onChange={handleOnChange}
                        value={newMealPlan.totalCalories}
                    />
                </label>
                <label>
                    Total Protein
                    <input 
                        name="totalProtein"
                        type="text"
                        onChange={handleOnChange}
                        value={newMealPlan.totalProtein}
                    />
                </label>
                <label>
                    Total Carbohydrates
                    <input 
                        name="totalCarbohydrates"
                        type="text"
                        onChange={handleOnChange}
                        value={newMealPlan.totalCarbohydrates}
                    />
                </label>
                <label>
                    Total Fat
                    <input 
                        name="totalFat"
                        type="text"
                        onChange={handleOnChange}
                        value={newMealPlan.totalFat}
                    />
                </label>
                <button type="submit">Edit Meal Plan</button>
            </form>
        </>
    );
}