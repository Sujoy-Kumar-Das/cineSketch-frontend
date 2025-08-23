"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  generateImageService,
  IGenerateImageData,
} from "@/service/actions/prompt.service";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import ImagePreview from "./ImagePreview";
import { imageRatios } from "./prompt.data";
import PromptForm from "./PromptForm";

type ImageRatioKey = keyof typeof imageRatios;

export default function ImagePromptAndResultGrid() {
  const [result, setResult] = useState<{
    link: string;
    title: string;
    loading: boolean;
    error?: string;
    _id: string;
  }>({
    link: "",
    title: "",
    loading: false,
    error: undefined,
    _id: "",
  });

  const handleCreateImage = async (data: FieldValues) => {
    const sizeKey = data.size as ImageRatioKey;

    const promptData = {
      ...data,
      size: imageRatios[sizeKey],
    };

    setResult((prev) => ({ ...prev, loading: true, error: undefined }));

    try {
      const res = await generateImageService(promptData as IGenerateImageData);
      const imageLink = res.data.image;

      if (!res.success) {
        setResult((prev) => ({ ...prev, error: res.message }));
      }

      setResult((prev) => ({
        ...prev,
        link: imageLink,
        title: res.data.title,
        _id: res.data._id,
      }));
    } catch {
      setResult((prev) => ({
        ...prev,
        link: "",
        title: "",
        _id: "",
        error: "Something went wrong.Failed to generate image.",
      }));
    } finally {
      setResult((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Prompt Input Section */}
      <PromptForm onCreateImage={handleCreateImage} loading={result.loading} />
      {/* Preview Section */}
      <ImagePreview
        link={result.link}
        error={result.error}
        loading={result.loading}
        title={result.title}
        historyId={result._id}
      />
    </div>
  );
}
