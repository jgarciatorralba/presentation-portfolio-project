import path from "path";

const apiUrl: string = process.env.API_URL || '';
const cacheLifetimeSeconds: number = parseInt(process.env.CACHE_LIFETIME_SECONDS || '0');
const clientApiUrl: string = process.env.NEXT_PUBLIC_API_URL || '';
const logFilePath: string = process.env.LOG_FILE_PATH || path.join(process.cwd(), 'logs', 'error.log');

export { apiUrl, cacheLifetimeSeconds, clientApiUrl, logFilePath };
