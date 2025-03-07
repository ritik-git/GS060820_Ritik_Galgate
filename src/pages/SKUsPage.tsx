import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addSKU, removeSKU } from "../redux/skuSlice";
import { SKU } from "../interfaces/SKU";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Card, CardContent, Typography, List, ListItem, ListItemText, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const SKUsPage = () => {
  const dispatch = useAppDispatch();
  const skus = useAppSelector(state => state.skus.skus);
  const [skuName, setSkuName] = useState("");
  const [price, setPrice] = useState("");
  const [cost, setCost] = useState("");

  const handleAddSKU = () => {
    if (!skuName.trim() || !price || !cost) return;
    const newSKU: SKU = {
      id: uuidv4(),
      name: skuName,
      price: parseFloat(price),
      cost: parseFloat(cost),
    };
    dispatch(addSKU(newSKU));
    setSkuName("");
    setPrice("");
    setCost("");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 2 }}>
      <Typography variant="h4" gutterBottom>SKUs</Typography>
      <Card sx={{ p: 2, mb: 2 }}>
        <CardContent>
          <TextField
            fullWidth
            label="SKU Name"
            value={skuName}
            onChange={(e) => setSkuName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Cost"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddSKU} sx={{ mt: 2 }}>
            Add SKU
          </Button>
        </CardContent>
      </Card>
      <List>
        {skus.map((sku) => (
          <ListItem key={sku.id} secondaryAction={
            <IconButton edge="end" color="error" onClick={() => dispatch(removeSKU(sku.id))}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={sku.name} secondary={`Price: $${sku.price}, Cost: $${sku.cost}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SKUsPage;