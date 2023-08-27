// Interface automatically generated by schemas-to-ts

export interface SpecificationGroup {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    active?: boolean;
    locale: string;
    localizations?: { data: SpecificationGroup[] };
  };
}
export interface SpecificationGroup_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  active?: boolean;
  locale: string;
  localizations?: SpecificationGroup[];
}

export interface SpecificationGroup_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  active?: boolean;
  locale: string;
  localizations?: SpecificationGroup[];
}

export interface SpecificationGroup_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  active?: boolean;
  locale: string;
  localizations?: SpecificationGroup[];
}