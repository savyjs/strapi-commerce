// Interface automatically generated by schemas-to-ts

export enum Status {
  Fulfilled = 'fulfilled',
  Pending = 'pending',
  Cancelled = 'cancelled',
  Shipped = 'shipped',}
export enum DiscountType {
  EntityLevel = 'entity_level',
  ItemLevel = 'item_level',
  OrderLevel = 'order_level',}

export interface Package {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    package_id: number;
    package_number: string;
    salesorder_id: number;
    salesorder_number: string;
    date: Date;
    status: Status;
    shipment_date?: Date;
    reference_number?: string;
    customer_id: number;
    customer_name: string;
    contact_persons?: any;
    currency_id: number;
    currency_code: string;
    currency_symbol: string;
    exchange_rate: number;
    discount_amount: number;
    discount: string;
    is_discount_before_tax: boolean;
    discount_type: DiscountType;
    estimate_id?: number;
    delivery_method?: string;
    delivery_method_id?: number;
    line_items: any;
    shipping_charge: number;
    adjustment: number;
    adjustment_description?: string;
    sub_total: number;
    tax_total: number;
    total: number;
    taxes: any;
    price_precision: number;
    pricebook_id?: number;
    shipping_address?: any;
    billing_address?: any;
    notes?: string;
    terms?: string;
    template_id?: number;
    template_name?: string;
    template_type?: string;
    created_time?: Date;
    last_modified_time?: Date;
    salesperson_id?: number;
    salesperson_name?: string;
    documents?: any;
    is_pre_gst?: boolean;
    gst_no?: string;
    gst_treatment?: string;
    place_of_supply?: string;
    locale: string;
    localizations?: { data: Package[] };
  };
}
export interface Package_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  package_id: number;
  package_number: string;
  salesorder_id: number;
  salesorder_number: string;
  date: Date;
  status: Status;
  shipment_date?: Date;
  reference_number?: string;
  customer_id: number;
  customer_name: string;
  contact_persons?: any;
  currency_id: number;
  currency_code: string;
  currency_symbol: string;
  exchange_rate: number;
  discount_amount: number;
  discount: string;
  is_discount_before_tax: boolean;
  discount_type: DiscountType;
  estimate_id?: number;
  delivery_method?: string;
  delivery_method_id?: number;
  line_items: any;
  shipping_charge: number;
  adjustment: number;
  adjustment_description?: string;
  sub_total: number;
  tax_total: number;
  total: number;
  taxes: any;
  price_precision: number;
  pricebook_id?: number;
  shipping_address?: any;
  billing_address?: any;
  notes?: string;
  terms?: string;
  template_id?: number;
  template_name?: string;
  template_type?: string;
  created_time?: Date;
  last_modified_time?: Date;
  salesperson_id?: number;
  salesperson_name?: string;
  documents?: any;
  is_pre_gst?: boolean;
  gst_no?: string;
  gst_treatment?: string;
  place_of_supply?: string;
  locale: string;
  localizations?: Package[];
}

export interface Package_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  package_id: number;
  package_number: string;
  salesorder_id: number;
  salesorder_number: string;
  date: Date;
  status: Status;
  shipment_date?: Date;
  reference_number?: string;
  customer_id: number;
  customer_name: string;
  contact_persons?: any;
  currency_id: number;
  currency_code: string;
  currency_symbol: string;
  exchange_rate: number;
  discount_amount: number;
  discount: string;
  is_discount_before_tax: boolean;
  discount_type: DiscountType;
  estimate_id?: number;
  delivery_method?: string;
  delivery_method_id?: number;
  line_items: any;
  shipping_charge: number;
  adjustment: number;
  adjustment_description?: string;
  sub_total: number;
  tax_total: number;
  total: number;
  taxes: any;
  price_precision: number;
  pricebook_id?: number;
  shipping_address?: any;
  billing_address?: any;
  notes?: string;
  terms?: string;
  template_id?: number;
  template_name?: string;
  template_type?: string;
  created_time?: Date;
  last_modified_time?: Date;
  salesperson_id?: number;
  salesperson_name?: string;
  documents?: any;
  is_pre_gst?: boolean;
  gst_no?: string;
  gst_treatment?: string;
  place_of_supply?: string;
  locale: string;
  localizations?: Package[];
}

export interface Package_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  package_id: number;
  package_number: string;
  salesorder_id: number;
  salesorder_number: string;
  date: Date;
  status: Status;
  shipment_date?: Date;
  reference_number?: string;
  customer_id: number;
  customer_name: string;
  contact_persons?: any;
  currency_id: number;
  currency_code: string;
  currency_symbol: string;
  exchange_rate: number;
  discount_amount: number;
  discount: string;
  is_discount_before_tax: boolean;
  discount_type: DiscountType;
  estimate_id?: number;
  delivery_method?: string;
  delivery_method_id?: number;
  line_items: any;
  shipping_charge: number;
  adjustment: number;
  adjustment_description?: string;
  sub_total: number;
  tax_total: number;
  total: number;
  taxes: any;
  price_precision: number;
  pricebook_id?: number;
  shipping_address?: any;
  billing_address?: any;
  notes?: string;
  terms?: string;
  template_id?: number;
  template_name?: string;
  template_type?: string;
  created_time?: Date;
  last_modified_time?: Date;
  salesperson_id?: number;
  salesperson_name?: string;
  documents?: any;
  is_pre_gst?: boolean;
  gst_no?: string;
  gst_treatment?: string;
  place_of_supply?: string;
  locale: string;
  localizations?: Package[];
}
