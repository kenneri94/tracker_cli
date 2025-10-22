const fs = require("fs");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const tasksFile = "tasks.json";

const cli = yargs(hideBin(process.argv));

// ✅ Helper: Read tasks from file
const readTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(tasksFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

// ✅ Helper: Save tasks to file
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(tasksFile, dataJSON);
};

// ✅ Add new task
cli.command({
  command: "add",
  describe: "Add a new task",
  builder: {
    description: {
      describe: "Task description",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const tasks = readTasks();
    const newTask = {
      id: tasks.length + 1,
      description: argv.description,
      status: "todo",
      createdAt: new Date().toISOString(),
      UpdateAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`✅ Task added successfully! (ID:${newTask.id})`);
  },
});

//update task
cli.command({
  command: "update",
  describe: "Update a task description",
  builder: {
    id: {
      describe: "Task ID",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === argv.id);
    if (!task) return console.log("❌ Task not found.");
    task.description = argv.description;
    task.UpdateAt = new Date().toISOString();

    saveTasks(tasks);
    console.log(`✏️ Task ${argv.id} updated successfully.`);
  },
});

// ✅ List all tasks
cli.command({
  command: "list",
  describe: "List all tasks",
  handler() {
    const tasks = readTasks();
    if (tasks.length === 0) {
      console.log("📭 No tasks available.");
      return;
    }

    console.log("📝 Task List:");
    tasks.forEach((task) => {
      console.log(
        `${task.id}. ${task.description} - ${
          task.completed ? "✅ Completed" : "❌ Not completed"
        }`
      );
    });
  },
});

//mark task as in-progress
cli.command({
  command: "mark-in-progress",
  describe: "mark a task as in progress",
  builder: {
    id: {
      describe: "Task ID",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === argv.id);
    if (!task) return console.log("❌ Task not found.");
    task.status = "in-progress";
    task.UpdateAt = new Date().toISOString();

    saveTasks(tasks);
    console.log(`🚧 Task ${argv.id} marked as in-progress.`);
  },
});

// ✅ Mark task as done
cli.command({
  command: "mark-done",
  describe: "Mark a task as done",
  builder: {
    id: {
      describe: "Task ID to mark as done",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    const tasks = readTasks();
    const task = tasks.find((task) => task.id === argv.id);
    if (!task) {
      console.log("❌ Task not found.");
      return;
    }

    task.status = "done";
    task.UpdateAt = new Date().toISOString();
    saveTasks(tasks);
    console.log(`✅ Task ${argv.id} marked as done!`);
  },
});

// ✅ delete a task
cli.command({
  command: "delete",
  describe: "delete a task by ID",
  builder: {
    id: {
      describe: "Task ID",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    const tasks = readTasks();
    const filtered = tasks.filter((t) => t.id !== argv.id);

    if (filtered.length === tasks.length) return;
    console.log("❌ Task not found.");

    saveTasks(filtered);
    console.log(`🗑️ Task ${argv.id} deleted successfully!`);
  },
});

// ✅ Parse the command-line arguments
cli.demandCommand().help().parse();
