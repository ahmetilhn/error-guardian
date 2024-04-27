# Error Guardian 🪲

Error Guardian is a JavaScript module that listens to and handles errors occurring in the browser, allowing you to take necessary actions. It returns to you the errors it has made in detail. Send the processed error to a remote error server (sentry, graylog, etc.). 💪🏼

## Example Error Object

```json
{
  "errorId": "...f921d9-5d1...",
  "message": "Test Error",
  "stack": "Error: Test Error\n    at handleError ...",
  "errorType": "Uncaught Error",
  "url": "https://www.example.com/users",
  "isOriginDomain": true,
  "referrer": "https://www.example.com",
  "fileExtension": "js",
  "fileName": "bundle",
  "column": 13,
  "line": 86,
  "date": 1714230150550,
  "userAgent": "Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00"
}
```

## Installation

To add ErrorGuardian to your project, follow these steps:

1. Install the `error-guardian` package on npm 📦
2. Import to your file E.g: `error-handle.util.js`
3. That's it, now it's time to catch all the errors 💀

```javascript
import ErrorGuardian from "error-guardian";

// Create an instance of ErrorGuardian
const errorGuardian = new ErrorGuardian();
// Initialize the error listener
errorGuardian.init((parsedErrObj) => {
  // Perform error handling operations here
  // Choose your desired custom push or launch method ✅
  // Sentry.push(parsedErrObj)...
  // Graylog.push(parsedErrObj)...
  // FileSaver.save({fileName: parsedErrObj.errorId, content: parsedErrObj})...
  // console.error(parsedErrObj)...
});
const parsedErrObj = {
  errorId: "...f921d9-5d1...",
  message: "Test Error",
  stack: "Error: Test Error\n    at handleError ...",
  ....
}
```

## Configuration

```javascript
import ErrorGuardian from "error-guardian";

const errorGuardian = new ErrorGuardian({
  isWriteConsole: true, // default false
});
```

_created by Ahmet ilhan_
