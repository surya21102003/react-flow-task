This is a *React.js + React Flow* based frontend project built as part of a *frontend internship task*.  
It allows you to drag predefined blocks onto a canvas and connect them using controlled logic.

---

## 🚀 Features

- 🟦 *Block A* and 🟥 *Block B* types
- 🖱️ Drag and drop blocks onto canvas
- ➕ Connect *Block A → Block B* only
- ❌ Prevent invalid connections (B → A or same type)
- 💬 Right-click context menu showing *"Hello World"*
- 🧩 Custom node types with handles for interactive flow
- 🔄 State-based logic using useNodesState and useEdgesState


---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/surya21102003/react-flow-task.git



# 3. Install dependencies
npm install

# 4. Start the dev server
npm start


---
******************--Project Structure--******************



react-flow-task/
├── public/
│   └── index.html                      # Root HTML file
├── src/
│   ├── components/
│   │   ├── BlockPanel.jsx              # Sidebar with draggable Block A & B
│   │   ├── ContextMenu.jsx             # Right-click context menu (Hello World)
│   │   ├── CustomNode.jsx              # Custom Node UI with handles
│   │   └── FlowCanvas.jsx              # Main drag/drop canvas with connect logic
│   ├── data/
│   │   └── blocks.json                 # JSON config for block types
│   ├── App.js                          # Main App component (includes BlockPanel + FlowCanvas)
|   |__App.css                  
│   └── index.js                        # React DOM render entry point
├── .gitignore
├── package.json
├── README.md                          # 📘 Your detailed task README
└── package-lock.json    

