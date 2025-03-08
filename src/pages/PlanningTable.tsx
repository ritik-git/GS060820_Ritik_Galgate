// import React, { useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import { ModuleRegistry } from "ag-grid-community";
// import { ClientSideRowModelModule } from "ag-grid-community";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// // Register required AG Grid modules
// ModuleRegistry.registerModules([ClientSideRowModelModule]);

// const initialRowData = [
//   { store: "Nashville Melody Music Store", sku: "Rugged Utility Jacket", week1SalesUnits: 200, week1SalesDollars: 8998, week1GMDollars: 8512, week1GMPercent: 94.6, week2SalesUnits: 0, week2SalesDollars: 0, week2GMDollars: 8512, week2GMPercent: 94.6 },
//   { store: "Chicago Charm Boutique", sku: "Floral Chiffon Wrap Dress", week1SalesUnits: 200, week1SalesDollars: 29998, week1GMDollars: 27689.6, week1GMPercent: 54.3, week2SalesUnits: 0, week2SalesDollars: 0, week2GMDollars: 27689.6, week2GMPercent: 54.3 },
//   { store: "Miami Breeze Apparel", sku: "Lace-Up Combat Boots", week1SalesUnits: 199, week1SalesDollars: 4973.01, week1GMDollars: 31.95, week1GMPercent: 0.6, week2SalesUnits: 14, week2SalesDollars: 349.86, week2GMDollars: 31.95, week2GMPercent: 0.6 },
// ];

// const columnDefs = [
//   { field: "store", headerName: "Store", pinned: "left", flex: 1 },
//   { field: "sku", headerName: "SKU", pinned: "left", flex: 1 },

//   {
//     headerName: "January", 
//     children: [
//       {
//         headerName: "Week 01",
//         children: [
//           { field: "week1SalesUnits", headerName: "Sales Units", type: "number", flex: 1 },
//           { field: "week1SalesDollars", headerName: "Sales Dollars", type: "number", flex: 1, valueFormatter: (params: { value: number }) => `$${params.value.toFixed(2)}` },
//           { field: "week1GMDollars", headerName: "GM Dollars", type: "number", flex: 1, valueFormatter: (params: { value: number }) => `$${params.value.toFixed(2)}` },
//           { 
//             field: "week1GMPercent", 
//             headerName: "GM Percent", 
//             type: "number", 
//             flex: 1,   
//             valueFormatter: (params: { value: number }) => `${params.value.toFixed(2)}%`, 
//             cellStyle: (params: { value: any }) => getColor(params.value) // ✅ Coloring GM Percent
//           },
//         ],
//       },
//       {
//         headerName: "Week 02",
//         children: [
//           { field: "week2SalesUnits", headerName: "Sales Units", type: "number", flex: 1 },
//           { field: "week2SalesDollars", headerName: "Sales Dollars", type: "number", flex: 1, valueFormatter: (params: { value: number }) => `$${params.value.toFixed(2)}` },
//           { field: "week2GMDollars", headerName: "GM Dollars", type: "number", flex: 1, valueFormatter: (params: { value: number }) => `$${params.value.toFixed(2)}` },
//           { 
//             field: "week2GMPercent", 
//             headerName: "GM Percent", 
//             type: "number", 
//             flex: 1, 
//             valueFormatter: (params: { value: number }) => `${params.value.toFixed(2)}%`, 
//             cellStyle: (params: { value: any }) => getColor(params.value) 
//           },
//         ],
//       },
//     ],
//   },
// ];

// // Function to color GM Percent column per row
// const getColor = (value?: number) => {
//   if (value === undefined) return {};
//   if (value >= 40) return { backgroundColor: "green", color: "white" };
//   if (value >= 10) return { backgroundColor: "yellow", color: "black" };
//   if (value > 5) return { backgroundColor: "orange", color: "black" };
//   return { backgroundColor: "red", color: "white" };
// };

// const PlanningTable: React.FC = () => {
//   const [rowData] = useState(initialRowData);

//   return (
//     <div className="ag-theme-alpine custom-grid" style={{ height: 500, width: "100%" }}>
//       <AgGridReact 
//         rowData={rowData} 
//         columnDefs={columnDefs} 
//         rowModelType="clientSide" 
//         domLayout="autoHeight"
//         gridOptions={{ enableCellTextSelection: true }}
//       />
//     </div>
//   );
// };

// export default PlanningTable;

import React from 'react'

function PlanningTable() {
  return (
    <div>PlanningTable</div>
  )
}

export default PlanningTable