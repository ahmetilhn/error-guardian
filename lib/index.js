import { createErrorObj } from "./helpers/error.helper";

class ErrorGuardian {
  config = {
    isWriteConsole: false,
  };
  constructor(configProp = {}) {
    Object.assign(this.config, configProp);
  }
  listener(callback) {
    window.onerror = (event, source, lineno, colno, error) => {
      const _errObj = createErrorObj({ event, source, lineno, colno, error });
      if (this.config.isWriteConsole) {
        this.writeConsole(_errObj);
      }
      return callback(_errObj);
    };
  }
  writeConsole(err) {
    console.error(err);
  }
  init(callback = () => {}) {
    this.listener(callback);
  }
}

export default ErrorGuardian;
