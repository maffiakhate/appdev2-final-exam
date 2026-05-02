import { mutation } from "./_generated/server";

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await ctx.db.insert("users", {
      fullname: "Seed User",
      username: "seeduser",
      password: "seedpass",
    });

    const tasks = [
      "Buy groceries",
      "Finish React Native tutorial",
      "Clean the kitchen",
      "Call mom",
      "Schedule dentist appointment",
      "Fix bug in todo app",
      "Read 10 pages of a book",
      "Go for a 20-minute run",
      "Organize desk",
      "Meditate for 5 minutes",
    ];

    for (const text of tasks) {
      await ctx.db.insert("todos", {
        text,
        userId,
        isCompleted: false,
      });
    }

    return "Seed completed successfully!";
  },
});