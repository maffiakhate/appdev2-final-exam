import { mutation } from "./_generated/server";

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // 1. Create valid user (FIXED)
    const userId = await ctx.db.insert("users", {
      username: "seeduser",
      password: "seedpass", // simple seed password (no bcrypt needed for seeder)
    });

    // 2. Tasks
    const initialTasks = [
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

    // 3. Insert todos
    for (const taskText of initialTasks) {
      await ctx.db.insert("todos", {
        text: taskText,
        isCompleted: Math.random() > 0.7,
        userId,
      });
    }

    return "Successfully seeded 10 tasks with user linkage!";
  },
});