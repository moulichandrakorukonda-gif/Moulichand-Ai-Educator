"use client";

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  HeadingLevel,
  ImageRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
} from "docx";

import { saveAs } from "file-saver";

export default function LessonPlanGenerator({
  faculty,
  subject,
  topic,
  className,
}: {
  faculty: string;
  subject: string;
  topic: string;
  className: string;
}) {
  const generateDoc = async () => {
    const imageResponse = await fetch("/logo.png");
    const imageBuffer = await imageResponse.arrayBuffer();

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new ImageRun({
                  data: imageBuffer,
                  transformation: {
                    width: 220,
                    height: 70,
                  },
                }),
              ],
            }),

            new Paragraph({
              text: "LESSON PLAN",
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: {
                after: 300,
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
                      children: [new Paragraph("Faculty Name")],
                    }),
                    new TableCell({
                      children: [new Paragraph(faculty)],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Subject")],
                    }),
                    new TableCell({
                      children: [new Paragraph(subject)],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Topic")],
                    }),
                    new TableCell({
                      children: [new Paragraph(topic)],
                    }),
                  ],
                }),

                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Class")],
                    }),
                    new TableCell({
                      children: [new Paragraph(className)],
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
              text: "Introduction",
              heading: HeadingLevel.HEADING_2,
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text: `The teacher introduces the topic "${topic}" using simple classroom examples, practical explanation, and interactive discussion methods for better student understanding.`,
                  size: 24,
                }),
              ],
            }),

            new Paragraph({
              text: "Learning Objectives",
              heading: HeadingLevel.HEADING_2,
              spacing: {
                before: 300,
              },
            }),

            new Paragraph({
              text: `• Understand the concept of ${topic}`,
            }),

            new Paragraph({
              text: "• Improve conceptual understanding",
            }),

            new Paragraph({
              text: "• Encourage classroom participation",
            }),

            new Paragraph({
              text: "• Develop analytical thinking skills",
            }),

            new Paragraph({
              text: "Teaching Methodology",
              heading: HeadingLevel.HEADING_2,
              spacing: {
                before: 300,
              },
            }),

            new Paragraph({
              text: "• Explanation Method",
            }),

            new Paragraph({
              text: "• Blackboard Teaching",
            }),

            new Paragraph({
              text: "• Student Interaction",
            }),

            new Paragraph({
              text: "• Activity Based Learning",
            }),

            new Paragraph({
              text: "Teaching Aids",
              heading: HeadingLevel.HEADING_2,
              spacing: {
                before: 300,
              },
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
              text: "Classroom Activity",
              heading: HeadingLevel.HEADING_2,
              spacing: {
                before: 300,
              },
            }),

            new Paragraph({
              text: `Students participate in discussion and answer questions related to ${topic}.`,
            }),

            new Paragraph({
              text: "Assessment",
              heading: HeadingLevel.HEADING_2,
              spacing: {
                before: 300,
              },
            }),

            new Paragraph({
              text: "• Oral questioning",
            }),

            new Paragraph({
              text: "• Short written assessment",
            }),

            new Paragraph({
              text: "• Classroom participation evaluation",
            }),

            new Paragraph({
              text: "",
              spacing: {
                before: 400,
              },
            }),

            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Faculty Signature",
                  bold: true,
                }),
              ],
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
        background: "#00c853",
        border: "none",
        borderRadius: "10px",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      Download Professional Lesson Plan
    </button>
  );
}