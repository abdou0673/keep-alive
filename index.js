const sdk = require("node-appwrite");

const client = new sdk.Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69ffc4fa00041361f63e")
  .setKey(process.env.APPWRITE_API_KEY);

new sdk.Health(client).getDB()
  .then(() => console.log("✅ Appwrite is awake:", new Date().toISOString()))
  .catch(err => { console.error("❌ Failed:", err.message); process.exit(1); });
