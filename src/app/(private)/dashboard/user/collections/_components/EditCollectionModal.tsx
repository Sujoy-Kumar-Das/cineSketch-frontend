import Modal from "@/_components/shared/modal/Modal";
import { FieldValues } from "react-hook-form";
import z from "zod";
import CollectionForm from "./CollectionForm";

interface IEditCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FieldValues) => Promise<void>;
  defaultValues: { title: string };
  loading: boolean;
}

export default function EditCollectionModal({
  onClose,
  isOpen,
  onSubmit,
  defaultValues,
  loading,
}: IEditCollectionModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CollectionForm
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        schema={z.object({ title: z.string().min(1, "Title is required") })}
        isEdit={true}
        isLoading={loading}
        onClose={onClose}
      />
    </Modal>
  );
}
