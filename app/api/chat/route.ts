import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an expert Indian teacher who creates lesson plans in simple Indian English.",
        },
        {
          role: "user",
          content: body.message,
        },
      ],
    });

    const lesson =
      response.choices[0]?.message?.content || "Lesson plan not generated";

    return Response.json({
      reply: lesson,
    });

  } catch (error: any) {
    console.log("OPENAI ERROR:", error);

    return Response.json({
      reply: "OpenAI API Error",
    });
  }
}