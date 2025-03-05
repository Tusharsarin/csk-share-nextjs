"use client";
import { useState } from "react";

type QAProps = {
  questions: string;
  answer: string;
};

export default function QA(props: QAProps) {
  const [showQA, setShowQA] = useState(false);
  return (
    <div className="text-left">
      <button className="container" onClick={() => setShowQA(!showQA)}>
        <div className="flex py-6 justify-between">
          <div className="ques">{props.questions}</div>
          <div className="icon-faq">
            <span>{showQA ? "-" : "+"}</span>
          </div>
        </div>
      </button>
      {showQA && <p className="ans">{props.answer}</p>}
    </div>
  );
}
