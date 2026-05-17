import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Vercel server talks to AWS backend safely on the server-side
    const response = await fetch("http://16.171.143.163:5000/api/users/check-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}