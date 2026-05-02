import { mutation } from "./_generated/server";
import { v } from "convex/values";

// REGISTER
export const register = mutation({
  args: {
    fullname: v.string(),
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", {
      fullname: args.fullname,
      username: args.username,
      password: args.password,
    });

    return {
      success: true,
      userId,
    };
  },
});

// LOGIN
export const login = mutation({
  args: {
    username: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) =>
        q.and(
          q.eq(q.field("username"), args.username),
          q.eq(q.field("password"), args.password)
        )
      )
      .first();

    if (!user) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }

    return {
      success: true,
      userId: user._id,
    };
  },
});