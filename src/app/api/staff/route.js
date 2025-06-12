import { db } from "@/utils/dbConnectionString.js";

export async function GET() {
  const query = await db.query(`SELECT id, user_name FROM users`);
  return Response.json(query.rows);
}
