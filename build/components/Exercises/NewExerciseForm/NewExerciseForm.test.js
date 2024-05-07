import { jsx as _jsx } from "react/jsx-runtime";
/*----------------------------------- Module Imports -----------------------------------*/
// External
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// Internal
import NewExerciseForm from "./NewExerciseForm";
/*--------------------------------------- Tests ----------------------------------------*/
describe(NewExerciseForm, function () {
    it("exercise form displays correct form label", function () {
        var getByTestId = render(_jsx(BrowserRouter, { children: _jsx(NewExerciseForm, { addNewExercise: function () { } }) })).getByTestId;
        var labelValue = getByTestId("new-exercise-header").textContent;
        expect(labelValue).toEqual(" Add an Exercise");
    });
});
