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
