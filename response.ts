
import { transactions, items, itemCategories } from "../db/schema.js";

export enum ServerResponseCode {
    SUCCESS, 
    ERROR
}

/**
 * Transaction with its associated items and categories
 */
export interface TransactionWithItems {
  transaction: typeof transactions.$inferSelect;
  items?: Array<{
    item: typeof items.$inferSelect;
    category?: typeof itemCategories.$inferSelect | null;
  }>;
}

/**
 * Generic paginated response structure
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

/**
 * Server response with optional pagination support
 */
export interface ServerResponse<T = any> {
  code: ServerResponseCode;
  text: string;
  data?: T;
  pagination?: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}
