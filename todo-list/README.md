# 📝 To-Do List Application

A modern, feature-rich to-do list application with local storage functionality built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- ✅ Add, edit, and delete tasks
- ✅ Mark tasks as complete
- ✅ Filter tasks (All, Active, Completed)
- ✅ Real-time statistics dashboard
- ✅ Automatic local storage saving
- ✅ Responsive mobile-first design
- ✅ Toast notifications
- ✅ Confirmation modals for destructive actions
- ✅ Priority badges for tasks

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/purushottamsonone2002-create/Purushottam-.git
cd Purushottam-/todo-list
```

### Usage

1. Open `index.html` in a web browser
2. Add tasks using the input field
3. Press Enter or click "Add Task"
4. Check tasks to mark them complete
5. Use filter buttons to view specific tasks
6. All data is automatically saved to browser local storage

## 📁 Project Structure

```
todo-list/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── app.js          # Application logic and local storage
└── README.md       # Documentation
```

## 💾 Local Storage

All tasks are saved to browser's localStorage with key: `todoAppData`

Data structure:
```javascript
{
  id: 1234567890,
  text: "Task description",
  completed: false,
  priority: "medium",
  createdAt: "12/2/2024, 10:30:45 AM"
}
```

## 🎨 Design Features

- Gradient header with indigo theme
- Responsive grid layout
- Smooth animations and transitions
- Color-coded badges
- Mobile-optimized interface

## 🔧 Technologies

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- Browser LocalStorage API

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 🎯 Key Functions

- `addTodo()` - Add new task
- `deleteTodo(id)` - Delete specific task
- `toggleTodo(id)` - Mark complete/incomplete
- `filterTodos(filter)` - Filter by status
- `clearCompleted()` - Delete all completed
- `updateStats()` - Update statistics
- `saveTodos()` / `loadTodos()` - LocalStorage operations

## 🚀 Future Enhancements

- Drag & drop reordering
- Due date picker
- Task categories/tags
- Search functionality
- Export to PDF/CSV
- Dark mode
- Task reminders

---

**Made with ❤️ for productivity lovers**