import {
  getErrorFileExtension,
  getErrorFileName,
  getErrorOnOriginDomain,
  getErrorType,
} from "./helpers/error.helper";
import ErrorLayer from "./classes/ErrorLayer";
import { generateRandomId } from "./helpers/uuid.helper";

class ErrorGuardian {
  config = {
    isWriteConsole: false,
  };
  constructor(configProp = {}) {
    Object.assign(this.config, configProp);
  }
  listener(callback) {
    const errorLayer = new ErrorLayer();
    window.onerror = (event, source, lineno, colno, error) => {
      const _errObj = this.createErrorObj({
        event,
        source,
        lineno,
        colno,
        error,
      });
      if (this.config.isWriteConsole) {
        this.writeConsole(_errObj);
      }
      errorLayer.push(_errObj);
      return callback(_errObj);
    };
  }
  createErrorObj({ event, source, lineno, colno, error }) {
    return {
      errorId: generateRandomId(),
      message: error?.message,
      stack: error?.stack,
      errorType: getErrorType(event),
      url: window.location.href,
      isOriginDomain: getErrorOnOriginDomain(source),
      referrer: document.referrer,
      fileExtension: getErrorFileExtension(source),
      fileName: getErrorFileName(source),
      column: colno,
      line: lineno,
      date: new Date().getTime(),
      userAgent: window.navigator.userAgent,
    };
  }
  writeConsole(errObj) {
    console.error("🪲 Error caught by Error Guardian. Details below");
    console.table(errObj);
  }
  init(callback = () => {}) {
    window.errorLayer = [];
    this.listener(callback);
  }
}

export default ErrorGuardian;
