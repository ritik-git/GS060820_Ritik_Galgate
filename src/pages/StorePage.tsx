import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addStore, updateStore, removeStore, reorderStores } from "../redux/storeSlice";
import { Store } from "../interfaces/Storetype";
import { v4 as uuidv4 } from "uuid";
import { Box, TextField, Button, List, ListItem, IconButton, Typography, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CsvTable from "../components/CsvTable";

const StoresPage = () => {



  return (
    <Box sx={{ p: 3 }}>
     <CsvTable/>
    </Box>
  );
};

export default StoresPage;
