import { HttpCodeModel } from "./interface";

export const httpCodes: HttpCodeModel[] = [
    {
      code: 100,
      key: "CONTINUE",
      message: "Continue",
      type: "information"
    },
    {
      code: 101,
      key: "SWITCHING_PROTOCOLS",
      message: "Switching Protocols",
      type: "information"
    },
    {
      code: 102,
      key: "PROCESSING",
      message: "Processing",
      type: "information"
    },
    {
      code: 103,
      key: "EARLY_HINTS",
      message: "Early Hints",
      type: "information"
    },
    {
      code: 200,
      key: "OK",
      message: "OK",
      type: "successful"
    },
    {
      code: 201,
      key: "CREATED",
      message: "Created",
      type: "successful"
    },
    {
      code: 202,
      key: "ACCEPTED",
      message: "Accepted",
      type: "successful"
    },
    {
      code: 203,
      key: "NON_AUTHORITATIVE_INFORMATION",
      message: "Non-Authoritative Information",
      type: "successful"
    },
    {
      code: 204,
      key: "NO_CONTENT",
      message: "No Content",
      type: "successful"
    },
    {
      code: 205,
      key: "RESET_CONTENT",
      message: "Reset Content",
      type: "successful"
    },
    {
      code: 206,
      key: "PARTIAL_CONTENT",
      message: "Partial Content",
      type: "successful"
    },
    {
      code: 207,
      key: "MULTI_STATUS",
      message: "Multi-Status",
      type: "successful"
    },
    {
      code: 208,
      key: "ALREADY_REPORTED",
      message: "Already Reported",
      type: "successful"
    },
    {
      code: 226,
      key: "IM_USED",
      message: "IM Used",
      type: "successful"
    },
    {
      code: 300,
      key: "MULTIPLE_CHOICES",
      message: "Multiple Choices",
      type: "redirection"
    },
    {
      code: 301,
      key: "MOVED_PERMANENTLY",
      message: "Moved Permanently",
      type: "redirection"
    },
    {
      code: 302,
      key: "FOUND",
      message: "Found",
      type: "redirection"
    },
    {
      code: 303,
      key: "SEE_OTHER",
      message: "See Other",
      type: "redirection"
    },
    {
      code: 304,
      key: "NOT_MODIFIED",
      message: "Not Modified",
      type: "redirection"
    },
    {
      code: 305,
      key: "USE_PROXY",
      message: "Use Proxy",
      type: "redirection"
    },
    {
      code: 307,
      key: "TEMPORARY_REDIRECT",
      message: "Temporary Redirect",
      type: "redirection"
    },
    {
      code: 308,
      key: "PERMANENT_REDIRECT",
      message: "Permanent Redirect",
      type: "redirection"
    },
    {
      code: 400,
      key: "BAD_REQUEST",
      message: "Bad Request",
      type: "clientError"
    },
    {
      code: 401,
      key: "UNAUTHORIZED",
      message: "Unauthorized",
      type: "clientError"
    },
    {
      code: 402,
      key: "PAYMENT_REQUIRED",
      message: "Payment Required",
      type: "clientError"
    },
    {
      code: 403,
      key: "FORBIDDEN",
      message: "Forbidden",
      type: "clientError"
    },
    {
      code: 404,
      key: "NOT_FOUND",
      message: "Not Found",
      type: "clientError"
    },
    {
      code: 405,
      key: "METHOD_NOT_ALLOWED",
      message: "Method Not Allowed",
      type: "clientError"
    },
    {
      code: 406,
      key: "NOT_ACCEPTABLE",
      message: "Not Acceptable",
      type: "clientError"
    },
    {
      code: 407,
      key: "PROXY_AUTHENTICATION_REQUIRED",
      message: "Proxy Authentication Required",
      type: "clientError"
    },
    {
      code: 408,
      key: "REQUEST_TIMEOUT",
      message: "Request Timeout",
      type: "clientError"
    },
    {
      code: 409,
      key: "CONFLICT",
      message: "Conflict",
      type: "clientError"
    },
    {
      code: 410,
      key: "GONE",
      message: "Gone",
      type: "clientError"
    },
    {
      code: 411,
      key: "LENGTH_REQUIRED",
      message: "Length Required",
      type: "clientError"
    },
    {
      code: 412,
      key: "PRECONDITION_FAILED",
      message: "Precondition Failed",
      type: "clientError"
    },
    {
      code: 413,
      key: "CONTENT_TOO_LARGE",
      message: "Content Too Large",
      type: "clientError"
    },
    {
      code: 414,
      key: "URI_TOO_LONG",
      message: "URI Too Long",
      type: "clientError"
    },
    {
      code: 415,
      key: "UNSUPPORTED_MEDIA_TYPE",
      message: "Unsupported Media Type",
      type: "clientError"
    },
    {
      code: 416,
      key: "RANGE_NOT_SATISFIABLE",
      message: "Range Not Satisfiable",
      type: "clientError"
    },
    {
      code: 417,
      key: "EXPECTATION_FAILED",
      message: "Expectation Failed",
      type: "clientError"
    },
    {
      code: 418,
      key: "IM_A_TEAPOT",
      message: "I'm A Teapot",
      type: "clientError"
    },
    {
      code: 421,
      key: "MISDIRECTED_REQUEST",
      message: "Misdirected Request",
      type: "clientError"
    },
    {
      code: 422,
      key: "UNPROCESSABLE_CONTENT",
      message: "Unprocessable Content",
      type: "clientError"
    },
    {
      code: 423,
      key: "LOCKED",
      message: "Locked",
      type: "clientError"
    },
    {
      code: 424,
      key: "FAILED_DEPENDENCY",
      message: "Failed Dependency",
      type: "clientError"
    },
    {
      code: 425,
      key: "TOO_EARLY",
      message: "Too Early",
      type: "clientError"
    },
    {
      code: 426,
      key: "UPGRADE_REQUIRED",
      message: "Upgrade Required",
      type: "clientError"
    },
    {
      code: 427,
      key: "UNASSIGNED",
      message: "Unassigned",
      type: "clientError"
    },
    {
      code: 428,
      key: "PRECONDITION_REQUIRED",
      message: "Precondition Required",
      type: "clientError"
    },
    {
      code: 429,
      key: "TOO_MANY_REQUESTS",
      message: "Too Many Requests",
      type: "clientError"
    },
    {
      code: 430,
      key: "UNASSIGNED",
      message: "Unassigned",
      type: "clientError"
    },
    {
      code: 431,
      key: "REQUEST_HEADER_FIELDS_TOO_LARGE",
      message: "Request Header Fields Too Large",
      type: "clientError"
    },
    {
      code: 451,
      key: "UNAVAILABLE_FOR_LEGAL_REASONS",
      message: "Unavailable For Legal Reasons",
      type: "clientError"
    },
    {
      code: 500,
      key: "INTERNAL_SERVER_ERROR",
      message: "Internal Server Error",
      type: "serverError"
    },
    {
      code: 501,
      key: "NOT_IMPLEMENTED",
      message: "Not Implemented",
      type: "serverError"
    },
    {
      code: 502,
      key: "BAD_GATEWAY",
      message: "Bad Gateway",
      type: "serverError"
    },
    {
      code: 503,
      key: "SERVICE_UNAVAILABLE",
      message: "Service Unavailable",
      type: "serverError"
    },
    {
      code: 504,
      key: "GATEWAY_TIMEOUT",
      message: "Gateway Timeout",
      type: "serverError"
    },
    {
      code: 505,
      key: "HTTP_VERSION_NOT_SUPPORTED",
      message: "HTTP Version Not Supported",
      type: "serverError"
    },
    {
      code: 506,
      key: "VARIANT_ALSO_NEGOTIATES",
      message: "Variant Also Negotiates",
      type: "serverError"
    },
    {
      code: 507,
      key: "INSUFFICIENT_STORAGE",
      message: "Insufficient Storage",
      type: "serverError"
    },
    {
      code: 508,
      key: "LOOP_DETECTED",
      message: "Loop Detected",
      type: "serverError"
    },
    {
      code: 509,
      key: "UNASSIGNED",
      message: "Unassigned",
      type: "serverError"
    },
    {
      code: 510,
      key: "NOT_EXTENDED",
      message: "Not Extended",
      type: "serverError"
    },
    {
      code: 511,
      key: "NETWORK_AUTHENTICATION_REQUIRED",
      message: "Network Authentication Required",
      type: "serverError"
    }
];
