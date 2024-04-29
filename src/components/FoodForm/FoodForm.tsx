import { Types } from "mongoose";
import { Link } from 'react-router-dom';

export default function FoodForm({ 
    id, 
    name, 
    type, 
    calories, 
    protein, 
    carbohydrates, 
    fat,
    deleteFood, 
}: { 
    id: Types.ObjectId, 
    name: string, 
    type: string, 
    calories: number, 
    protein: number, 
    carbohydrates: number, 
    fat: number, 
    deleteFood: Function,
}) {

    return(
        <div>
            <p>{name} &nbsp; {type} &nbsp; {calories} &nbsp; {protein} &nbsp; {carbohydrates} &nbsp; {fat}</p>
            <Link to={{pathname: `/foods/edit/${id}/${name}/${type}/${calories}/${protein}/${carbohydrates}/${fat}`}}>Edit</Link>
            <button onClick={() => deleteFood(id)}>Delete</button>
        </div>
    );
}