import { NextRequest, NextResponse } from "next/server";
// import { wait } from "@/utils/helpers/wait";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase();

  const response = await fetch("http://localhost:3001/posts");
  let data: Post[] = await response.json();

  if (query) {
    data = data.filter((post) => post.title.toLowerCase().includes(query));
  }

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const post = await req.json();

  return NextResponse.json(post);
}
