import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import * as XLSX from "xlsx";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import Csv from "../assets/GSIV25 - Sample Data.xlsx?url";

const CsvTable = () => {
  const [data, setData] = useState<{ id: string; label: string; city: string; state: string }[]>([]);

  useEffect(() => {
    fetch(Csv)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
        // Ensure the first row is the header, and map the rest
        if (parsedData.length > 1) {
          const formattedData = parsedData.slice(1).map((row) => ({
            id: row[1],       // "ID"
            label: row[2],    // "Label"
            city: row[3],     // "City"
            state: row[4],    // "State"
          }));
  
          setData(formattedData);
        }
      })
      .catch((err) => console.error("Error loading Excel file:", err));
  }, []);
      
  

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const reorderedData = [...data];
    const [movedItem] = reorderedData.splice(result.source.index, 1);
    reorderedData.splice(result.destination.index, 0, movedItem);
    setData(reorderedData);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Excel Data Table
      </Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tableRows">
          {(provided) => (
            <TableContainer component={Paper} ref={provided.innerRef} {...provided.droppableProps}>
              <Table>
                <TableHead>
                  <TableRow>
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
                          {...provided.dragHandleProps}
                          sx={{ backgroundColor: snapshot.isDragging ? "#f0f0f0" : "white" }}
                        >
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
    </Box>
  );
};

export default CsvTable;
