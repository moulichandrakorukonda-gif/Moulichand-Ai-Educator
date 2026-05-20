"use client";

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
} from "docx";

import { saveAs } from "file-saver";

type Props = {
  subject: string;
  faculty: string;
  topic: string;
  className: string;
};

export default function LessonPlanGenerator({
  subject,
  faculty,
  topic,
  className,
}: Props) {
  const generateDoc = async () => {
    const doc = new Document({
      sections: [
        {
          children: [

            new Paragraph({
              text: "ICSE LESSON PLAN",
              heading: HeadingLevel.TITLE,
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `Teacher: ${faculty}`,
                  bold: true,
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `Subject: ${subject}`,
                  bold: true,
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `Topic: ${topic}`,
                  bold: true,
                }),
              ],
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `Class: ${className}`,
                  bold: true,
                }),
              ],
            }),

            new Paragraph({ text: "" }),

            new Paragraph({
              text: "Curriculum Connection",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `This lesson is aligned with ICSE curriculum objectives focusing on conceptual understanding, classroom interaction, and experiential learning related to ${topic}.`,
            }),

            new Paragraph({
              text: "Learning Objectives",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `• Students will understand the concept and importance of ${topic}.`,
            }),

            new Paragraph({
              text:
                `• Students will develop analytical and observation skills through classroom interaction.`,
            }),

            new Paragraph({
              text:
                `• Students will actively participate in discussion-based learning.`,
            }),

            new Paragraph({
              text: "Intended Learning Outcomes",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `By the end of the lesson, students will confidently explain the core concepts of ${topic} and apply them in daily life situations.`,
            }),

            new Paragraph({
              text: "Tune In Activity",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `The teacher begins the session with inquiry-based questions, real-life examples, and interactive discussion to activate prior knowledge among students.`,
            }),

            new Paragraph({
              text: "Procedure / Content",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `1. Introduction of topic using classroom interaction.`,
            }),

            new Paragraph({
              text:
                `2. Detailed explanation of ${topic} with suitable examples.`,
            }),

            new Paragraph({
              text:
                `3. Blackboard teaching and concept clarification.`,
            }),

            new Paragraph({
              text:
                `4. Student participation activity and questioning.`,
            }),

            new Paragraph({
              text:
                `5. Recap and reinforcement of key concepts.`,
            }),

            new Paragraph({
              text: "Resources",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `• Textbook\n• Blackboard\n• Charts\n• Classroom Discussion`,
            }),

            new Paragraph({
              text: "Reflection",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `Students demonstrated active engagement and conceptual understanding during the classroom interaction.`,
            }),

            new Paragraph({
              text: "Evaluation",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `Assessment was carried out through oral questioning, interaction, and classroom participation.`,
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, `${topic}-Lesson-Plan.docx`);
  };

  return (
    <button
      onClick={generateDoc}
      style={{
        width: "100%",
        padding: "18px",
        borderRadius: "12px",
        border: "none",
        background: "#00cc44",
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      Download Professional Lesson Plan
    </button>
  );
}