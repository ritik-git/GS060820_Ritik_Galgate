import { useState, Suspense, lazy } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from "@mui/material";
import { Delete, DragHandle, Edit } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeStore, reorderStores } from "../redux/storeSlice";
import { Store } from "../interfaces/Storetype";

import Loader from "./common/Loader";
const StoreModal = lazy(() => import("./StoreModal"));
import { toast } from "react-toastify";
const CsvTable = () => {
    const data = useAppSelector((state) => state.stores.stores);
    const dispatch = useAppDispatch();

    const [openModal, setOpenModal] = useState(false);
    const [editStore, setEditStore] = useState<Store | null>(null);

    const handleOpen = (store: Store | null = null) => {
        setEditStore(store);
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        setEditStore(null);
    };

    const handleDragEnd = (result: any) => {
        if (!result.destination) return;

        const reorderedData = [...data];
        const [movedItem] = reorderedData.splice(result.source.index, 1);
        reorderedData.splice(result.destination.index, 0, movedItem);

        dispatch(reorderStores(reorderedData));
    };

    const handleDeleteStore = (id: string) => {
        dispatch(removeStore(id));
        toast.info("Store deleted successfully!");
    };

    return (
        <Box sx={{ p: 3 }}>
            <Button variant="contained" color="primary" onClick={() => handleOpen()} sx={{ mb: 2 }}>
                Add Store
            </Button>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="tableRows" type="STORE">
                    {(provided) => (
                        <TableContainer component={Paper} ref={provided.innerRef} {...provided.droppableProps}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Action</TableCell>
                                        <TableCell>S.No</TableCell>
                                        <TableCell>Label</TableCell>
                                        <TableCell>City</TableCell>
                                        <TableCell>State</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((row, index) => (
                                        <Draggable key={row.id} draggableId={row.id} index={index}>
                                            {(provided, snapshot) => (
                                                <TableRow
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    sx={{ backgroundColor: snapshot.isDragging ? "#f0f0f0" : "white" }}
                                                >
                                                    <TableCell {...provided.dragHandleProps} sx={{ display: "flex", alignItems: "center" }}>
                                                        <DragHandle style={{ cursor: "grab" }} />
                                                        <IconButton color="error" onClick={() => handleDeleteStore(row.id)}>
                                                            <Delete />
                                                        </IconButton>
                                                        <IconButton color="primary" onClick={() => handleOpen(row)}>
                                                            <Edit />
                                                        </IconButton>
                                                    </TableCell>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{row.label}</TableCell>
                                                    <TableCell>{row.city}</TableCell>
                                                    <TableCell>{row.state}</TableCell>
                                                </TableRow>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Droppable>
            </DragDropContext>

            {openModal && (
                <Suspense fallback={<Loader />}>
                    <StoreModal open={openModal} handleClose={handleClose} storeData={editStore} />
                    
                </Suspense>
            )}
        </Box>
    );
};

export default CsvTable;
