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
  const dispatch = useAppDispatch();
  const stores = useAppSelector((state) => state.stores.stores);
  const [storeName, setStoreName] = useState("");
  const [editingStore, setEditingStore] = useState<Store | null>(null);

  const handleAddStore = () => {
    if (!storeName.trim()) return;
    const newStore: Store = { id: uuidv4(), name: storeName };
    dispatch(addStore(newStore));
    setStoreName("");
  };

  const handleUpdateStore = () => {
    if (!editingStore) return;
    dispatch(updateStore(editingStore));
    setEditingStore(null);
  };

  const handleRemoveStore = (id: string) => {
    dispatch(removeStore(id));
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const updatedStores = [...stores];
    const [movedStore] = updatedStores.splice(result.source.index, 1);
    updatedStores.splice(result.destination.index, 0, movedStore);
    dispatch(reorderStores(updatedStores));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Stores
      </Typography>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          fullWidth
          label="Enter store name"
          variant="outlined"
          value={editingStore ? editingStore.name : storeName}
          onChange={(e) =>
            editingStore
              ? setEditingStore({ ...editingStore, name: e.target.value })
              : setStoreName(e.target.value)
          }
        />
        {editingStore ? (
          <Button variant="contained" color="primary" onClick={handleUpdateStore}>
            Update Store
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddStore}>
            Add Store
          </Button>
        )}
      </Box>
     <CsvTable/>
      {/* <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="storeList">
          {(provided) => (
            <List {...provided.droppableProps} ref={provided.innerRef} sx={{ width: "100%" }}>
              {stores.map((store, index) => (
                <Draggable key={store.id} draggableId={store.id} index={index}>
                  {(provided, snapshot) => (
                    <ListItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: snapshot.isDragging ? "#f0f0f0" : "white",
                        borderRadius: 1,
                        p: 1,
                        mb: 1,
                        boxShadow: 1,
                      }}
                      component={Paper}
                    >
                      <Box display="flex" alignItems="center">
                        <DragIndicatorIcon sx={{ cursor: "grab", mr: 1 }} />
                        <Typography>{store.name}</Typography>
                      </Box>

                      <Box>
                        <IconButton onClick={() => setEditingStore(store)} color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleRemoveStore(store.id)} color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext> */}
    </Box>
  );
};

export default StoresPage;
