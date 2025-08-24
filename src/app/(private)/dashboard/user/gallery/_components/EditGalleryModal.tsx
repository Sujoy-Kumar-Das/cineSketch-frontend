/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Form from "@/_components/shared/form/Form";
import Input from "@/_components/shared/form/Input";
import TextArea from "@/_components/shared/form/TextArea";
import Modal from "@/_components/shared/modal/Modal";
import useMenuContext from "@/hooks/useMenuContext";
import { editGalleryService } from "@/service/actions/gallery.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const validationSchema = z.object({
  title: z
    .string({ error: "Title is required" })
    .min(30, "Title should be minimum 30 characters")
    .max(50, "Title should be maximum 50 characters"),
  description: z
    .string({ error: "Description is required." })
    .min(50, "Description should be minimum 50 characters")
    .max(500, "Description should not exceed 500 characters"),
});

export default function EditGalleryModal({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { onMenuClick } = useMenuContext();

  const handleEditGallery = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      const res = await editGalleryService(
        id,
        data as { title: string; description: string }
      );

      if (!res.success) {
        toast.error(res.message || "Failed to edit gallery.");
        return;
      }

      toast.success("Gallery updated successfully!");
      setOpen(false);
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
      onMenuClick(null as any, id);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full text-left px-3 py-2 text-sm hover:bg-zinc-800 rounded-md"
      >
        Rename
      </button>

      {open && (
        <Modal isOpen onClose={() => setOpen(false)}>
          <Form
            onSubmit={handleEditGallery}
            defaultValues={{ title, description }}
            resolver={zodResolver(validationSchema)}
          >
            <Input
              name="title"
              label="Title"
              placeholder="Enter your title"
              size="medium"
              className="mb-3"
            />

            <TextArea
              name="description"
              label="Description"
              placeholder="Enter your description"
              className="mb-3"
            />

            <button
              type="submit"
              aria-label="Save Changes"
              className={`px-4 py-2 rounded-lg text-white ${
                isLoading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </Form>
        </Modal>
      )}
    </>
  );
}
