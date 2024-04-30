import { useState } from "react";

export default function NewMealPlanForm({ addNewMealPlan }: { addNewMealPlan: Function }) {
    const [newMealPlan, setNewMealPlan] = useState({
        name: "",
        foods: [],
        totalCalories: 0,
        totalProtein: 0,
        totalCarbohydrates: 0,
        totalFat: 0
    });

    function handleAddMealPlan(evt: React.ChangeEvent<any>) {
        evt.preventDefault();
        addNewMealPlan(newMealPlan);
        setNewMealPlan({
            name: "",
            foods: [],
            totalCalories: 0,
            totalProtein: 0,
            totalCarbohydrates: 0,
            totalFat: 0
        });
    }

    function handleOnChange(evt: React.ChangeEvent<any>) {
        const newMealPlanData = { ...newMealPlan, [evt.target.name]: evt.target.value }
        setNewMealPlan(newMealPlanData);
    }

    return (
        <>
            <h1>New Meal Plan Form</h1>
            <form onSubmit={handleAddMealPlan}>
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
                <button type="submit">Add Meal Plan</button>
            </form>
        </>
    );
}