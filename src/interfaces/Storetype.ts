export interface Store {
  id: string; label: string; city: string; state: string
}

export interface StoreModalProps {
    open: boolean;
    handleClose: () => void;
    storeData?: Store | null;
}