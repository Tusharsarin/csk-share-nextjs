# CSK Share Data - Next.js Project

This Next.js project displays CSK share data by fetching information from an Excel file. It includes functionality to upload a new Excel file to update the data dynamically. Additionally, the project features an interest form where user inputs are reflected in a linked Google Sheet.

## Features

- **Display CSK Share Data:** Fetches data from an uploaded Excel file and displays it on the frontend.
- **Excel Upload Functionality:** Users can upload a new Excel file to update the share data dynamically.
- **Interest Form Integration:** Captures user interest and updates values in a Google Sheet in real time.

## Tech Stack

- **Frontend:** Next.js (React Framework)
- **Backend:** API routes in Next.js for handling file uploads and form submissions
- **Storage:** Excel file processing for data updates, Google Sheets API for storing form submissions

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (latest LTS version recommended)
- **npm** or **yarn** (for package management)
- **Google Sheets API access** (for integrating the interest form)

### Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file and add necessary credentials such as:

   ```env
   GOOGLE_SHEETS_API_KEY=<your_google_sheets_api_key>
   ```

4. **Run the development server**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   The application/CSK Share Page will be available at [http://localhost:3000/chennai-super-kings-csk-unlisted-shares](http://localhost:3000/chennai-super-kings-csk-unlisted-shares).
   
   Upload Form: [http://localhost:3000/uploadShareData](http://localhost:3000/uploadShareData).
   
   Google Sheet Link: [https://docs.google.com/spreadsheets/d/1bV69QAjClQ5uSgR_Avi-Mghj2r2HXd5QLwMEQpYfjFA/edit?gid=0#gid=0](https://docs.google.com/spreadsheets/d/1bV69QAjClQ5uSgR_Avi-Mghj2r2HXd5QLwMEQpYfjFA/edit?gid=0#gid=0).

   Sample Excel File: [https://github.com/Tusharsarin/csk-share-nextjs/blob/main/public/assets/csk_initial_data.xlsx](https://github.com/Tusharsarin/csk-share-nextjs/blob/main/public/assets/csk_initial_data.xlsx).
