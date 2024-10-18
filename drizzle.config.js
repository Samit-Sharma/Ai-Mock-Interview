/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:rSg4hNuy9ioM@ep-long-thunder-a5jxk7gf.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };