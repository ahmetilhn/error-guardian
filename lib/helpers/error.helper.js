import { FILE_REGEX } from "../constants/regex.constant";
import { generateRandomId } from "./uuid.helper";

const getErrorFileExtension = (source) => {
  const errFile = getErrorFile(source);
  if (typeof errFile != "object") return null;
  return errFile[2];
};
const getErrorFileName = (source) => {
  const errFile = getErrorFile(source);
  if (typeof errFile != "object") return null;
  return errFile[1];
};
const getErrorFile = (source) => {
  if (typeof source != "string") return null;
  return source.match(FILE_REGEX);
};
const getErrorType = (event) => {
  if (typeof event != "string") return null;
  return event.split(":")[0];
};
const getErrorOnOriginDomain = (source) => {
  try {
    const _url = new URL(source);
    return _url.origin === window.location.origin;
  } catch (err) {
    return false;
  }
};
export const createErrorObj = ({ event, source, lineno, colno, error }) => {
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
};
