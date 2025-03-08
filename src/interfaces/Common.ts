import { Sku } from "./SKU";

export interface CommonModalProps {
    open: boolean;
    handleClose: () => void;
    data?: any;
    type: "store" | "sku";
}

export interface PaginationProps {
    data: Sku[];
    rowsPerPage?: number;
  }

 export interface ChartData {
    week: string;
    gmDollars: number;
    gmPercent: number;
  }