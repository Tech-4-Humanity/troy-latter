// Production-safe logging utility
class Logger {
  private isDev = import.meta.env.DEV;

  log(...args: any[]) {
    if (this.isDev) {
      console.log(...args);
    }
  }

  error(...args: any[]) {
    if (this.isDev) {
      console.error(...args);
    }
  }

  warn(...args: any[]) {
    if (this.isDev) {
      console.warn(...args);
    }
  }

  debug(...args: any[]) {
    if (this.isDev) {
      console.debug(...args);
    }
  }
}

export const logger = new Logger();