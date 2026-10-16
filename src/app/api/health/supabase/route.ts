import { supabaseAdmin } from "@/server/db/supabase";

export async function GET() {
  const { error } = await supabaseAdmin.auth.admin.listUsers({
    page: 1,
    perPage: 1,
  });

  if (error) {
    console.error("Supabase connection check failed:", error);

    return Response.json(
      {
        status: "error",
        message: "Could not connect to Supabase",
      },
      { status: 500 },
    );
  }

  return Response.json({
    status: "ok",
  });
}