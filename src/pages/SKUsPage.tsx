import React, { useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addSku, removeSku, updateSku } from "../redux/skuSlice";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
  IconButton, Button, CircularProgress, Pagination 
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Sku } from "../interfaces/SKU";
import { toast } from "react-toastify";


const SkuModal = lazy(() => import("../components/SkuModal"));

const SKUsPage: React.FC = () => {
  const dispatch = useDispatch();
  const skus = useSelector((state: RootState) => state.skus.skus);

  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(skus.length / rowsPerPage);


  const [open, setOpen] = useState(false);
  const [currentSku, setCurrentSku] = useState<Sku | null>(null);

  const handleAdd = () => {
    setCurrentSku({ ID: `SK${Math.floor(Math.random() * 100000)}`, Label: "", Class: "", Department: "", Price: 0, Cost: 0 });
    setOpen(true);
  };

  const handleEdit = (sku: Sku) => {
    setCurrentSku(sku);
    setOpen(true);
 
  };

  const handleSave = () => {
    if (currentSku) {
      const existingSku = skus.find(sku => sku.ID === currentSku.ID);
      if (existingSku) {
        dispatch(updateSku(currentSku));
        toast.success('Sku updated successfully')
      } else {
        dispatch(addSku(currentSku));
        toast.success('Sku added successfully')
      }
      setOpen(false);
    }
  };
  

  // Handle page change
  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Paginate data
  const paginatedSkus = skus.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div>
      <Button variant="contained" sx={{ mb: "10px" }} onClick={handleAdd}>Add SKU</Button>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedSkus.map((sku) => (
              <TableRow key={sku.ID}>
                <TableCell>{sku.Label}</TableCell>
                <TableCell>{sku.Class}</TableCell>
                <TableCell>{sku.Department}</TableCell>
                <TableCell>${sku.Price.toFixed(2)}</TableCell>
                <TableCell>${sku.Cost.toFixed(2)}</TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => dispatch(removeSku(sku.ID))}>
                    <Delete />
                  </IconButton>
                  <IconButton color="primary" onClick={() => handleEdit(sku)}>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Component */}
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        />
      )}

      {/* Lazy Loaded Modal */}
      <Suspense fallback={<CircularProgress />}>
        {open && (
          <SkuModal 
            open={open} 
            onClose={() => setOpen(false)} 
            sku={currentSku} 
            setSku={setCurrentSku} 
            onSave={handleSave} 
          />
        )}
      </Suspense>
    </div>
  );
};

export default SKUsPage;
