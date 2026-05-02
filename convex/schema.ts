import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    // add fields later if needed
  }),

  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
    userId: v.optional(v.id("users")),
  }),
});