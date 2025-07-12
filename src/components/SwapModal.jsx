
// src/components/SwapModal.jsx
import { Dialog } from "@headlessui/react";
import { Button } from "../components/ui/button";

const SwapModal = ({ user, isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center px-4">
        <Dialog.Panel className="bg-white w-full max-w-md rounded-lg p-6 shadow-xl">
          <Dialog.Title className="text-lg font-bold mb-2">Confirm Swap</Dialog.Title>
          <Dialog.Description className="mb-4 text-sm text-gray-600">
            Are you sure you want to send a skill swap request to <strong>{user?.name}</strong>?
          </Dialog.Description>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button onClick={() => onConfirm(user)}>Confirm</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SwapModal;