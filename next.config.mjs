/** @type {import('next').NextConfig} */
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  // ...
  cors: {
    allowedHeaders: ["Content-Type"],
    allowedMethods: ["GET", "POST"],
    allowedOrigins: [`*`], // API Repository's project
  },
};

export default nextConfig;
