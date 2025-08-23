"use client";
import Modal from "@/_components/shared/modal/Modal";
import { createCollectionService } from "@/service/actions/collection.service";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import CollectionForm from "./CollectionForm";

export default function CreateCollectionModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreateCollection = async (data: FieldValues) => {
    try {
      setLoading(true);
      const res = await createCollectionService({ title: data.title });

      if (!res.success) {
        toast.error(res.message || "Failed to create collection");
        return;
      }

      toast.success(res.message || "Collection created successfully");
      setOpen(false);
    } catch {
      toast.error("Something went wrong. Failed to create collection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen(true);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        {children}
      </div>

      {open && (
        <Modal isOpen onClose={() => setOpen(false)}>
          <CollectionForm
            onSubmit={handleCreateCollection}
            defaultValues={{ title: "" }}
            schema={z.object({ title: z.string().min(1, "Title is required") })}
            isEdit={false}
            isLoading={loading}
            onClose={() => setOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}
