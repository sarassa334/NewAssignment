// connection with postgress
// Import PostgreSQL client and dotenv to manage environment variables
import pg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Destructure Pool constructor from pg module
const { Pool } = pg;

// Create a new pool using the connection string from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required if you're using services like Render or Heroku
  },
});

// Export the pool for use in other files (like controllers or routes)
export default pool;
 // بقدر اصدر من الفايل هاد اي اشي بدي ياه









