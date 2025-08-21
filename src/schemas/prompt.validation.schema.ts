import z from "zod";

export const imageGenerationSchema = z.object({
  prompt: z
    .string()
    .min(10, "Prompt must be at least 10 characters")
    .max(500, "Prompt must be at most 500 characters")
    .trim(),
  style: z.enum(
    ["cinematic", "realistic", "oil painting", "digital art", "cartoon"],
    { error: "Please select a style" }
  ),
  model: z.enum(["flux", "kontext", "turbo"], {
    error: "Please select a model",
  }),
  size: z.enum(["1:1", "16:9", "9:16", "4:3", "21:9"], {
    error: "Please select a size",
  }),
  quality: z.enum(["low", "medium", "high", "ultra", "max"], {
    error: "Please select a quality",
  }),
});
