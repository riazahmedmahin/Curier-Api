// app/config/config.js
export const PORT = 3000;
export const DATABASE= 'mongodb+srv://mahin:mahin123@cluster0.nv1ip.mongodb.net/curier?retryWrites=true&w=majority&appName=Cluster0'
export const JWT_KEY="ABC123";
export const JWT_EXPIRE_TIME = '1h'

export const EMAIL_HOST="mail.teamrabbil.com"
export const EMAIL_PORT=25
export const EMAIL_SECURITY=false
export const EMAIL_USER="info@teamrabbil.com"
export const EMAIL_PASS="~sR4[bhaC[Qs"
export const EMAIL_UN_AUTH=false

export const WEB_CASH = false;
export const MAX_JSON_SIZE = "10MB";
export const URL_AENCODE = true;

export const REQUEST_TIME = 20 * 60 * 1000;
export const REQUEST_NUMBER = 200; 

export const rateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000, // Limit each IP to 3000 requests per windowMs
  };