import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// GET todos
export const get = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("todos")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});

// ADD todo
export const add = mutation({
  args: {
    text: v.string(),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
      userId: args.userId,
    });
  },
});

// TOGGLE todo
export const toggle = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);

    if (!todo) throw new Error("Todo not found");

    await ctx.db.patch(args.id, {
      isCompleted: !todo.isCompleted,
    });
  },
});

// DELETE todo
export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});