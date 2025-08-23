/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Form from "@/_components/shared/form/Form";
import Input from "@/_components/shared/form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";

interface CreateCollectionProps {
  onClose: () => void;
  defaultValues?: { title: string };
  schema?: any;
  isEdit?: boolean;
  isLoading?: boolean;
  onSubmit: (data: FieldValues) => Promise<void>;
}

export default function CollectionForm({
  onClose,
  defaultValues,
  schema,
  isEdit = false,
  isLoading = false,
  onSubmit,
}: CreateCollectionProps) {
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      resolver={zodResolver(schema)}
    >
      <Input
        name="title"
        label="Title*"
        size="medium"
        placeholder="Enter Your Collection Title"
        type="text"
      />

      <div className="flex justify-end gap-3 mt-5">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cancel"
          className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg"
          id="cancelBtn"
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          aria-label={isEdit ? "Save Changes" : "Create Collection"}
          className={`px-4 py-2 rounded-lg ${
            isLoading
              ? "bg-indigo-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
          disabled={isLoading}
        >
          {isEdit ? "Save Changes" : "Create Collection"}
        </button>
      </div>
    </Form>
  );
}
