// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Page = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Page'
  title: string
  description?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
  readingTime: number
}

export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  description?: string | undefined
  image: string
  date: IsoDateTimeString
  author: string
  category?: '' | undefined
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
  readingTime: number
}

export type Product = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Product'
  title: string
  description?: string | undefined
  price: number
  image: string
  ratingValue: string
  ratingCount: number
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
  readingTime: number
}

export type Service = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Service'
  title: string
  description?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  slugAsParams: string
  readingTime: number
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Page | Post | Product | Service
export type DocumentTypeNames = 'Page' | 'Post' | 'Product' | 'Service'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPages: Page[]
  allPosts: Post[]
  allProducts: Product[]
  allServices: Service[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Page: Page
  Post: Post
  Product: Product
  Service: Service
}

export type NestedTypeMap = {

}

 