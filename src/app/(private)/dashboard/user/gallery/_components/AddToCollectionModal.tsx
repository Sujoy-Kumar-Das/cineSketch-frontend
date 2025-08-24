"use client";

import Modal from "@/_components/shared/modal/Modal";
import { getAllCollectionByUserService } from "@/service/actions/collection.service";
import { useEffect, useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { toast } from "sonner";
import AddImageToCollectionForm from "./AddImageToCollectionForm";

interface ICollection {
  _id: string;
  title: string;
}

interface State {
  data: ICollection[];
  loading: boolean;
  error: string | null;
}

export default function AddToCollectionModal({
  _id,
  onClose,
}: {
  _id: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>({
    data: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchCollections = async () => {
      setState({ data: [], loading: true, error: null });
      try {
        const res = await getAllCollectionByUserService();
        setState({ data: res.data || [], loading: false, error: null });
      } catch (error) {
        console.error(error);
        setState({
          data: [],
          loading: false,
          error: "Failed to fetch collections.",
        });
        toast.error("Failed to fetch collections.");
      }
    };

    if (open) fetchCollections();
  }, [open]);

  const options = state.data.map((collection) => ({
    label: collection.title,
    value: collection._id,
  }));

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm flex items-center gap-2"
        onClick={() => setOpen(true)}
      >
        <FiFolderPlus size={16} /> Add to Collection
      </button>

      {open && (
        <Modal isOpen={open} onClose={() => setOpen(false)} size="sm">
          <AddImageToCollectionForm
            id={_id}
            onClose={handleClose}
            options={options}
            optionsLoading={state.loading}
          />
        </Modal>
      )}
    </>
  );
}
