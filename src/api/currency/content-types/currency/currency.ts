// Interface automatically generated by schemas-to-ts

export interface Currency {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    currency_id: string;
    currency_code: string;
    currency_name: string;
    currency_symbol: string;
    price_precision: number;
    currency_format: string;
    is_base_currency: boolean;
    locale: string;
    localizations?: { data: Currency[] };
  };
}
export interface Currency_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  currency_id: string;
  currency_code: string;
  currency_name: string;
  currency_symbol: string;
  price_precision: number;
  currency_format: string;
  is_base_currency: boolean;
  locale: string;
  localizations?: Currency[];
}

export interface Currency_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  currency_id: string;
  currency_code: string;
  currency_name: string;
  currency_symbol: string;
  price_precision: number;
  currency_format: string;
  is_base_currency: boolean;
  locale: string;
  localizations?: Currency[];
}

export interface Currency_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  currency_id: string;
  currency_code: string;
  currency_name: string;
  currency_symbol: string;
  price_precision: number;
  currency_format: string;
  is_base_currency: boolean;
  locale: string;
  localizations?: Currency[];
}
