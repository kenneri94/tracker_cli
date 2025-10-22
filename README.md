🧠 Task Tracker CLI

A simple Command Line Interface (CLI) application built with Node.js and Yargs that helps you track, update, and manage tasks easily — directly from your terminal.
It stores tasks in a local JSON file and supports adding, updating, deleting, and filtering tasks by status.

📋 Features

✅ Add new tasks
✅ Update existing tasks
✅ Delete tasks by ID
✅ Mark tasks as todo, in-progress, or done
✅ List all tasks or filter by status
✅ Automatically saves and loads tasks from a local JSON file
✅ Gracefully handles missing files and invalid inputs

🛠️ Tech Stack

Language: JavaScript (Node.js)

CLI Library: Yargs

Storage: Local JSON file (tasks.json)

No external frameworks — only native Node.js modules and Yargs

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/kenneri94/tracker_cli
cd task-tracker-cli

2️⃣ Install dependencies
npm install yargs

3️⃣ Run the CLI

You can run the program using:

node task-cli.js <command> [options]

⚙️ Commands and Usage
➕ Add a new task
node task-cli.js add --description="Buy groceries"

Output:

✅ Task added successfully (ID: 1)

📝 Update a task
node task-cli.js update --id=1 --description="Buy groceries and cook dinner"

Output:

✏️ Task 1 updated successfully.

🗑️ Delete a task
node task-cli.js delete --id=1

Output:

🗑️ Task 1 deleted successfully.

🚧 Mark as in-progress
node task-cli.js mark-in-progress --id=1

Output:

🚧 Task 1 marked as in-progress.

✅ Mark as done
node task-cli.js mark-done --id=1

Output:

✅ Task 1 marked as done.

📋 List all tasks
node task-cli.js list

Output:

📋 Task List:

1. Buy groceries [TODO]
2. Clean the house [IN-PROGRESS]
3. Submit project [DONE]

🔍 List tasks by status
node task-cli.js list --status=todo
node task-cli.js list --status=done
node task-cli.js list --status=in-progress

🧩 Task Structure (in tasks.json)

Each task stored in the JSON file includes:

{
"id": 1,
"description": "Buy groceries",
"status": "todo",
"createdAt": "2025-10-16T13:00:00.000Z",
"updatedAt": "2025-10-16T13:00:00.000Z"
}

⚡ Make It a Global CLI (Optional)

You can make this CLI available globally so you can use task-cli directly from any folder.

Open your package.json and add:

"bin": {
"task-cli": "./task-cli.js"
}

Then run:

npm link

Now you can use it globally:

task-cli add --description="Read a book"
task-cli list

🧑‍💻 Project Structuretask-tracker-cli/

task-tracker-cli/
│
├── task-cli.js # Main CLI script
├── tasks.json # JSON file for storing tasks
├── package.json # Project metadata
└── README.md # Documentation

🧾 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it for personal or commercial purposes.

💡 Author
Kennedy otieno
🔗 EssaysHomeworkHelp.com

## 🌐 Project Page

You can view the project here: [tracker_cli](https://github.com/kenneri94/tracker_cli)

📧 Feel free to fork, contribute, or report issues.
