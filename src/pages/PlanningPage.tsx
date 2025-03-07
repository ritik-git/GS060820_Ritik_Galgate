import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { PlanningData } from "../interfaces/Planning";
import { TextField, Button, Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import { RootState } from "../redux/store";
import { addPlanningData } from "../redux/planningSlice";

const PlanningPage: React.FC = () => {
  const dispatch = useDispatch();
  const planningData = useSelector((state: RootState) => state.planning.data);
  
  const [formData, setFormData] = useState<PlanningData>({ 
    storeId: "", 
    skuId: "", 
    salesUnits: 0, 
    salesDollars: 0, 
    gmDollars: 0, 
    gmPercentage: 0 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: name.includes("sales") || name.includes("gm") ? parseFloat(value) || 0 : value 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.storeId && formData.skuId) {
      dispatch(addPlanningData(formData));
      setFormData({ storeId: "", skuId: "", salesUnits: 0, salesDollars: 0, gmDollars: 0, gmPercentage: 0 });
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Planning Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Store ID"
          name="storeId"
          value={formData.storeId}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="SKU ID"
          name="skuId"
          value={formData.skuId}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Sales Units"
          name="salesUnits"
          type="number"
          value={formData.salesUnits}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Sales Dollars"
          name="salesDollars"
          type="number"
          value={formData.salesDollars}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Gross Margin Dollars"
          name="gmDollars"
          type="number"
          value={formData.gmDollars}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Gross Margin Percentage"
          name="gmPercentage"
          type="number"
          value={formData.gmPercentage}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Planning Data
        </Button>
      </form>
      <List>
        {planningData.map((item, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={`Store: ${item.storeId}, SKU: ${item.skuId}`} 
              secondary={`Sales Units: ${item.salesUnits}, Sales Dollars: $${item.salesDollars}, GM Dollars: $${item.gmDollars}, GM%: ${item.gmPercentage}%`} 
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PlanningPage;