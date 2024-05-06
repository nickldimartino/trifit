/*----------------------------------- Module Imports -----------------------------------*/
// External
import React, { useState } from "react";

// Internal
import * as personalTrainerService from "../../utilities/personalTrainer-service";

/*------------------------------------- Functions --------------------------------------*/
export default function PersonalTrainer() {
  // new question state
  const [newQuestion, setNewQuestion] = useState({
    question: "",
  });

  // new answer state
  const [newAnswer, setNewAnswer] = useState({
    answer: "",
  });

  // send and receive a request to the server
  async function askQuestion(question: string) {
    // send the request for an aswer to the server
    const answer = await personalTrainerService.askQuestion(question);

    // save the answer in the state
    setNewAnswer(answer);
  }

  // submits the ask question form
  function handleAskQuestion(evt: React.ChangeEvent<any>) {
    // prevent the page from rendering
    evt.preventDefault();

    // send the question to the api call
    askQuestion(newQuestion.question);

    // reset the question value
    setNewQuestion({
      question: "",
    });
  }

  // handles the user inputs form while typing
  function handleOnChange(evt: React.ChangeEvent<any>) {
    // adds keystrokes to the input box value
    const newQuestionData = {
      ...newQuestion,
      [evt.target.name]: evt.target.value,
    };

    // sets the new body stat state
    setNewQuestion(newQuestionData);
  }

  // render the add body stat form
  return (
    <div className="flex justify-center items-center w-full h-5/6 mt-7">
      <div className="flex justify-center items-center flex-col w-1/2 bg-citrine shadow-lg rounded-lg border-2 border-black">
        <h1 className="text-2xl block text-center text-black font-semibold">
          <i className="fa-solid fa-user"></i> Ask the Personal Trainer
        </h1>
        <hr className="mt-1" />
        <form className="p-3" onSubmit={handleAskQuestion}>
          <label className="text-left block text-base mt-2 text-black font-semibold">
            Ask a question for fitness or nutrition advice
            <input
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              name="question"
              type="text"
              onChange={handleOnChange}
              value={newQuestion.question}
              required
              autoComplete="off"
            />
          </label>
          <div className="mt-5">
            <button className="mb-2 border-2 border-black bg-celestialblue text-white w-3/4 rounded-md hover:bg-frenchblue font-semibold">
              <i className="fa-solid fa-right-to-bracket"></i>Add
            </button>
          </div>
        </form>
        <div>{newAnswer.answer}</div>
      </div>
    </div>
  );
}
