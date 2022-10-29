import { codeType } from "./type";

export interface HttpCodeModel {
    code: number;
    key: string;
    message: string;
    type: codeType;
}