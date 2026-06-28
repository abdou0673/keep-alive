const url = "https://fra.cloud.appwrite.io/v1/databases/shop_db/collections/site_config/documents?queries[]=limit(1)";

fetch(url, {
  headers: {
    "X-Appwrite-Project": "69ffc4fa00041361f63e",
    "X-Appwrite-Key": process.env.APPWRITE_API_KEY
  }
})
.then(res => res.json())
.then(() => console.log("✅ Appwrite is awake:", new Date().toISOString()))
.catch(err => { console.error("❌ Failed:", err.message); process.exit(1); });
