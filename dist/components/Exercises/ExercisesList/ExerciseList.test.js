import { jsx as _jsx } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// Internal
import ExerciseList from "./ExercisesList";
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
describe(ExerciseList, function () {
    it("exercise list displays correct exercise label", function () {
        var getByTestId = render(_jsx(BrowserRouter, { children: _jsx(ExerciseList, { exercises: [], addExerciseToWorkout: function () { }, deleteExercise: function () { }, user: tempUser }) })).getByTestId;
        var labelValue = getByTestId("exercise-list-header").textContent;
        expect(labelValue).toEqual("Exercises");
    });
});
