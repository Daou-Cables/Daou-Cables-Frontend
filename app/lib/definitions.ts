import { Url } from "next/dist/shared/lib/router/router";

export interface Category {
    name: string;
    products: string[];
}

export interface Contact {
    email: string[];
    phone: string[];
    address: string[];
    fax: string[];
    instagram: string;
    wechat: string[];
    facebook: string;
}

export interface Product {
    name: string;
    picture: string;
    description: string;
    ref?: string;
    categoryId?: string;
}

export interface Tab {
    title: string;
    link: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface ContactUsData {
    _id: string;
    email: string[];
    phone: string[];
    address: string[];
    fax: string[];
    instagram: Url;
    wechat: Url[];
    facebook: Url;
}

export interface Certificate {
    name: string;
    description: string;
    preview: string;
    file: string;
}
