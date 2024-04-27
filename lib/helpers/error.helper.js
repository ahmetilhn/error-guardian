import { FILE_REGEX } from "../constants/regex.constant";

export const getErrorFileExtension = (source) => {
  const errFile = getErrorFile(source);
  if (!Array.isArray(errFile)) return null;
  return errFile[2];
};
export const getErrorFileName = (source) => {
  const errFile = getErrorFile(source);
  if (!Array.isArray(errFile)) return null;
  return errFile[1];
};
const getErrorFile = (source) => {
  if (typeof source != "string") return null;
  return source.match(FILE_REGEX);
};
export const getErrorType = (event) => {
  if (typeof event != "string") return null;
  return event.split(":")[0];
};
export const getErrorOnOriginDomain = (source) => {
  try {
    const _url = new URL(source);
    return _url.origin === window.location.origin;
  } catch (err) {
    return false;
  }
};
