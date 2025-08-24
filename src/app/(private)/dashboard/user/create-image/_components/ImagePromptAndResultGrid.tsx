"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  generateImageService,
  IGenerateImageData,
} from "@/service/actions/prompt.service";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import ImagePreviewActionButtons from "./ImagePreviewActionButtons";
import ImagePreviewHeader from "./ImagePreviewHeader";
import ImagePreviewResult from "./ImagePreviewResult";
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
    model: string;
  }>({
    link: "",
    title: "",
    loading: false,
    error: undefined,
    _id: "",
    model: "",
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
        model: res.data.model,
      }));
    } catch {
      setResult((prev) => ({
        ...prev,
        link: "",
        title: "",
        _id: "",
        model: "",
        error: "Something went wrong.Failed to generate image.",
      }));
    } finally {
      setResult((prev) => ({ ...prev, loading: false }));
    }
  };

  const { error, loading, link, title, model, _id } = result;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Prompt Input Section */}
      <PromptForm onCreateImage={handleCreateImage} loading={loading} />

      {/* Preview Section */}
      <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 md:p-6 h-full flex flex-col">
        {/* Header */}
        <ImagePreviewHeader />
        {/* Preview Area */}
        <ImagePreviewResult link={link} error={error} loading={loading} />

        {/* Action Buttons */}
        {link && !error && !loading && (
          <ImagePreviewActionButtons
            historyId={_id}
            link={link}
            title={title}
            model={model}
          />
        )}
      </div>
    </div>
  );
}
