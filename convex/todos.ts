import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// GET TODOS
export const get = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("todos")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});

// ADD TODO
export const add = mutation({
  args: {
    text: v.string(),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
      userId: args.userId,
      isCompleted: false,
    });
  },
});

// TOGGLE TODO
export const toggle = mutation({
  args: {
    id: v.id("todos"),
    isCompleted: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      isCompleted: args.isCompleted,
    });
  },
});

// DELETE TODO
export const remove = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});