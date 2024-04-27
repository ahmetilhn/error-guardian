class ErrorLayer {
  push(err) {
    if (this.checkExistsErr(err.errorId)) return;
    window.errorLayer.push(err);
  }
  checkExistsErr(errorId) {
    return window.errorLayer.some((item) => item.errorId === errorId);
  }
}

export default ErrorLayer;
