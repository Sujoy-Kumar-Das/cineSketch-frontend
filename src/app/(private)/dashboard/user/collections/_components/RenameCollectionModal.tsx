"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "@/_components/shared/modal/Modal";
import { FieldValues } from "react-hook-form";
import CollectionForm from "./CollectionForm";

export default function RenameCollectionModal({
  open,
  onClose,
  title,
  isLoading,
  schema,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  isLoading: boolean;
  schema: any;
  onSubmit: (data: FieldValues) => Promise<void>;
}) {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <CollectionForm
        defaultValues={{ title }}
        onClose={onClose}
        onSubmit={onSubmit}
        isEdit
        isLoading={isLoading}
        schema={schema}
      />
    </Modal>
  );
}
