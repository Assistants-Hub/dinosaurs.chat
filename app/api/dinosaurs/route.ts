import {NextRequest, NextResponse} from "next/server";
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest, res: NextResponse) {
    // Path to your JSON file, assuming you stored it in the `data` folder
    const filePath = path.join(process.cwd(), 'data', 'dinosaurs.json');

    // Read the file synchronously (you can also use async read with fs.promises.readFile)
    const jsonData = fs.readFileSync(filePath, 'utf8');

    // Parse the JSON data
    const data = JSON.parse(jsonData);

    // Return the data as JSON
    return Response.json(data, { status: 200 });
}