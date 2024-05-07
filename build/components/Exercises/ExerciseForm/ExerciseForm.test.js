import { jsx as _jsx } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { Types } from "mongoose";
import { BrowserRouter } from "react-router-dom";
// Internal
import ExerciseForm from "./ExerciseForm";
/*-------------------------------------- Variables -------------------------------------*/
var tempUser = {
    name: "temp name",
    email: "temp@mail.com",
    password: "temp",
    isAdmin: "false",
    workouts: [],
    mealPlans: [],
    bodyStats: [],
};
/*--------------------------------------- Tests ----------------------------------------*/
describe(ExerciseForm, function () {
    it("exercise displays correct exercise labels", function () {
        var getByTestId = render(_jsx(BrowserRouter, { children: _jsx(ExerciseForm, { id: new Types.ObjectId("123456789101112131415161"), name: "Bench Press", type: "Barbell", muscle: "Chest", grip: "Overhand", width: "Neutral", addExerciseToWorkout: function () { }, deleteExercise: function () { }, user: tempUser }) })).getByTestId;
        var labelValue = getByTestId("exercise-name").textContent;
        expect(labelValue).toEqual("Bench Press");
    });
});
