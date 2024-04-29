import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FoodType } from "../../types";
import { Types } from "mongoose";

export default function EditFoodPage({ editFood }: { editFood: Function }) {
    const { id, name, type, calories, protein, carbohydrates, fat } = useParams();
    const [newFood, setNewFood] = useState({
        name: "",
        type: "",
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    });
    const navigate = useNavigate();

    function handleEditFood(evt: React.ChangeEvent<any>) {
        evt.preventDefault();

        const edittedFoodData: FoodType = {
            id: new Types.ObjectId(id),
            name: newFood.name,
            type: newFood.type,
            calories: newFood.calories,
            protein: newFood.protein,
            carbohydrates: newFood.carbohydrates,
            fat: newFood.fat,
        }

        editFood(edittedFoodData);
        
        navigate("/foods");
    }

    function handleOnChange(evt: React.ChangeEvent<any>) {
        const newExerciseData = { ...newFood, [evt.target.name]: evt.target.value }
        setNewFood(newExerciseData);
    }

    return (
        <>
            <h1>Edit Food Page</h1>
            <form onSubmit={handleEditFood}>
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                        onChange={handleOnChange}
                        value={newFood.name}
                        placeholder={name}
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
                        placeholder={type}
                        required
                    />
                </label>
                <label>
                    Calories
                    <input 
                        name="calories"
                        type="text"
                        onChange={handleOnChange}
                        value={newFood.calories}
                        placeholder={calories}
                        required
                    />
                </label>
                <label>
                    Protein
                    <input 
                        name="protein"
                        type="text"
                        onChange={handleOnChange}
                        value={newFood.protein}
                        placeholder={protein}
                        required
                    />
                </label>
                <label>
                    Carbohydrates
                    <input 
                        name="carbohydrates"
                        type="text"
                        onChange={handleOnChange}
                        value={newFood.carbohydrates}
                        placeholder={carbohydrates}
                        required
                    />
                </label>
                <label>
                    Fat
                    <input 
                        name="fat"
                        type="text"
                        onChange={handleOnChange}
                        value={newFood.fat}
                        placeholder={fat}
                        required
                    />
                </label>
                <button type="submit">Confirm Edit</button>
            </form>
        </>
    );
}