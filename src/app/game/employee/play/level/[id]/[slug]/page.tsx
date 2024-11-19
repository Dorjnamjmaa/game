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
    { id: 1, question: "Та энэхүү хоёр хүний ур чадвар, туршлагыг хэрхэн харьцуулж үнэлсэн бэ?", answers: ["Эмэгтэй, эрэгтэй хүн гэдгээр нь", "Мэргэжлийн ур чадвараар нь", "Илүү шалтгаан байхгүй"] },
    { id: 2, question: "Тэдний хувь хүний онцлог, багаар ажиллах чадвар нь сонголтод хэрхэн нөлөөлсөн бэ?", answers: ["Энхтүшиг инженер болоход тохирохгүй гэж бодсон", "Ажлын туршлагыг харсан", "Бусадтайгаа нийцтэй байх хэрэгтэй гэж харсан"] },
    { id: 3, question: "Инженер мэргэжилд эрэгтэй хүн илүү тохиромжтой гэж бодогдсон уу?", answers: ["Тийм", "Үгүй"] },
  ],
  2: [
    { 
      "id": 1, 
      "question": "Та сонголтоо хийхдээ хэн нэгний хувийн амьдралын нөхцөл байдлыг харгалзсан уу?", 
      "answers": ["Тийм", "Үгүй", "Бараг үгүй"] 
    },
    { 
      "id": 2, 
      "question": "Та сонгосон хүний ажилд орох хүслийн хүчийг хэрхэн үнэлсэн бэ?", 
      "answers": ["Ажлын хүсэл эрмэлзлийг нь харгалзсан", "Өмнөх ажлын амжилтыг нь харсан", "Хувийн онцлог дээр үндэслэсэн"] 
    },
    { 
      "id": 3, 
      "question": "Эмэгтэй инженерүүдтэй ажиллахад хүндрэлтэй гэж боддог уу?", 
      "answers": ["Тийм", "Үгүй", "Хамаарахгүй"] 
    }
  ]
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
        className="text-white px-64 text-4xl font-bold mb-8"
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
            onClick={goToNextQuestion}
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
        Дараагийн асуулт
      </button>
    </div>
  );
};

export default QuestionPage;
