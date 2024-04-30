import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ExercisesPage from '../ExercisesPage/ExercisesPage';
import AuthPage from '../AuthPage/AuthPage';
import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import FoodsPage from '../FoodsPage/FoodsPage';
import MealPlansPage from '../MealPlansPage/MealPlansPage';
import BodyStatsPage from '../BodyStatsPage/BodyStatsPage';
import EditExercisePage from '../EditExercisePage/EditExercisePage';
import EditFoodPage from '../EditFoodPage/EditFoodPage';
import { ExerciseType, FoodType, MealPlanType, WorkoutType } from '../../types';
import * as exercisesService from "../../utilities/exercises-service";
import * as foodsService from "../../utilities/foods-service";
import * as workoutsService from "../../utilities/workouts-service";
import * as mealPlansService from "../../utilities/mealPlans-services";
import EditWorkoutPage from '../EditWorkoutPage/EditWorkoutPage';
import EditMealPlanPage from '../EditMealPlanPage/EditMealPlanPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [exercises, setExercises] = useState([]);
  const [foods, setFoods] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [mealPlans, setMealPlans] = useState([]);
  const location = useLocation();

  async function editExercise(exercise: ExerciseType) {
    const newExercisesSet = await exercisesService.editExercise(exercise);
    setExercises(newExercisesSet);
  }

  async function editFood(food: FoodType) {
    const newFoodSet = await foodsService.editFood(food);
    setFoods(newFoodSet);
  }

  async function editWorkout(workout: WorkoutType) {
    const newWorkoutSet = await workoutsService.editWorkout(workout);
    setWorkouts(newWorkoutSet);
  }

  async function editMealPlan(mealPlan: MealPlanType) {
    const newMealPlanSet = await mealPlansService.editMealPlan(mealPlan);
    setMealPlans(newMealPlanSet);
  }

  const isActive = location.pathname === "/";

  return (
    <main className="App">
      { user ?
      <>
        <Routes>
          <Route path="/" element={<HomePage user={user}/>} />
        </Routes>
        <NavBar
          user={user} 
          setUser={setUser}
          isActive={isActive}
        />
        <Routes>
          <Route path="/exercises" element={<ExercisesPage exercises={exercises} setExercises={setExercises} user={user}/>} />
          <Route path="/exercises/edit/:id/:name/:type/:muscle/:grip/:width" element={<EditExercisePage editExercise={editExercise}/>} />
          <Route path="/workouts" element={<WorkoutsPage workouts={workouts} setWorkouts={setWorkouts} user={user} editWorkout={editWorkout}/>} />
          <Route path="/workouts/edit/:id/:name/" element={<EditWorkoutPage editWorkout={editWorkout}/>} />
          <Route path="/foods" element={<FoodsPage foods={foods} setFoods={setFoods} user={user}/>} />
          <Route path="/foods/edit/:id/:name/:type/:calories/:protein/:carbohydrates/:fat" element={<EditFoodPage editFood={editFood}/>} />
          <Route path="/mealplans" element={<MealPlansPage mealPlans={mealPlans} setMealPlans={setMealPlans} user={user} editMealPlan={editMealPlan}/>} />
          <Route path="/mealplans/edit/:id/:name/:totalCalories/:totalProtein/:totalCarbohydrates/:totalFat" element={<EditMealPlanPage editMealPlan={editMealPlan}/>} />
          <Route path="/bodystats" element={<BodyStatsPage />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser}/>  
      }
    </main>
  );
}
