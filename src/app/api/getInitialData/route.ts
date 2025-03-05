import { NextResponse } from "next/server";
import path from "path";
import * as XLSX from "xlsx";
import fs from "fs";

export const GET = () => {
  try {
    const filePath = path.resolve("./public/assets/csk_initial_data.xlsx");
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: "buffer" });

    const allSheetsData: { [key: string]: Record<string, unknown>[] } = {};

    workbook.SheetNames.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonData =
        XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet);
      allSheetsData[sheetName] = jsonData;
    });

    return new NextResponse(JSON.stringify(allSheetsData), { status: 200 });
  } catch (err) {
    return new NextResponse(
      JSON.stringify("Error reading Excel file: " + (err as Error).message),
      { status: 500 }
    );
  }
};
