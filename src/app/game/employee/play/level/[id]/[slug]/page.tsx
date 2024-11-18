"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";

type Question = {
  id: number;
  question: string;
  answers: string[]; // Array of possible answers
};

const questionSets: Record<string, Question[]> = {
  1: [
    { id: 1, question: "What is the capital of Mongolia?", answers: ["Ulaanbaatar", "Tokyo", "Beijing", "Seoul"] },
    { id: 2, question: "What is the tallest mountain in the world?", answers: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"] },
    { id: 3, question: "What is the chemical symbol for water?", answers: ["H2O", "CO2", "NaCl", "O2"] },
  ],
  2: [
    { id: 1, question: "What is the currency of Japan?", answers: ["Yen", "Won", "Dollar", "Euro"] },
    { id: 2, question: "Who discovered gravity?", answers: ["Isaac Newton", "Albert Einstein", "Galileo", "Nikola Tesla"] },
    { id: 3, question: "What is the capital of France?", answers: ["Paris", "Rome", "Berlin", "Madrid"] },
  ],
  // Add more levels as needed
};

const QuestionPage: React.FC = () => {
  const { id, slug } = useParams();
  const router = useRouter();
  const questionId = parseInt(slug as string, 10);

  // Get the questions for the current level
  const questions = questionSets[id as string] || [];

  const question = questions.find((q) => q.id === questionId);

  if (!question) {
    return <div>Question not found</div>;
  }

  const goToNextQuestion = () => {
    const nextQuestionId = questionId + 1;
    if (nextQuestionId <= questions.length) {
      router.push(`/game/employee/play/level/${id}/${nextQuestionId}`);
    } else {
      router.push("/game/employee/play");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/neon-background.jpg')" }}
    >
      <h1
        className="text-white text-4xl font-bold mb-8"
        style={{
          textShadow: "0 0 20px #00ffff, 0 0 30px #00ffff",
        }}
      >
        {question.question}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="px-6 py-3 bg-purple-700 text-white rounded-lg text-xl font-bold transition-transform hover:scale-105"
            style={{
              border: "2px solid #ff00ff",
              boxShadow: "0 0 15px #ff00ff, 0 0 25px #ff00ff",
            }}
            onClick={() => console.log(`Selected answer: ${answer}`)} // Handle answer selection
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-lg text-xl font-bold transition-transform hover:scale-105"
        style={{
          border: "2px solid #00ffff",
          boxShadow: "0 0 15px #00ffff, 0 0 25px #00ffff",
        }}
        onClick={goToNextQuestion}
      >
        Next Question
      </button>
    </div>
  );
};

export default QuestionPage;
