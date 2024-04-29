import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { ExerciseType } from '../../types';
import * as exercisesService from "../../utilities/exercises-service";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [exercises, setExercises] = useState([]);

  async function editExercise(exercise: ExerciseType) {
    const newExercisesSet = await exercisesService.editExercise(exercise);
    setExercises(newExercisesSet);
  }

  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercises" element={<ExercisesPage exercises={exercises} setExercises={setExercises}/>} />
          <Route path="/exercises/edit/:id/:name/:type/:muscle/:grip/:width" element={<EditExercisePage editExercise={editExercise}/>} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/foods" element={<FoodsPage />} />
          <Route path="/mealplans" element={<MealPlansPage />} />
          <Route path="/bodystats" element={<BodyStatsPage />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser}/>  
      }
    </main>
  );
}
