"use client";

import { useState } from "react";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [faculty, setFaculty] = useState("");
  const [topic, setTopic] = useState("");
  const [className, setClassName] = useState("");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateLessonPlan() {
    try {
      setLoading(true);

      const message = `
Subject: ${subject}
Faculty: ${faculty}
Topic: ${topic}
Class: ${className}
`;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      console.log("API DATA:", data);

      setResult(data.reply || "No lesson plan generated");

    } catch (error) {
      console.log(error);

      setResult("Something went wrong");
    }

    setLoading(false);
  }

  function downloadLessonPlan() {
    const element = document.createElement("a");

    const file = new Blob([result], {
      type: "text/plain",
    });

    element.href = URL.createObjectURL(file);

    element.download = `${topic}-lesson-plan.txt`;

    document.body.appendChild(element);

    element.click();
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold text-cyan-400 text-center mb-12">
        Chandu AI Educator
      </h1>

      <div className="max-w-4xl mx-auto bg-gray-900 border border-cyan-500 rounded-3xl p-10">

        <h2 className="text-5xl font-bold mb-10">
          AI Lesson Plan Generator
        </h2>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 text-xl"
          />

          <input
            type="text"
            placeholder="Faculty Name"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 text-xl"
          />

          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 text-xl"
          />

          <input
            type="text"
            placeholder="Class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 text-xl"
          />

          <button
            onClick={generateLessonPlan}
            className="w-full bg-cyan-400 text-black text-2xl font-bold py-5 rounded-2xl"
          >
            {loading ? "Generating..." : "Generate Lesson Plan"}
          </button>

        </div>

        {result && (
          <div className="mt-10">

            <div className="bg-black border border-cyan-500 p-6 rounded-2xl whitespace-pre-wrap text-lg">
              {result}
            </div>

            <button
              onClick={downloadLessonPlan}
              className="mt-6 w-full bg-green-500 text-black text-xl font-bold py-4 rounded-2xl"
            >
              Download Lesson Plan
            </button>

          </div>
        )}

      </div>
    </div>
  );
}