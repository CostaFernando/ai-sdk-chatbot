import { openrouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openrouter("google/gemini-2.0-flash-001"),
    messages,
  });

  return result.toDataStreamResponse();
}
