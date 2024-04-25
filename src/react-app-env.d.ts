/// <reference types="react-scripts" />
declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            DATABASE_URL: string;
        }
    }
}

export {}