import { NextRequest, NextResponse } from "next/server";
import POSTS from "@/constants/FAKE_POSTS.json";

export async function GET(req: NextRequest) {
  try {
    const posts = JSON.parse(JSON.stringify(POSTS));
    const featuredPost = posts.slice(0, 1)?.[0];

    return NextResponse.json({
      featuredPost,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as any)?.message,
      },
      {
        status: 500,
      }
    );
  }
}
