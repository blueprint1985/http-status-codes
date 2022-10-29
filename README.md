# HTTP Status Codes

A simple library for using HTTP status codes

## Installation

Install it from [npm](https://github.com/npm/cli) and include it in your React build process (using [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/), etc):
```sh
npm install --save http-status-codes
```

## Usage

Most basic usage:
```ts
import HttpCode from "http-status-codes";

export const checkCode = (): boolean => {
    const httpCode: HttpCode = new HttpCode(200);
    const response: string = ... // Something that could be different

    if (response === "EMAIL_ALREADY_EXISTS") {
        httpCode.setCode(409);
    } else if (response === "USER_CREATED") {
        httpCode.setCode(201);
    }
    
    return httpCode.isSuccessful();
};
```

### HttpCodeModel

The model for a `HttpCode` looks like this:

```ts
export interface HttpCodeModel {
    code: number;
    key: string;
    message: string;
    type: codeType;
}
```
where `codeType` is one of:
- `"information"`
- `"successful"`
- `"redirection"`
- `"clientError"`
- `"serverError"`

**Example:**

```ts
{
    code: 403,
    key: "FORBIDDEN",
    message: "Forbidden",
    type: "clientError"
}
```

### Methods

**Instance methods:**

name | return type | description
--- | --- | ---
`getCode()` | HttpCodeModel | Returns the current code.
`setCode(x)` | void | Updates the current code. Takes a number as argument.
`getCodeNumber()` | number | Returns the current code's number.
`getCodeKey()` | string | Returns the current code's key.
`getCodeMessage()` | string | Returns the current code's Message.
`getCodeType()` | string | Returns the current code's type.
`isInformation()` | boolean | Returns `true` if the current code is of type "information".
`isRedirection()` | boolean | Returns `true` if the current code is of type "redirection".
`isSuccessful()` | boolean | Returns `true` if the current code is of type "successful".
`isClientError()` | boolean | Returns `true` if the current code is of type "clientError".
`isServerError()` | boolean | Returns `true` if the current code is of type "serverError".
`isError()` | boolean | Returns `true` if the current code is of type "clientError" or "serverError".

**Class methods:**

name | return type | description
--- | --- | ---
`HttpCode.getInformationCodes()` | HttpCodeModel[] | Returns an array of all "information" codes.
`HttpCode.getSuccessfulCodes()` | HttpCodeModel[] | Returns an array of all "redirection" codes.
`HttpCode.getRedirectionCodes()` | HttpCodeModel[] | Returns an array of all "successful" codes.
`HttpCode.getClientErrorCodes()` | HttpCodeModel[] | Returns an array of all "clientError" codes.
`HttpCode.getServerErrorCodes()` | HttpCodeModel[] | Returns an array of all "serverError" codes.