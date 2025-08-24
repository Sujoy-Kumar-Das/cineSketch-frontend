"use client";

import Form from "@/_components/shared/form/Form";
import Select from "@/_components/shared/form/Select";
import { addImageToCollectionService } from "@/service/actions/collection.service";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export default function AddImageToCollectionForm({
  id,
  options,
  optionsLoading,
  onClose,
}: {
  id: string;
  options: { label: string; value: string }[];
  optionsLoading: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: FieldValues) => {
    try {
      setLoading(true);

      const res = await addImageToCollectionService(id, {
        collectionId: data.collection,
      });

      if (!res.success) {
        toast.error(res.message || "Failed to add in collection");
        return;
      }

      toast.success(res.message || "Added to collection successfully!");
      onClose();
    } catch {
      toast.error("Failed to add to collection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} defaultValues={{ collection: "" }}>
      <Select
        name="collection"
        label="Select Collection"
        placeholder={optionsLoading ? "Loading..." : "Choose a collection"}
        options={options}
      />

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm text-white"
        disabled={loading || optionsLoading || options.length === 0}
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </Form>
  );
}
