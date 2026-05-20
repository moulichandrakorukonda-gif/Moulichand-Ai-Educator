"use client";

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
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
              alignment: AlignmentType.CENTER,
            }),

            new Paragraph({
              text: "Bachelor of Education",
              alignment: AlignmentType.CENTER,
              spacing: {
                after: 400,
              },
            }),

            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },

              rows: [

                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph("Teacher Education Student"),
                      ],
                    }),

                    new TableCell({
                      children: [
                        new Paragraph(faculty),
                      ],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph("Learning Area"),
                      ],
                    }),

                    new TableCell({
                      children: [
                        new Paragraph(subject),
                      ],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph("Year Level"),
                      ],
                    }),

                    new TableCell({
                      children: [
                        new Paragraph(className),
                      ],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph("Class Size"),
                      ],
                    }),

                    new TableCell({
                      children: [
                        new Paragraph("40 Students"),
                      ],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph("Timing"),
                      ],
                    }),

                    new TableCell({
                      children: [
                        new Paragraph("45 Minutes"),
                      ],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [
                        new Paragraph("Topic"),
                      ],
                    }),

                    new TableCell({
                      children: [
                        new Paragraph(topic),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            new Paragraph({
              text: "",
              spacing: {
                after: 300,
              },
            }),

            new Paragraph({
              text: "Curriculum Connections",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `This lesson connects with the ICSE curriculum objectives related to ${topic}. The content helps students improve conceptual understanding, classroom interaction, and subject knowledge.`,
            }),

            new Paragraph({
              text: "",
            }),

            new Paragraph({
              text: "Learning Objectives",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text: `• Students understand the concept of ${topic}.`,
            }),

            new Paragraph({
              text: "• Students improve analytical and conceptual thinking.",
            }),

            new Paragraph({
              text: "• Students actively participate in classroom discussion.",
            }),

            new Paragraph({
              text: "",
            }),

            new Paragraph({
              text: "Intended Learning Outcomes",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `By the end of the lesson, students will be able to explain the topic "${topic}" clearly and answer conceptual questions confidently.`,
            }),

            new Paragraph({
              text: "",
            }),

            new Paragraph({
              text: "Tune In Activity",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `The teacher begins the lesson with real-life examples, questioning techniques, and classroom interaction related to ${topic}.`,
            }),

            new Paragraph({
              text: "",
            }),

            new Paragraph({
              text: "Procedure [Content]",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `The teacher explains the topic "${topic}" using blackboard teaching, explanation method, diagrams, questioning sessions, and interactive learning strategies.`,
            }),

            new Paragraph({
              text:
                "Students participate in note-taking, observation, discussion, and classroom activities.",
            }),

            new Paragraph({
              text: "",
            }),

            new Paragraph({
              text: "Resources",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text: "• Textbook",
            }),

            new Paragraph({
              text: "• Blackboard",
            }),

            new Paragraph({
              text: "• Charts and Diagrams",
            }),

            new Paragraph({
              text: "• Digital Content",
            }),

            new Paragraph({
              text: "",
            }),

            new Paragraph({
              text: "Reflection",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                "The lesson was conducted successfully with active classroom participation and conceptual understanding among students.",
            }),

            new Paragraph({
              text: "",
            }),

            new Paragraph({
              text: "Evaluation",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                "Students were evaluated through oral questioning, written responses, and classroom participation during the lesson.",
            }),

            new Paragraph({
              text: "",
              spacing: {
                after: 500,
              },
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: "Faculty Signature: ____________________",
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);

    saveAs(blob, `${topic}-ICSE-Lesson-Plan.docx`);
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