import React from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { Sku } from "../interfaces/SKU";

interface SkuModalProps {
  open: boolean;
  onClose: () => void;
  sku: Sku | null;
  setSku: (sku: Sku) => void;
  onSave: () => void;
}

const SkuModal: React.FC<SkuModalProps> = ({ open, onClose, sku, setSku, onSave }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 4, backgroundColor: "white", margin: "auto", marginTop: "10%", width: 400 }}>
        <TextField 
          label="Label" 
          fullWidth 
          margin="dense" 
          value={sku?.Label || ""} 
          onChange={(e) => setSku({ ...sku!, Label: e.target.value })} 
        />
        <TextField 
          label="Class" 
          fullWidth 
          margin="dense" 
          value={sku?.Class || ""} 
          onChange={(e) => setSku({ ...sku!, Class: e.target.value })} 
        />
        <TextField 
          label="Department" 
          fullWidth 
          margin="dense" 
          value={sku?.Department || ""} 
          onChange={(e) => setSku({ ...sku!, Department: e.target.value })} 
        />
        <TextField 
          label="Price" 
          type="number" 
          fullWidth 
          margin="dense" 
          value={sku?.Price || ""} 
          onChange={(e) => setSku({ ...sku!, Price: parseFloat(e.target.value) || 0 })} 
        />
        <TextField 
          label="Cost" 
          type="number" 
          fullWidth 
          margin="dense" 
          value={sku?.Cost || ""} 
          onChange={(e) => setSku({ ...sku!, Cost: parseFloat(e.target.value) || 0 })} 
        />
        <Button variant="contained" onClick={onSave} sx={{ mt: 2 }}>Save</Button>
      </Box>
    </Modal>
  );
};

export default SkuModal;