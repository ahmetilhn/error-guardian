import { createErrorObj } from "./helpers/error.helper";
import ErrorLayer from "./classes/ErrorLayer";

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
      const _errObj = createErrorObj({ event, source, lineno, colno, error });
      if (this.config.isWriteConsole) {
        this.writeConsole(_errObj);
      }
      errorLayer.push(_errObj);
      return callback(_errObj);
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
