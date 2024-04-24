
import dotenv from 'dotenv';

dotenv.config();

interface ValidatedEnv {
    ACCESS_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRE: string;
    REFRESH_TOKEN_SECRET: string;
    REFRESH_TOKEN_EXPIRE: string;
    REFRESH_TOKEN_COOKIE_NAME: string;
}

export const validatedEnv: ValidatedEnv = {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'default_access_secret',
    ACCESS_TOKEN_EXPIRE: process.env.ACCESS_TOKEN_EXPIRE || '3600',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'default_refresh_secret',
    REFRESH_TOKEN_EXPIRE: process.env.REFRESH_TOKEN_EXPIRE || '604800',
    REFRESH_TOKEN_COOKIE_NAME: process.env.REFRESH_TOKEN_COOKIE_NAME || 'refreshToken'
};

export const config = {
    access_token: {
        secret: validatedEnv.ACCESS_TOKEN_SECRET,
        expire: validatedEnv.ACCESS_TOKEN_EXPIRE
    },
    refresh_token: {
        secret: validatedEnv.REFRESH_TOKEN_SECRET,
        expire: validatedEnv.REFRESH_TOKEN_EXPIRE,
        cookie_name: validatedEnv.REFRESH_TOKEN_COOKIE_NAME
    }
};
