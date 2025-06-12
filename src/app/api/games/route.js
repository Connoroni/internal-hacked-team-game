import { db } from "@/utils/dbConnectionString.js";

export async function GET() {
  const query = await db.query(`SELECT id, game_name FROM games`);
  return Response.json(query.rows);
}
