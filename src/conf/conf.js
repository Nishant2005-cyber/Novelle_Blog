const cleanEnv = (val) => {
    if (!val || val === 'undefined' || val === 'null') return '';
    return String(val).replace(/^["']|["']$/g, '').trim();
};

const conf = {
    appwriteUrl: cleanEnv(import.meta.env.VITE_APPWRITE_URL) || "https://cloud.appwrite.io/v1",
    appwriteProjectId: cleanEnv(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: cleanEnv(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: cleanEnv(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: cleanEnv(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;