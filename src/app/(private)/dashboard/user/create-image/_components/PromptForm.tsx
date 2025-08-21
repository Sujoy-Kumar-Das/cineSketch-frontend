"use client";
import Form from "@/_components/shared/form/Form";
import Select from "@/_components/shared/form/Select";
import TextArea from "@/_components/shared/form/TextArea";
import { imageGenerationSchema } from "@/schemas/prompt.validation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaMagic } from "react-icons/fa";
import {
  aiModels,
  imageRatioItems,
  promptDefaultValue,
  promptStyleItems,
  qualityItems,
} from "./prompt.data";

interface PromptFormProps {
  onCreateImage: (data: FieldValues) => Promise<void>;
  loading: boolean;
}

export default function PromptForm({
  onCreateImage,
  loading,
}: PromptFormProps) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6">
      <Form
        onSubmit={onCreateImage}
        defaultValues={promptDefaultValue}
        resolver={zodResolver(imageGenerationSchema)}
      >
        <TextArea
          name="prompt"
          className="mb-6"
          placeholder="Describe what you want to create..."
          label="Prompt"
          size="medium"
          rows={7}
        />
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Select
            name="model"
            options={aiModels}
            size="medium"
            label="Model"
            placeholder="Select A Model"
          />
          <Select
            name="style"
            options={promptStyleItems}
            size="medium"
            label="Style"
            placeholder="Select A Style"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Select
            name="size"
            options={imageRatioItems}
            placeholder="Select Size"
            size="medium"
            label="Size"
          />
          <Select
            name="quality"
            options={qualityItems}
            size="medium"
            label="Quality"
            placeholder="Select Quality"
          />
        </div>
        <button
          className="w-full cta-button py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <AiOutlineLoading3Quarters className="animate-spin text-lg" />
              Generating...
            </>
          ) : (
            <>
              <FaMagic className="text-lg" />
              Generate Image
            </>
          )}
        </button>
      </Form>
    </div>
  );
}
