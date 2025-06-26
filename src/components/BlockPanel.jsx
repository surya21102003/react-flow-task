import React from "react";

function BlockPanel({ blocks }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="block-panel">
      {blocks.map((block) => (
        <div
          key={block.id}
          className={`block ${block.type}`}
          onDragStart={(e) => onDragStart(e, block.type)}
          draggable
        >
          {block.label}
        </div>
      ))}
    </aside>
  );
}

export default BlockPanel;