import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { company: string; file?: string[] } }
) {
  const { company, file } = params;

  const protectedFolders = ["api", "public", "src", "config", "scripts", "templates", "supabase", "cv", "docs", "prompts"];
  if (protectedFolders.includes(company)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const filename = file && file.length > 0 ? file.join("/") : "index.html";
  const filePath = path.join(process.cwd(), company, filename);

  try {
    const fileBuffer = await fs.readFile(filePath);
    
    const headers = new Headers();
    if (filename.endsWith(".html")) {
      headers.set("Content-Type", "text/html; charset=utf-8");
    } else if (filename.endsWith(".css")) {
      headers.set("Content-Type", "text/css");
    } else if (filename.endsWith(".js")) {
      headers.set("Content-Type", "application/javascript");
    }

    return new NextResponse(fileBuffer, { headers });
  } catch (error) {
    return new NextResponse("CV Pack File Not Found", { status: 404 });
  }
}
