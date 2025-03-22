import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});
interface User {
    google_id:string;
    username:string;
    email:string;
}

client.connect();

export async function saveUserToDatabase(user:User) {
  const { google_id, username, email } = user;
  const res = await client.query(
    'INSERT INTO users (google_id, username, email) VALUES ($1, $2, $3) ON CONFLICT (google_id) DO NOTHING',
    [google_id, username, email]
  );
  return res;
}
