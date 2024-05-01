/*----------------------------------- Module Imports -----------------------------------*/
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Types } from "mongoose";

import "./App.css";
import ExercisesPage from "../Exercises/ExercisesPage/ExercisesPage";
import AuthPage from "../AuthPage/AuthPage";
import WorkoutsPage from "../Workouts/WorkoutsPage/WorkoutsPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import FoodsPage from "../Foods/FoodsPage/FoodsPage";
import MealPlansPage from "../MealPlans/MealPlansPage/MealPlansPage";
import BodyStatsPage from "../BodyStatsPage/BodyStatsPage";
import EditExercisePage from "../Exercises/EditExercisePage/EditExercisePage";
import EditFoodPage from "../Foods/EditFoodPage/EditFoodPage";
import EditWorkoutPage from "../Workouts/EditWorkoutPage/EditWorkoutPage";
import EditMealPlanPage from "../MealPlans/EditMealPlanPage/EditMealPlanPage";
import AddExerciseToWorkout from "../Workouts/AddExerciseToWorkoutPage/AddExerciseToWorkoutPage";
import AddFoodToMealPlan from "../MealPlans/AddFoodToMealPlanPage/AddFoodToMealPlan";
import WorkoutDetailsPage from "../Workouts/WorkoutDetailsPage/WorkoutDetailsPage";
import MealPlanDetailsPage from "../MealPlans/MealPlanDetailsPage/MealPlanDetailsPage";

import { getUser } from "../../utilities/users-service";
import * as exercisesService from "../../utilities/exercises-service";
import * as foodsService from "../../utilities/foods-service";
import * as workoutsService from "../../utilities/workouts-service";
import * as mealPlansService from "../../utilities/mealPlans-services";

import { ExerciseType, FoodType, MealPlanType, WorkoutType } from "../../types";

/*------------------------------------- Functions --------------------------------------*/
export default function App() {
  // app state variables
  const [user, setUser] = useState(getUser()); // user state
  const [exercises, setExercises] = useState([]); // exercise state
  const [foods, setFoods] = useState([]); // foods state
  const [workouts, setWorkouts] = useState([]); // workouts state
  const [mealPlans, setMealPlans] = useState([]); // mealplans state

  // save the location and navigation
  const location = useLocation();
  const navigate = useNavigate();

  // edit an exercise
  async function editExercise(exercise: ExerciseType) {
    // edit the exercise in the database
    const newExercisesSet = await exercisesService.editExercise(exercise);

    // save the editted exercise in the state
    setExercises(newExercisesSet);
  }
  // edit a food
  async function editFood(food: FoodType) {
    // edit the food in the database
    const newFoodSet = await foodsService.editFood(food);

    // save the editted food in the state
    setFoods(newFoodSet);
  }

  // edit a workout
  async function editWorkout(workout: WorkoutType) {
    // edit the workout in the database
    const newWorkoutSet = await workoutsService.editWorkout(workout);

    // save the editted wokrout in the state
    setWorkouts(newWorkoutSet);
  }

  // edit a meal plan
  async function editMealPlan(mealPlan: MealPlanType) {
    // edit the meal plan in the database
    const newMealPlanSet = await mealPlansService.editMealPlan(mealPlan);

    // save the editted meal plan in the state
    setMealPlans(newMealPlanSet);
  }

  // delete a workout
  async function deleteWorkout(id: Types.ObjectId) {
    // delete a workout in the database
    const updatedWorkouts = await workoutsService.deleteWorkout(id);

    // set the state to the rest of the workouts
    setWorkouts(updatedWorkouts);
  }

  // delete a meal plan
  async function deleteMealPlan(id: Types.ObjectId) {
    // delete a meal plan in the database
    const updatedMealPlans = await mealPlansService.deleteMealPlan(id);

    // set the state to the rest of the meal plans
    setMealPlans(updatedMealPlans);
  }

  // add an exercise to a workout
  async function addExerciseToWorkout(
    id: Types.ObjectId,
    exerciseId: Types.ObjectId
  ) {
    // add the exercise to a workout in the database
    await workoutsService.addExerciseToWorkout(id, exerciseId);

    // navigate to the exercises page
    navigate("/exercises");
  }

  // add a food to a meal plan
  async function addFoodToMealPlan(id: Types.ObjectId, foodId: Types.ObjectId) {
    // add the food to a meal plan in the database
    await mealPlansService.addFoodToMealPlan(id, foodId);

    // navigate to the mealplans page
    navigate("/mealplans");
  }

  // save the current URL to a flag for conditional rendering
  const isActive = location.pathname === "/";

  // render the app components
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
            <Route path="/bodystats" element={<BodyStatsPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
