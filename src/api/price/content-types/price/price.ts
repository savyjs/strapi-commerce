// Interface automatically generated by schemas-to-ts

export enum Unit {
  Item = 'item',
  Box = 'box',
  Hour = 'hour',
  Service = 'service',
  File = 'file',
  Other = 'other',}
export enum BulkStep {
  Step1 = 'step-1',}

export interface Price {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title: string;
    active: boolean;
    primary: boolean;
    quantity: number;
    sku: string;
    unit: Unit;
    multiple_currency: boolean;
    commission_rate?: number;
    retail_price?: number;
    retail_old_price?: number;
    tax?: number;
    taxable: boolean;
    min_allowed_order?: number;
    max_allowed_order?: number;
    bulk_step?: BulkStep;
    locale: string;
    localizations?: { data: Price[] };
  };
}
export interface Price_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  active: boolean;
  primary: boolean;
  quantity: number;
  sku: string;
  unit: Unit;
  multiple_currency: boolean;
  commission_rate?: number;
  retail_price?: number;
  retail_old_price?: number;
  tax?: number;
  taxable: boolean;
  min_allowed_order?: number;
  max_allowed_order?: number;
  bulk_step?: BulkStep;
  locale: string;
  localizations?: Price[];
}

export interface Price_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  active: boolean;
  primary: boolean;
  quantity: number;
  sku: string;
  unit: Unit;
  multiple_currency: boolean;
  commission_rate?: number;
  retail_price?: number;
  retail_old_price?: number;
  tax?: number;
  taxable: boolean;
  min_allowed_order?: number;
  max_allowed_order?: number;
  bulk_step?: BulkStep;
  locale: string;
  localizations?: Price[];
}

export interface Price_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title: string;
  active: boolean;
  primary: boolean;
  quantity: number;
  sku: string;
  unit: Unit;
  multiple_currency: boolean;
  commission_rate?: number;
  retail_price?: number;
  retail_old_price?: number;
  tax?: number;
  taxable: boolean;
  min_allowed_order?: number;
  max_allowed_order?: number;
  bulk_step?: BulkStep;
  locale: string;
  localizations?: Price[];
}