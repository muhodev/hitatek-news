import { NextRequest, NextResponse } from "next/server";
import POSTS from "@/constants/FAKE_POSTS.json";

export async function GET(req: NextRequest) {
  try {
    const posts = JSON.parse(JSON.stringify(POSTS));
    const featuredPost = posts.slice(0, 1)?.[0];
    const popularPosts = posts.slice(1, 6);
    const topPosts = posts.slice(6, 9);
    const latestPosts = posts.slice(9, 14);
    const pickedPosts = posts.slice(14);

    return NextResponse.json({
      featuredPost,
      popularPosts,
      topPosts,
      latestPosts,
      pickedPosts,
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
