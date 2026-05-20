"use client";

import { useState } from "react";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [faculty, setFaculty] = useState("");
  const [topic, setTopic] = useState("");
  const [className, setClassName] = useState("");
  const [result, setResult] = useState("");

  const generateLessonPlan = () => {
    const lesson = `
LESSON PLAN

Subject: ${subject}
Faculty Name: ${faculty}
Topic: ${topic}
Class: ${className}

----------------------------

Introduction:
The teacher introduces the topic "${topic}" with simple examples and classroom interaction.

Learning Objectives:
1. Understand the concept of ${topic}
2. Improve subject knowledge
3. Encourage classroom participation

Teaching Method:
- Explanation Method
- Blackboard Teaching
- Student Interaction
- Activity Based Learning

Teaching Aids:
- Textbook
- Blackboard
- Charts
- Digital Content

Classroom Activity:
Students will participate in discussion and answer questions related to ${topic}.

Assessment:
1. Oral Questions
2. Classwork
3. Homework Assignment

Homework:
Write short notes on ${topic}.

Conclusion:
The lesson is summarized and important points are revised.
    `;

    setResult(lesson);
  };

  const downloadLesson = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic}-lesson-plan.txt`;
    a.click();
  };

  return (
    <main
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#081229",
          padding: "30px",
          borderRadius: "20px",
          border: "2px solid cyan",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "cyan",
            marginBottom: "30px",
          }}
        >
          Chandu AI Educator
        </h1>

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Faculty Name"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          style={inputStyle}
        />

        <button onClick={generateLessonPlan} style={buttonStyle}>
          Generate Lesson Plan
        </button>

        <div
          style={{
            background: "black",
            padding: "20px",
            marginTop: "30px",
            borderRadius: "10px",
            whiteSpace: "pre-wrap",
            border: "1px solid cyan",
          }}
        >
          {result || "No lesson plan generated"}
        </div>

        <button
          onClick={downloadLesson}
          style={{
            ...buttonStyle,
            background: "#00cc44",
            marginTop: "20px",
          }}
        >
          Download Lesson Plan
        </button>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  background: "black",
  color: "white",
  border: "1px solid cyan",
  borderRadius: "10px",
  fontSize: "18px",
};

const buttonStyle = {
  width: "100%",
  padding: "18px",
  background: "cyan",
  color: "black",
  border: "none",
  borderRadius: "10px",
  fontSize: "22px",
  fontWeight: "bold",
  cursor: "pointer",
};