import { useState } from "react";

export default function NewFoodForm({ addNewFood }: { addNewFood: Function }) {
    const [newFood, setNewFood] = useState({
        name: "",
        type: "",
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0
    });

    function handleAddFood(evt: React.ChangeEvent<any>) {
        evt.preventDefault();
        addNewFood(newFood);
        setNewFood({
            name: "",
            type: "",
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0
        });
    }

    function handleOnChange(evt: React.ChangeEvent<any>) {
        const newFoodData = { ...newFood, [evt.target.name]: evt.target.value }
        setNewFood(newFoodData);
    }

    return (
        <>
            <h1>New Food Form</h1>
            <form onSubmit={handleAddFood}>
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                        onChange={handleOnChange}
                        value={newFood.name}
                        placeholder="Food Name"
                        required
                    />
                </label>
                <label>
                    Type
                    <input 
                        name="type"
                        type="text"
                        onChange={handleOnChange}
                        value={newFood.type}
                        placeholder="Food Type"
                        required
                    />
                </label>
                <label>
                    Calories
                    <input 
                        name="calories"
                        type="number"
                        onChange={handleOnChange}
                        value={newFood.calories}
                        placeholder="Calories"
                        required
                    />
                </label>
                <label>
                    Protein
                    <input 
                        name="protein"
                        type="number"
                        onChange={handleOnChange}
                        value={newFood.protein}
                        placeholder="Protein"
                        required
                    />
                </label>
                <label>
                    Carbohyrates
                    <input 
                        name="carbohydrates"
                        type="number"
                        onChange={handleOnChange}
                        value={newFood.carbohydrates}
                        placeholder="Carbohydrates"
                        required
                    />
                </label>
                <label>
                    Fat
                    <input 
                        name="fat"
                        type="number"
                        onChange={handleOnChange}
                        value={newFood.fat}
                        placeholder="Fat"
                        required
                    />
                </label>
                <button type="submit">Add Food</button>
            </form>
        </>
    );
}