class ErrorGuardian {
  listener() {
    window.onerror = (event, source, lineno, colno, error) => {
      console.log(event, source, lineno, colno, error);
    };
  }

  init() {
    this.listener();
  }
}

export default ErrorGuardian;
