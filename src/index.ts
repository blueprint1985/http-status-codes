import { httpCodes } from "./codes";
import { HttpCodeModel } from "./interface";
import { codeType } from "./type";

export default class HttpCode {
    private code: HttpCodeModel;

    constructor(code: number) {
        const httpCode = httpCodes.filter((c: HttpCodeModel) => {
            return c.code === code;
        })[0];

        if (httpCode === undefined) {
            throw new Error("ER_UNKNOWN_HTTP_CODE");
        } else {
            this.code = httpCode;
        }
    }

    getCode(): HttpCodeModel {
        return this.code;
    }

    setCode(code: number) {
        const httpCode = httpCodes.filter((c: HttpCodeModel) => {
            return c.code === code;
        })[0];

        if (httpCode === undefined) {
            throw new Error("ER_UNKNOWN_HTTP_CODE");
        } else {
            this.code = httpCode;
        }
    }

    getCodeNumber(): number {
        return this.code.code;
    }

    getCodeKey(): string {
        return this.code.key;
    }

    getCodeMessage(): string {
        return this.code.message;
    }

    getCodeType(): codeType {
        return this.code.type;
    }

    isInformation(): boolean {
        return this.code.type === "information";
    }

    isRedirection(): boolean {
        return this.code.type === "redirection";
    }

    isSuccessful(): boolean {
        return this.code.type === "successful";
    }

    isClientError(): boolean {
        return this.code.type === "clientError";
    }

    isServerError(): boolean {
        return this.code.type === "serverError";
    }

    isError(): boolean {
        return this.isClientError() || this.isServerError();
    }

    static getInformationCodes(): HttpCodeModel[] {
        return httpCodes.filter((c: HttpCodeModel) => {
            c.type === "information";
        });
    }

    static getSuccessfulCodes(): HttpCodeModel[] {
        return httpCodes.filter((c: HttpCodeModel) => {
            c.type === "successful";
        });
    }

    static getRedirectionCodes(): HttpCodeModel[] {
        return httpCodes.filter((c: HttpCodeModel) => {
            c.type === "redirection";
        });
    }

    static getClientErrorCodes(): HttpCodeModel[] {
        return httpCodes.filter((c: HttpCodeModel) => {
            c.type === "clientError";
        });
    }

    static getServerErrorCodes(): HttpCodeModel[] {
        return httpCodes.filter((c: HttpCodeModel) => {
            c.type === "serverError";
        });
    }
}
