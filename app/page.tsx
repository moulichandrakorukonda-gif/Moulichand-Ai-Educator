"use client";

import { useState } from "react";
import LessonPlanGenerator from "./components/LessonPlanGenerator";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [faculty, setFaculty] = useState("");
  const [topic, setTopic] = useState("");
  const [className, setClassName] = useState("");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071126",
        padding: "40px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "#0b1730",
          padding: "30px",
          borderRadius: "20px",
          border: "2px solid #00d9ff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#00d9ff",
            marginBottom: "30px",
            fontSize: "40px",
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

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <LessonPlanGenerator
            subject={subject}
            faculty={faculty}
            topic={topic}
            className={className}
          />
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #00d9ff",
  background: "#000",
  color: "white",
  fontSize: "18px",
};