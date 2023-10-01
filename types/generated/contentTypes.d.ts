import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginInvoiceInvoice extends Schema.CollectionType {
  collectionName: 'invoice';
  info: {
    singularName: 'invoice';
    pluralName: 'invoices';
    displayName: 'Invoice';
  };
  options: {
    draftAndPublish: true;
    comment: '';
  };
  attributes: {
    user_id: Attribute.Integer;
    store_id: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PluginUrlAliasPath extends Schema.CollectionType {
  collectionName: 'url_paths';
  info: {
    singularName: 'path';
    pluralName: 'paths';
    displayName: 'path';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    url_path: Attribute.String & Attribute.Required & Attribute.Unique;
    generated: Attribute.Boolean & Attribute.DefaultTo<true>;
    contenttype: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::url-alias.path',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::url-alias.path',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUrlAliasPattern extends Schema.CollectionType {
  collectionName: 'url_patterns';
  info: {
    singularName: 'pattern';
    pluralName: 'patterns';
    displayName: 'pattern';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    pattern: Attribute.String & Attribute.Required;
    code: Attribute.String & Attribute.Required & Attribute.Unique;
    contenttype: Attribute.String & Attribute.Required;
    languages: Attribute.JSON & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::url-alias.pattern',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::url-alias.pattern',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PluginCommentsComment extends Schema.CollectionType {
  collectionName: 'comments_comment';
  info: {
    tableName: 'plugin-comments-comments';
    singularName: 'comment';
    pluralName: 'comments';
    displayName: 'Comment';
    description: 'Comment content type';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text & Attribute.Required;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    blockedThread: Attribute.Boolean & Attribute.DefaultTo<false>;
    blockReason: Attribute.String;
    authorUser: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    authorId: Attribute.String;
    authorName: Attribute.String;
    authorEmail: Attribute.Email;
    authorAvatar: Attribute.String;
    isAdminComment: Attribute.Boolean;
    removed: Attribute.Boolean;
    approvalStatus: Attribute.String;
    related: Attribute.String;
    reports: Attribute.Relation<
      'plugin::comments.comment',
      'oneToMany',
      'plugin::comments.comment-report'
    >;
    threadOf: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'plugin::comments.comment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::comments.comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginCommentsCommentReport extends Schema.CollectionType {
  collectionName: 'comments_comment-report';
  info: {
    tableName: 'plugin-comments-reports';
    singularName: 'comment-report';
    pluralName: 'comment-reports';
    displayName: 'Reports';
    description: 'Reports content type';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    content: Attribute.Text;
    reason: Attribute.Enumeration<['BAD_LANGUAGE', 'DISCRIMINATION', 'OTHER']> &
      Attribute.Required &
      Attribute.DefaultTo<'OTHER'>;
    resolved: Attribute.Boolean & Attribute.DefaultTo<false>;
    related: Attribute.Relation<
      'plugin::comments.comment-report',
      'manyToOne',
      'plugin::comments.comment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::comments.comment-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::comments.comment-report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAddressAddress extends Schema.CollectionType {
  collectionName: 'addresses';
  info: {
    singularName: 'address';
    pluralName: 'addresses';
    displayName: 'Address';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    street_address1: Attribute.String & Attribute.Required;
    street_address2: Attribute.String & Attribute.Required;
    city: Attribute.String & Attribute.Required;
    state: Attribute.String & Attribute.Required;
    country: Attribute.String & Attribute.Required;
    zip: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::address.address',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::address.address',
      'oneToMany',
      'api::address.address'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAttributeAttribute extends Schema.CollectionType {
  collectionName: 'attributes';
  info: {
    singularName: 'attribute';
    pluralName: 'attributes';
    displayName: 'Attribute';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    code: Attribute.String;
    type: Attribute.String;
    validation: Attribute.String;
    is_required: Attribute.Boolean;
    active: Attribute.Boolean;
    is_unique: Attribute.Boolean;
    is_filterable: Attribute.Boolean;
    is_visible: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::attribute.attribute',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::attribute.attribute',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAttributeFamilyAttributeFamily
  extends Schema.CollectionType {
  collectionName: 'attribute_families';
  info: {
    singularName: 'attribute-family';
    pluralName: 'attribute-families';
    displayName: 'Attribute family';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    meta: Attribute.JSON &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    store: Attribute.Relation<
      'api::attribute-family.attribute-family',
      'oneToOne',
      'api::store.store'
    >;
    user: Attribute.Relation<
      'api::attribute-family.attribute-family',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    attribute_groups: Attribute.Relation<
      'api::attribute-family.attribute-family',
      'manyToMany',
      'api::attribute-group.attribute-group'
    >;
    code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::attribute-family.attribute-family',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::attribute-family.attribute-family',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::attribute-family.attribute-family',
      'oneToMany',
      'api::attribute-family.attribute-family'
    >;
    locale: Attribute.String;
  };
}

export interface ApiAttributeGroupAttributeGroup extends Schema.CollectionType {
  collectionName: 'attribute_groups';
  info: {
    singularName: 'attribute-group';
    pluralName: 'attribute-groups';
    displayName: 'Attribute group';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    description: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    attribute_families: Attribute.Relation<
      'api::attribute-group.attribute-group',
      'manyToMany',
      'api::attribute-family.attribute-family'
    >;
    store: Attribute.Relation<
      'api::attribute-group.attribute-group',
      'oneToOne',
      'api::store.store'
    >;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    users_permissions_user: Attribute.Relation<
      'api::attribute-group.attribute-group',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::attribute-group.attribute-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::attribute-group.attribute-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::attribute-group.attribute-group',
      'oneToMany',
      'api::attribute-group.attribute-group'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBranchBranch extends Schema.CollectionType {
  collectionName: 'branches';
  info: {
    singularName: 'branch';
    pluralName: 'branches';
    displayName: 'Branch';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    full_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    organization: Attribute.Relation<
      'api::branch.branch',
      'manyToOne',
      'api::organization.organization'
    >;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    is_default: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    country: Attribute.Relation<
      'api::branch.branch',
      'oneToOne',
      'api::country.country'
    >;
    logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    address: Attribute.Relation<
      'api::branch.branch',
      'oneToOne',
      'api::address.address'
    >;
    owner: Attribute.Relation<
      'api::branch.branch',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::branch.branch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::branch.branch',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::branch.branch',
      'oneToMany',
      'api::branch.branch'
    >;
    locale: Attribute.String;
  };
}

export interface ApiBrandBrand extends Schema.CollectionType {
  collectionName: 'brands';
  info: {
    singularName: 'brand';
    pluralName: 'brands';
    displayName: 'Brand';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    full_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    images: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    store: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'api::store.store'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::brand.brand',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::brand.brand',
      'oneToMany',
      'api::brand.brand'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCartCart extends Schema.CollectionType {
  collectionName: 'carts';
  info: {
    singularName: 'cart';
    pluralName: 'carts';
    displayName: 'Cart';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    total_price: Attribute.Float & Attribute.Required;
    quantity: Attribute.Integer & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::cart.cart',
      'oneToMany',
      'api::cart.cart'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCartItemCartItem extends Schema.CollectionType {
  collectionName: 'cart_items';
  info: {
    singularName: 'cart-item';
    pluralName: 'cart-items';
    displayName: 'CartItem';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    quantity: Attribute.Integer & Attribute.Required;
    label_price: Attribute.Float & Attribute.Required;
    total_price: Attribute.Float & Attribute.Required;
    discount_amount: Attribute.Float & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::cart-item.cart-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::cart-item.cart-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::cart-item.cart-item',
      'oneToMany',
      'api::cart-item.cart-item'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories';
  info: {
    singularName: 'category';
    pluralName: 'categories';
    displayName: 'Category';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tax_id: Attribute.Integer & Attribute.Required;
    active: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    sort_by_options: Attribute.JSON & Attribute.DefaultTo<[]>;
    bread_crumbs: Attribute.JSON & Attribute.DefaultTo<[]>;
    specifications: Attribute.JSON & Attribute.DefaultTo<[]>;
    parent_id: Attribute.String & Attribute.Required;
    items: Attribute.JSON & Attribute.DefaultTo<[]>;
    number_columns: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<2>;
    order: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::category.category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCollectionCollection extends Schema.CollectionType {
  collectionName: 'collections';
  info: {
    singularName: 'collection';
    pluralName: 'collections';
    displayName: 'Collection';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tax_id: Attribute.Integer & Attribute.Required;
    is_selected: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    active: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    visibility: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    sort_by_options: Attribute.JSON & Attribute.DefaultTo<[]>;
    bread_crumbs: Attribute.JSON & Attribute.DefaultTo<[]>;
    specifications: Attribute.JSON & Attribute.DefaultTo<[]>;
    parent_id: Attribute.String & Attribute.Required;
    items: Attribute.JSON & Attribute.DefaultTo<[]>;
    number_columns: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<2>;
    order: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::collection.collection',
      'oneToMany',
      'api::collection.collection'
    >;
    locale: Attribute.String;
  };
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: 'contacts';
  info: {
    singularName: 'contact';
    pluralName: 'contacts';
    displayName: 'Contact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    contact_id: Attribute.String & Attribute.Required;
    contact_name: Attribute.String & Attribute.Required;
    company_name: Attribute.String;
    has_transaction: Attribute.Boolean;
    contact_type: Attribute.Enumeration<['customer', 'vendor']>;
    is_linked_with_zohocrm: Attribute.Boolean;
    website: Attribute.String;
    primary_contact_id: Attribute.String;
    payment_terms: Attribute.Integer;
    payment_terms_label: Attribute.String;
    currency_id: Attribute.String;
    currency_code: Attribute.String;
    currency_symbol: Attribute.String;
    language_code: Attribute.Enumeration<
      ['de', 'en', 'es', 'fr', 'it', 'ja', 'nl', 'pt', 'sv', 'zh']
    >;
    outstanding_receivable_amount: Attribute.Integer;
    outstanding_receivable_amount_bcy: Attribute.Integer;
    unused_credits_receivable_amount: Attribute.Integer;
    unused_credits_receivable_amount_bcy: Attribute.Integer;
    status: Attribute.String;
    payment_reminder_enabled: Attribute.Boolean;
    notes: Attribute.String;
    created_time: Attribute.DateTime;
    last_modified_time: Attribute.DateTime;
    is_taxable: Attribute.Boolean;
    tax_id: Attribute.String;
    tax_name: Attribute.String;
    tax_percentage: Attribute.Float;
    tax_authority_id: Attribute.String;
    tax_exemption_id: Attribute.String;
    tax_authority_name: Attribute.String;
    tax_exemption_code: Attribute.String;
    place_of_contact: Attribute.String;
    tax_treatment: Attribute.String;
    tax_regime: Attribute.String;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact.contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::contact.contact',
      'oneToMany',
      'api::contact.contact'
    >;
    locale: Attribute.String;
  };
}

export interface ApiContactPersonContactPerson extends Schema.CollectionType {
  collectionName: 'contact_persons';
  info: {
    singularName: 'contact-person';
    pluralName: 'contact-persons';
    displayName: 'Contact Person';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    contact_id: Attribute.String & Attribute.Required;
    contact_person_id: Attribute.String & Attribute.Required;
    salutation: Attribute.String;
    first_name: Attribute.String;
    last_name: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    mobile: Attribute.String;
    is_primary_contact: Attribute.Boolean;
    skype: Attribute.String;
    designation: Attribute.String;
    department: Attribute.String;
    is_added_in_portal: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-person.contact-person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::contact-person.contact-person',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::contact-person.contact-person',
      'oneToMany',
      'api::contact-person.contact-person'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCountryCountry extends Schema.CollectionType {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'country';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    code: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    icon: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::country.country',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::country.country',
      'oneToMany',
      'api::country.country'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCouponCoupon extends Schema.CollectionType {
  collectionName: 'coupons';
  info: {
    singularName: 'coupon';
    pluralName: 'coupons';
    displayName: 'Coupon';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    is_enabled: Attribute.Boolean & Attribute.Required;
    coupon_code: Attribute.String & Attribute.Required;
    discount: Attribute.String & Attribute.Required;
    discount_type: Attribute.Enumeration<['flat', 'percentage']> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::coupon.coupon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::coupon.coupon',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::coupon.coupon',
      'oneToMany',
      'api::coupon.coupon'
    >;
    locale: Attribute.String;
  };
}

export interface ApiCurrencyCurrency extends Schema.CollectionType {
  collectionName: 'currencies';
  info: {
    singularName: 'currency';
    pluralName: 'currencies';
    displayName: 'Currency';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    currency_id: Attribute.String & Attribute.Required;
    currency_code: Attribute.String & Attribute.Required;
    currency_name: Attribute.String & Attribute.Required;
    currency_symbol: Attribute.String & Attribute.Required;
    price_precision: Attribute.Integer & Attribute.Required;
    currency_format: Attribute.String & Attribute.Required;
    is_base_currency: Attribute.Boolean & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::currency.currency',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::currency.currency',
      'oneToMany',
      'api::currency.currency'
    >;
    locale: Attribute.String;
  };
}

export interface ApiInvoiceInvoice extends Schema.CollectionType {
  collectionName: 'invoices';
  info: {
    singularName: 'invoice';
    pluralName: 'invoices';
    displayName: 'Invoice';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    invoice_number: Attribute.String & Attribute.Required;
    reference_number: Attribute.String;
    template_id: Attribute.Integer;
    date: Attribute.Date;
    payment_terms: Attribute.Integer;
    payment_terms_label: Attribute.String;
    due_date: Attribute.Date;
    discount: Attribute.Float;
    is_discount_before_tax: Attribute.Boolean;
    discount_type: Attribute.String;
    is_inclusive_tax: Attribute.Boolean;
    exchange_rate: Attribute.Float;
    recurring_invoice_id: Attribute.String;
    custom_fields: Attribute.JSON;
    project_id: Attribute.String;
    line_items: Attribute.JSON;
    payment_options: Attribute.JSON;
    allow_partial_payments: Attribute.Boolean;
    custom_body: Attribute.Text;
    custom_subject: Attribute.String;
    notes: Attribute.Text;
    terms: Attribute.Text;
    shipping_charge: Attribute.Float;
    adjustment: Attribute.Float;
    adjustment_description: Attribute.String;
    reason: Attribute.String;
    tax_treatment: Attribute.String;
    place_of_supply: Attribute.String;
    billing_address: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'api::address.address'
    >;
    shipping_address: Attribute.Relation<
      'api::invoice.invoice',
      'oneToMany',
      'api::address.address'
    >;
    estimate: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'api::invoice.invoice'
    >;
    user: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::invoice.invoice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiLineitemLineitem extends Schema.CollectionType {
  collectionName: 'lineitems';
  info: {
    singularName: 'lineitem';
    pluralName: 'lineitems';
    displayName: 'lineitem';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    item_id: Attribute.Integer & Attribute.Required;
    line_item_id: Attribute.Integer & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    item_order: Attribute.Integer;
    bcy_rate: Attribute.Float & Attribute.Required;
    rate: Attribute.Float & Attribute.Required;
    quantity: Attribute.Integer & Attribute.Required;
    quantity_invoiced: Attribute.Integer & Attribute.Required;
    quantity_packed: Attribute.Integer & Attribute.Required;
    quantity_shipped: Attribute.Integer & Attribute.Required;
    unit: Attribute.String & Attribute.Required;
    tax_id: Attribute.Integer & Attribute.Required;
    tds_tax_id: Attribute.String;
    tax_name: Attribute.String & Attribute.Required;
    tax_type: Attribute.String & Attribute.Required;
    tax_percentage: Attribute.Float & Attribute.Required;
    item_total: Attribute.Float & Attribute.Required;
    is_invoiced: Attribute.Boolean & Attribute.Required;
    image_id: Attribute.Integer;
    image_name: Attribute.String;
    image_type: Attribute.String;
    warehouse_id: Attribute.Integer & Attribute.Required;
    hsn_or_sac: Attribute.Integer & Attribute.Required;
    sat_item_key_code: Attribute.Integer & Attribute.Required;
    unitkey_code: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lineitem.lineitem',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lineitem.lineitem',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::lineitem.lineitem',
      'oneToMany',
      'api::lineitem.lineitem'
    >;
    locale: Attribute.String;
  };
}

export interface ApiOrderOrder extends Schema.CollectionType {
  collectionName: 'orders';
  info: {
    singularName: 'order';
    pluralName: 'orders';
    displayName: 'order';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    salesorder_id: Attribute.BigInteger;
    salesorder_number: Attribute.String;
    date: Attribute.Date;
    status: Attribute.Enumeration<['fulfilled', 'processing', 'cancelled']>;
    shipment_date: Attribute.Date;
    reference_number: Attribute.String;
    customer_id: Attribute.BigInteger;
    customer_name: Attribute.String;
    contact_persons: Attribute.JSON;
    currency_id: Attribute.BigInteger;
    currency_code: Attribute.String;
    currency_symbol: Attribute.String;
    exchange_rate: Attribute.Decimal;
    discount_amount: Attribute.Decimal;
    discount: Attribute.String;
    is_discount_before_tax: Attribute.Boolean;
    discount_type: Attribute.Enumeration<['entity_level', 'item_level']>;
    estimate_id: Attribute.BigInteger;
    delivery_method: Attribute.String;
    delivery_method_id: Attribute.BigInteger;
    line_items: Attribute.JSON;
    shipping_charge: Attribute.Decimal;
    adjustment: Attribute.Decimal;
    adjustment_description: Attribute.String;
    sub_total: Attribute.Decimal;
    tax_total: Attribute.Decimal;
    total: Attribute.Decimal;
    taxes: Attribute.JSON;
    price_precision: Attribute.Integer;
    pricebook_id: Attribute.BigInteger;
    shipping_address: Attribute.JSON;
    billing_address: Attribute.JSON;
    notes: Attribute.String;
    terms: Attribute.String;
    template_id: Attribute.BigInteger;
    template_name: Attribute.String;
    template_type: Attribute.String;
    created_time: Attribute.DateTime;
    last_modified_time: Attribute.DateTime;
    salesperson_id: Attribute.BigInteger;
    salesperson_name: Attribute.String;
    documents: Attribute.JSON;
    is_pre_gst: Attribute.Boolean;
    gst_no: Attribute.String;
    gst_treatment: Attribute.String;
    place_of_supply: Attribute.String;
    contacts: Attribute.Relation<
      'api::order.order',
      'oneToMany',
      'api::contact-person.contact-person'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::order.order',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::order.order',
      'oneToMany',
      'api::order.order'
    >;
    locale: Attribute.String;
  };
}

export interface ApiOrganizationOrganization extends Schema.CollectionType {
  collectionName: 'organizations';
  info: {
    singularName: 'organization';
    pluralName: 'organizations';
    displayName: 'Organization';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    organization_id: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    is_default_org: Attribute.Boolean & Attribute.Required;
    user_role: Attribute.String;
    time_zone: Attribute.String & Attribute.Required;
    language_code: Attribute.String & Attribute.Required;
    date_format: Attribute.String & Attribute.Required;
    field_separator: Attribute.String & Attribute.Required;
    fiscal_year_start_month: Attribute.Integer & Attribute.Required;
    tax_group_enabled: Attribute.Boolean & Attribute.Required;
    industry_type: Attribute.String & Attribute.Required;
    stage: Attribute.Enumeration<['Development', 'Test', 'Production']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'Production'>;
    full_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    owner: Attribute.Relation<
      'api::organization.organization',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    images: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    members: Attribute.Relation<
      'api::organization.organization',
      'manyToMany',
      'plugin::users-permissions.user'
    >;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    has_branch: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<false>;
    branches: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::branch.branch'
    >;
    currencies: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::currency.currency'
    >;
    warehouses: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::warehouse.warehouse'
    >;
    vendors: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::vendor.vendor'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::organization.organization',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::organization.organization',
      'oneToMany',
      'api::organization.organization'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPackagePackage extends Schema.CollectionType {
  collectionName: 'packages';
  info: {
    singularName: 'package';
    pluralName: 'packages';
    displayName: 'package';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    package_id: Attribute.Integer & Attribute.Required;
    package_number: Attribute.String & Attribute.Required;
    salesorder_id: Attribute.Integer & Attribute.Required;
    salesorder_number: Attribute.String & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    status: Attribute.Enumeration<
      ['fulfilled', 'pending', 'cancelled', 'shipped']
    > &
      Attribute.Required;
    shipment_date: Attribute.Date;
    reference_number: Attribute.String;
    customer_id: Attribute.Integer & Attribute.Required;
    customer_name: Attribute.String & Attribute.Required;
    contact_persons: Attribute.JSON;
    currency_id: Attribute.Integer & Attribute.Required;
    currency_code: Attribute.String & Attribute.Required;
    currency_symbol: Attribute.String & Attribute.Required;
    exchange_rate: Attribute.Float & Attribute.Required;
    discount_amount: Attribute.Float & Attribute.Required;
    discount: Attribute.String & Attribute.Required;
    is_discount_before_tax: Attribute.Boolean & Attribute.Required;
    discount_type: Attribute.Enumeration<
      ['entity_level', 'item_level', 'order_level']
    > &
      Attribute.Required;
    estimate_id: Attribute.Integer;
    delivery_method: Attribute.String;
    delivery_method_id: Attribute.Integer;
    line_items: Attribute.JSON & Attribute.Required;
    shipping_charge: Attribute.Float & Attribute.Required;
    adjustment: Attribute.Float & Attribute.Required;
    adjustment_description: Attribute.String;
    sub_total: Attribute.Float & Attribute.Required;
    tax_total: Attribute.Float & Attribute.Required;
    total: Attribute.Float & Attribute.Required;
    taxes: Attribute.JSON & Attribute.Required;
    price_precision: Attribute.Integer & Attribute.Required;
    pricebook_id: Attribute.Integer;
    shipping_address: Attribute.JSON;
    billing_address: Attribute.JSON;
    notes: Attribute.Text;
    terms: Attribute.Text;
    template_id: Attribute.Integer;
    template_name: Attribute.String;
    template_type: Attribute.String;
    created_time: Attribute.Date;
    last_modified_time: Attribute.Date;
    salesperson_id: Attribute.Integer;
    salesperson_name: Attribute.String;
    documents: Attribute.JSON;
    is_pre_gst: Attribute.Boolean;
    gst_no: Attribute.String;
    gst_treatment: Attribute.String;
    place_of_supply: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::package.package',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::package.package',
      'oneToMany',
      'api::package.package'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPaymentPayment extends Schema.CollectionType {
  collectionName: 'payments';
  info: {
    singularName: 'payment';
    pluralName: 'payments';
    displayName: 'Payment';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    payment_id: Attribute.String & Attribute.Required;
    payment_mode: Attribute.String & Attribute.Required;
    amount: Attribute.Decimal & Attribute.Required;
    amount_refunded: Attribute.Decimal & Attribute.Required;
    bank_charges: Attribute.Decimal & Attribute.Required;
    date: Attribute.Date & Attribute.Required;
    status: Attribute.String & Attribute.Required;
    reference_number: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    customer_id: Attribute.String & Attribute.Required;
    customer_name: Attribute.String & Attribute.Required;
    email: Attribute.Email;
    tax_amount_withheld: Attribute.Decimal;
    exchange_rate: Attribute.Decimal & Attribute.DefaultTo<1>;
    currency_id: Attribute.String & Attribute.Required;
    currency_code: Attribute.String & Attribute.Required;
    currency_symbol: Attribute.String & Attribute.Required;
    account_id: Attribute.String & Attribute.Required;
    account_name: Attribute.String & Attribute.Required;
    tax_account_id: Attribute.String;
    tax_account_name: Attribute.String;
    unused_amount: Attribute.Decimal;
    last_four_digits: Attribute.Integer;
    custom_fields: Attribute.JSON;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment.payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment.payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::payment.payment',
      'oneToMany',
      'api::payment.payment'
    >;
    locale: Attribute.String;
  };
}

export interface ApiPaymentMethodPaymentMethod extends Schema.CollectionType {
  collectionName: 'payment_methods';
  info: {
    singularName: 'payment-method';
    pluralName: 'payment-methods';
    displayName: 'Payment method';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    active: Attribute.Boolean;
    default: Attribute.Boolean;
    description: Attribute.String;
    help: Attribute.Text;
    logo: Attribute.Media;
    meta: Attribute.JSON;
    store: Attribute.Relation<
      'api::payment-method.payment-method',
      'manyToOne',
      'api::store.store'
    >;
    type: Attribute.Enumeration<['gateway', 'cash', 'credit', 'other']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::payment-method.payment-method',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiPricePrice extends Schema.CollectionType {
  collectionName: 'prices';
  info: {
    singularName: 'price';
    pluralName: 'prices';
    displayName: 'Price';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    active: Attribute.Boolean & Attribute.Required;
    primary: Attribute.Boolean & Attribute.Required;
    quantity: Attribute.Integer & Attribute.Required;
    sku: Attribute.String & Attribute.Required;
    unit: Attribute.Enumeration<
      ['item', 'box', 'hour', 'service', 'file', 'other']
    > &
      Attribute.Required;
    multiple_currency: Attribute.Boolean & Attribute.Required;
    commission_rate: Attribute.Float;
    retail_price: Attribute.Float;
    retail_old_price: Attribute.Float;
    tax: Attribute.Float;
    taxable: Attribute.Boolean & Attribute.Required;
    min_allowed_order: Attribute.Integer;
    max_allowed_order: Attribute.Integer;
    bulk_step: Attribute.Enumeration<['step-1']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::price.price',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::price.price',
      'oneToMany',
      'api::price.price'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    type: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'goods'>;
    parents: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    sku: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        minLength: 1;
        maxLength: 255;
      }>;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    attribute_family: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'api::attribute-family.attribute-family'
    >;
    stores: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::store.store'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::product.product',
      'oneToMany',
      'api::product.product'
    >;
    locale: Attribute.String;
  };
}

export interface ApiShipmentShipment extends Schema.CollectionType {
  collectionName: 'shipments';
  info: {
    singularName: 'shipment';
    pluralName: 'shipments';
    displayName: 'shipment';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    salesorder_id: Attribute.Integer;
    salesorder_number: Attribute.String & Attribute.Required;
    shipment_id: Attribute.Integer;
    shipment_number: Attribute.String & Attribute.Required;
    date: Attribute.Date;
    status: Attribute.Enumeration<
      ['shipped', 'in_transit', 'delivered', 'pending', 'cancelled']
    >;
    detailed_status: Attribute.Text;
    status_message: Attribute.String;
    carrier: Attribute.String;
    service: Attribute.String;
    delivery_days: Attribute.Integer;
    delivery_guarantee: Attribute.Boolean;
    reference_number: Attribute.String;
    customer_id: Attribute.Integer;
    customer_name: Attribute.String;
    contact_persons: Attribute.Integer;
    currency_id: Attribute.Integer;
    currency_code: Attribute.String;
    currency_symbol: Attribute.String;
    exchange_rate: Attribute.Decimal;
    discount_amount: Attribute.Decimal;
    discount: Attribute.String;
    is_discount_before_tax: Attribute.Boolean;
    discount_type: Attribute.Enumeration<['entity_level', 'item_level']>;
    estimate_id: Attribute.Integer;
    delivery_method: Attribute.String;
    delivery_method_id: Attribute.Integer;
    tracking_number: Attribute.String;
    shipping_charge: Attribute.Decimal;
    sub_total: Attribute.Decimal;
    tax_total: Attribute.Decimal;
    total: Attribute.Decimal;
    price_precision: Attribute.Integer;
    is_emailed: Attribute.Boolean;
    template_id: Attribute.Integer;
    template_name: Attribute.String;
    template_type: Attribute.Enumeration<['standard', 'custom']>;
    notes: Attribute.Text;
    created_time: Attribute.Date;
    last_modified_time: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::shipment.shipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::shipment.shipment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::shipment.shipment',
      'oneToMany',
      'api::shipment.shipment'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSpecificationGroupSpecificationGroup
  extends Schema.CollectionType {
  collectionName: 'specification_groups';
  info: {
    singularName: 'specification-group';
    pluralName: 'specification-groups';
    displayName: 'Specification Group';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::specification-group.specification-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::specification-group.specification-group',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::specification-group.specification-group',
      'oneToMany',
      'api::specification-group.specification-group'
    >;
    locale: Attribute.String;
  };
}

export interface ApiStoreStore extends Schema.CollectionType {
  collectionName: 'stores';
  info: {
    singularName: 'store';
    pluralName: 'stores';
    displayName: 'Store';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    domain: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    owner: Attribute.Relation<
      'api::store.store',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    organization: Attribute.Relation<
      'api::store.store',
      'oneToOne',
      'api::organization.organization'
    >;
    logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    is_open: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    address: Attribute.Relation<
      'api::store.store',
      'oneToOne',
      'api::address.address'
    >;
    payment_methods: Attribute.Relation<
      'api::store.store',
      'oneToMany',
      'api::payment-method.payment-method'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::store.store',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::store.store',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::store.store',
      'oneToMany',
      'api::store.store'
    >;
    locale: Attribute.String;
  };
}

export interface ApiVendorVendor extends Schema.CollectionType {
  collectionName: 'vendors';
  info: {
    singularName: 'vendor';
    pluralName: 'vendors';
    displayName: 'Vendor';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    full_name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    active: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    organization: Attribute.Relation<
      'api::vendor.vendor',
      'manyToOne',
      'api::organization.organization'
    >;
    contact: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'api::contact.contact'
    >;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vendor.vendor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::vendor.vendor',
      'oneToMany',
      'api::vendor.vendor'
    >;
    locale: Attribute.String;
  };
}

export interface ApiWarehouseWarehouse extends Schema.CollectionType {
  collectionName: 'warehouses';
  info: {
    singularName: 'warehouse';
    pluralName: 'warehouses';
    displayName: 'Warehouse';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    warehouse_name: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    city: Attribute.String & Attribute.Required;
    state: Attribute.String & Attribute.Required;
    country: Attribute.String & Attribute.Required;
    zip: Attribute.Integer & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::warehouse.warehouse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::warehouse.warehouse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url_path_id: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    localizations: Attribute.Relation<
      'api::warehouse.warehouse',
      'oneToMany',
      'api::warehouse.warehouse'
    >;
    locale: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::invoice.invoice': PluginInvoiceInvoice;
      'plugin::url-alias.path': PluginUrlAliasPath;
      'plugin::url-alias.pattern': PluginUrlAliasPattern;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::comments.comment': PluginCommentsComment;
      'plugin::comments.comment-report': PluginCommentsCommentReport;
      'api::address.address': ApiAddressAddress;
      'api::attribute.attribute': ApiAttributeAttribute;
      'api::attribute-family.attribute-family': ApiAttributeFamilyAttributeFamily;
      'api::attribute-group.attribute-group': ApiAttributeGroupAttributeGroup;
      'api::branch.branch': ApiBranchBranch;
      'api::brand.brand': ApiBrandBrand;
      'api::cart.cart': ApiCartCart;
      'api::cart-item.cart-item': ApiCartItemCartItem;
      'api::category.category': ApiCategoryCategory;
      'api::collection.collection': ApiCollectionCollection;
      'api::contact.contact': ApiContactContact;
      'api::contact-person.contact-person': ApiContactPersonContactPerson;
      'api::country.country': ApiCountryCountry;
      'api::coupon.coupon': ApiCouponCoupon;
      'api::currency.currency': ApiCurrencyCurrency;
      'api::invoice.invoice': ApiInvoiceInvoice;
      'api::lineitem.lineitem': ApiLineitemLineitem;
      'api::order.order': ApiOrderOrder;
      'api::organization.organization': ApiOrganizationOrganization;
      'api::package.package': ApiPackagePackage;
      'api::payment.payment': ApiPaymentPayment;
      'api::payment-method.payment-method': ApiPaymentMethodPaymentMethod;
      'api::price.price': ApiPricePrice;
      'api::product.product': ApiProductProduct;
      'api::shipment.shipment': ApiShipmentShipment;
      'api::specification-group.specification-group': ApiSpecificationGroupSpecificationGroup;
      'api::store.store': ApiStoreStore;
      'api::vendor.vendor': ApiVendorVendor;
      'api::warehouse.warehouse': ApiWarehouseWarehouse;
    }
  }
}
