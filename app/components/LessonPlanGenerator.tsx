"use client";

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
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
              text: "PARAMJYOTI SCHOOL",
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
            }),

            new Paragraph({
              text: "PROFESSIONAL LESSON PLAN",
              bold: true,
              spacing: {
                after: 400,
              },
              alignment: AlignmentType.CENTER,
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
              spacing: { after: 300 },
            }),

            new Paragraph({
              text: "Introduction",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              children: [
                new TextRun({
                  text:
                    `The teacher introduces the topic "${topic}" with meaningful classroom interaction, real-life examples, and conceptual explanation to ensure clear understanding among students.`,
                }),
              ],
            }),

            new Paragraph({
              text: "Learning Objectives",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text: `• Students understand the concept of ${topic}.`,
            }),

            new Paragraph({
              text: "• Students improve subject knowledge and analytical thinking.",
            }),

            new Paragraph({
              text: "• Students actively participate in classroom discussion.",
            }),

            new Paragraph({
              text: "Teaching Methodology",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text: "• Explanation Method",
            }),

            new Paragraph({
              text: "• Blackboard Teaching",
            }),

            new Paragraph({
              text: "• Interactive Learning",
            }),

            new Paragraph({
              text: "• Activity-Based Teaching",
            }),

            new Paragraph({
              text: "Teaching Aids",
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
              text: "Classroom Activity",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                `Students participate in group discussion, concept explanation, questioning sessions, and practical classroom interaction related to ${topic}.`,
            }),

            new Paragraph({
              text: "Assessment",
              heading: HeadingLevel.HEADING_1,
            }),

            new Paragraph({
              text:
                "The teacher evaluates students through oral questioning, classroom participation, written responses, and understanding of concepts taught during the session.",
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