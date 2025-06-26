
import React from "react";

function ContextMenu({ x, y, visible }) {
  if (!visible) return null;

  return (
    <div className="context-menu" style={{ top: y, left: x }}>
      Hello World
    </div>
  );
}

export default ContextMenu;