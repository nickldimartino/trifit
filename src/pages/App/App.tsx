import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import ExercisesPage from "../Exercises/ExercisesPage/ExercisesPage";
import AuthPage from "../AuthPage/AuthPage";
import WorkoutsPage from "../Workouts/WorkoutsPage/WorkoutsPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import FoodsPage from "../Foods/FoodsPage/FoodsPage";
import MealPlansPage from "../MealPlans/MealPlansPage/MealPlansPage";
import BodyStatsPage from "../BodyStatsPage/BodyStatsPage";
import EditExercisePage from "../Exercises/EditExercisePage/EditExercisePage";
import EditFoodPage from "../Foods/EditFoodPage/EditFoodPage";
import { ExerciseType, FoodType, MealPlanType, WorkoutType } from "../../types";
import * as exercisesService from "../../utilities/exercises-service";
import * as foodsService from "../../utilities/foods-service";
import * as workoutsService from "../../utilities/workouts-service";
import * as mealPlansService from "../../utilities/mealPlans-services";
import EditWorkoutPage from "../Workouts/EditWorkoutPage/EditWorkoutPage";
import EditMealPlanPage from "../MealPlans/EditMealPlanPage/EditMealPlanPage";
import AddExerciseToWorkout from "../Workouts/AddExerciseToWorkoutPage/AddExerciseToWorkoutPage";
import { Types } from "mongoose";
import AddFoodToMealPlan from "../MealPlans/AddFoodToMealPlanPage/AddFoodToMealPlan";
import WorkoutDetailsPage from "../Workouts/WorkoutDetailsPage/WorkoutDetailsPage";
import MealPlanDetailsPage from "../MealPlans/MealPlanDetailsPage/MealPlanDetailsPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [exercises, setExercises] = useState([]);
  const [foods, setFoods] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [mealPlans, setMealPlans] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

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

  async function deleteWorkout(id: Types.ObjectId) {
    const updatedWorkouts = await workoutsService.deleteWorkout(id);
    setWorkouts(updatedWorkouts);
  }

  async function deleteMealPlan(id: Types.ObjectId) {
    const updatedMealPlans = await mealPlansService.deleteMealPlan(id);
    setMealPlans(updatedMealPlans);
  }

  async function addExerciseToWorkout(
    id: Types.ObjectId,
    exerciseId: Types.ObjectId
  ) {
    await workoutsService.addExerciseToWorkout(id, exerciseId);
    navigate("/exercises");
  }

  async function addFoodToMealPlan(id: Types.ObjectId, foodId: Types.ObjectId) {
    await mealPlansService.addFoodToMealPlan(id, foodId);
    navigate("/mealplans");
  }

  const isActive = location.pathname === "/";

  return (
    <main className="App">
      {user ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
          </Routes>
          <NavBar user={user} setUser={setUser} isActive={isActive} />
          <Routes>
            <Route
              path="/exercises"
              element={
                <ExercisesPage
                  exercises={exercises}
                  setExercises={setExercises}
                  user={user}
                  addExerciseToWorkout={addExerciseToWorkout}
                />
              }
            />
            <Route
              path="/exercises/edit/:id/:name/:type/:muscle/:grip/:width"
              element={<EditExercisePage editExercise={editExercise} />}
            />
            <Route
              path="/workouts"
              element={
                <WorkoutsPage
                  workouts={workouts}
                  setWorkouts={setWorkouts}
                  user={user}
                  editWorkout={editWorkout}
                  addExerciseToWorkout={addExerciseToWorkout}
                  deleteWorkout={deleteWorkout}
                />
              }
            />
            <Route
              path="/workouts/edit/:id/:name/"
              element={<EditWorkoutPage editWorkout={editWorkout} />}
            />
            <Route
              path="/workouts/display/:id/"
              element={
                <AddExerciseToWorkout
                  workouts={workouts}
                  deleteWorkout={deleteWorkout}
                  addExerciseToWorkout={addExerciseToWorkout}
                />
              }
            />
            <Route
              path="/workouts/:id"
              element={
                <WorkoutDetailsPage
                  exercises={exercises}
                  workouts={workouts}
                  user={user}
                />
              }
            />
            <Route
              path="/foods"
              element={
                <FoodsPage
                  foods={foods}
                  setFoods={setFoods}
                  user={user}
                  addFoodToMealPlan={addFoodToMealPlan}
                />
              }
            />
            <Route
              path="/foods/edit/:id/:name/:type/:calories/:protein/:carbohydrates/:fat"
              element={<EditFoodPage editFood={editFood} />}
            />
            <Route
              path="/mealplans"
              element={
                <MealPlansPage
                  mealPlans={mealPlans}
                  setMealPlans={setMealPlans}
                  user={user}
                  editMealPlan={editMealPlan}
                  addFoodToMealPlan={addFoodToMealPlan}
                  deleteMealPlan={deleteMealPlan}
                />
              }
            />
            <Route
              path="/mealplans/edit/:id/:name/:totalCalories/:totalProtein/:totalCarbohydrates/:totalFat"
              element={<EditMealPlanPage editMealPlan={editMealPlan} />}
            />
            <Route
              path="/mealplans/display/:id/"
              element={
                <AddFoodToMealPlan
                  mealPlans={mealPlans}
                  deleteMealPlan={deleteMealPlan}
                  addFoodToMealPlan={addFoodToMealPlan}
                />
              }
            />
            <Route
              path="/mealplans/:id"
              element={
                <MealPlanDetailsPage
                  foods={foods}
                  mealPlans={mealPlans}
                  user={user}
                />
              }
            />
            <Route path="/bodystats" element={<BodyStatsPage user={user} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
