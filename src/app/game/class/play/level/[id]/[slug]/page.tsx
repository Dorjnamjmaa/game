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
    { id: 1, question: "Билгүүнийг яагаад илүү тохиромжтой гэж үзсэн бэ?", answers: ["Удирдах чадвар сайн гэж бодсон", "Боломж олгохыг хүссэн", "Хүйсийг нь илүү чухалчилсан"] },
    { id: 2, question: "Уянгын өмнө нь ангийн дарга хийж байсан туршлага нь сонголтод нөлөөлөөгүй бол ямар шалтгаан байсан бэ?", answers: ["Эрэгтэй хүн удирдах зүйлдээ сайн", "Туршлага үүнд хамаагүй гэж бодсон", "Шалтгаангүй сонгосон"] },
    { id: 3, question: "Эмэгтэй хүн илүү гүйцэтгэх албан тушаалд илүү тохирдог гэж үздэг. Та үүнтэй санал нэг байна уу?", answers: ["Тийм", "Үгүй"] },
  ],
  2: [
    { 
      "id": 1, 
      "question": "Билгүүнийг сонгоход түүний харилцааны ур чадвар хэр чухал байсан бэ?", 
      "answers": ["Маш чухал", "Бага зэрэг чухал", "Огт чухал биш"] 
    },
    { 
      "id": 2, 
      "question": "Уянгыг сонгосон бол багийн уур амьсгалд хэрхэн нөлөөлнө гэж та бодож байсан бэ?", 
      "answers": ["Эерэгээр нөлөөлнө", "Сөрөгөөр нөлөөлж магадгүй", "Ямар ч нөлөө үзүүлэхгүй"] 
    },
    { 
      "id": 3, 
      "question": "Та сонголтоо хийхдээ нас, туршлагын аль нэгийг илүү чухалчилсан уу?", 
      "answers": ["Насыг илүү чухалчилсан", "Туршлагыг илүү чухалчилсан", "Аль алинд нь тэгш хандсан"] 
    }]  
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
      router.push(`/game/class/play/level/${id}/${nextQuestionId}`);
    } else {
      router.push("/game/class/play");
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
