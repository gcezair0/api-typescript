import { Logger } from '../logger/logger';

class ConsoleLogger implements Logger {
    info(message: string, ...args: any[]): void {
        console.info(`INFO: ${message}`, ...args);
    }

    warn(message: string, ...args: any[]): void {
        console.warn(`WARN: ${message}`, ...args);
    }

    error(message: string, ...args: any[]): void {
        console.error(`ERROR: ${message}`, ...args);
    }

    debug(message: string, ...args: any[]): void {
        console.debug(`DEBUG: ${message}`, ...args);
    }
}

export default ConsoleLogger;