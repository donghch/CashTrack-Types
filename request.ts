
import { z } from "zod";

/**
 * Zod schema for filtering transactions with pagination and sorting
 */
export const TransactionFilterSchema = z.object({
  // Date filters
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  
  // Merchant filter (case-insensitive partial match)
  merchant: z.string().optional(),
  
  // Currency filter (exact match)
  currency: z.string().optional(),
  
  // Category filter (by category ID or name)
  category: z.union([z.number(), z.string()]).optional(),
  
  // Amount filters (in minor units)
  minTotal: z.number().int().nonnegative().optional(),
  maxTotal: z.number().int().nonnegative().optional(),
  
  // Pagination
  limit: z.number().int().min(1).max(100).default(20),
  offset: z.number().int().nonnegative().default(0),
  
  // Sorting
  sortBy: z.enum(["transactionTime", "total", "merchant"]).default("transactionTime"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  
  // Include nested data
  includeItems: z.boolean().default(false)
});

/**
 * Type inferred from TransactionFilterSchema
 */
export type TransactionFilter = z.infer<typeof TransactionFilterSchema>;