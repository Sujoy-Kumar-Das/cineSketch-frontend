/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import WarningModal from "@/_components/shared/modal/WarningModal";
import useMenuContext from "@/hooks/useMenuContext";
import { ICollection } from "@/interface/collections.interface";
import {
  deleteCollectionService,
  editCollectionService,
} from "@/service/actions/collection.service";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import CollectionCard from "./CollectionCard";
import EditCollectionModal from "./EditCollectionModal";

// types
type TModalType = "edit" | "delete" | null;
interface ISelectedItem {
  id: string;
  title?: string;
}

export default function CollectionCards({
  collections,
}: {
  collections: ICollection[];
}) {
  const { onMenuClick } = useMenuContext();
  const [modalType, setModalType] = useState<TModalType>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const [selectedItem, setSelectedItem] = useState<ISelectedItem | null>(null);

  // delete collection
  const handleDelete = async (id: string) => {
    try {
      setLoadingId(id);
      const res = await deleteCollectionService(id);

      if (!res.success) {
        toast.error(res.message || "Failed to delete collection");
        setLoadingId(null);
        return;
      }

      toast.success(res.message || "Collection deleted successfully");

      // close modals and menu
      handleModal(null, null);
      onMenuClick(null as any, "");
      setLoadingId(null);
    } catch {
      toast.error("Something went wrong. Failed to delete collection.");
      setLoadingId(null);
    }
  };

  // edit collection
  const handleEdit = async (id: string, data: FieldValues) => {
    try {
      setLoadingId(id);
      const res = await editCollectionService(id, data as { title: string });

      if (!res.success) {
        toast.error(res.message || "Failed to edit collection");
        setLoadingId(null);
        return;
      }

      toast.success(res.message || "Collection edited successfully");

      // close modals and menu
      handleModal(null, null);
      onMenuClick(null as any, "");
      setLoadingId(null);
    } catch {
      toast.error("Something went wrong. Failed to edit collection.");
      setLoadingId(null);
    }
  };

  // modal handler for edit and delete
  const handleModal = (
    type: TModalType,
    item: { id: string; title?: string } | null
  ) => {
    setModalType(type);
    setSelectedItem(item);
  };

  return (
    <>
      {collections.map((collection) => (
        <CollectionCard
          key={collection._id}
          collection={collection}
          onEditModal={() =>
            handleModal("edit", {
              id: collection._id,
              title: collection.title,
            })
          }
          onDeleteModal={() => handleModal("delete", { id: collection._id })}
        />
      ))}

      {/* modal for delete */}
      {modalType === "delete" && (
        <WarningModal
          isOpen
          title="Delete Collection"
          message="Are you sure you want to delete this collection? This action cannot be undone."
          onClose={() => handleModal(null, null)}
          onConfirm={() => {
            handleDelete(selectedItem!.id);
          }}
          loading={loadingId === selectedItem?.id}
        />
      )}

      {/* modal for edit  */}
      {modalType === "edit" && (
        <EditCollectionModal
          isOpen
          loading={selectedItem?.id === loadingId}
          onClose={() => handleModal(null, null)}
          defaultValues={{ title: selectedItem?.title || "" }}
          onSubmit={(data: FieldValues) => handleEdit(selectedItem!.id, data)}
        />
      )}
    </>
  );
}
