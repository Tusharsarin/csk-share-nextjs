import { NextResponse } from "next/server";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
  activeTab: string;
};

export const POST = async (req: Request) => {
  try {
    const body: SheetForm = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name,
            body.email,
            body.phone,
            body.quantity,
            body.message,
            body.activeTab,
          ],
        ],
      },
    });

    return NextResponse.json(
      {
        data: response.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
