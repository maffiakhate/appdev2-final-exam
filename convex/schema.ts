import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    fullname: v.string(),
    username: v.string(),
    password: v.string(),
  }),

  todos: defineTable({
    text: v.string(),
    userId: v.id("users"),
    isCompleted: v.boolean(),
  }),
});