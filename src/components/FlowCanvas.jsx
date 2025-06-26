import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  
} from "reactflow";
import "reactflow/dist/style.css";
import ContextMenu from "./ContextMenu";
import CustomNode from "./CustomNode";
let id = 0;
const getId = () => `node_${id++}`;
const nodeType={
  blockA:CustomNode,
  blockB:CustomNode
}
function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find((n) => n.id === params.source);
      const targetNode = nodes.find((n) => n.id === params.target);

      if (sourceNode?.type === "blockA" && targetNode?.type === "blockB") {
        setEdges((eds) => addEdge(params, eds));
      } else {
        alert("Only Block A can connect to Block B");
      }
    },
    [nodes, setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      const position = { x: event.clientX - 200, y: event.clientY - 40 };
      const newNode = {
        id: getId(),
        type:type,
        position,
        data: { label: type === "blockA" ? "Block A" : "Block B" },
        sourceposition:'right',
        targetPosition:'left',
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const onContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
  };

  const onPaneClick = () => setContextMenu({ visible: false });

  return (
    <div className="canvas"style={{width:'100%',height:'100%'}} onDrop={onDrop} onDragOver={(e) => e.preventDefault()} onContextMenu={onContextMenu}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeType}
        onPaneClick={onPaneClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <ContextMenu x={contextMenu.x} y={contextMenu.y} visible={contextMenu.visible} />
    </div>
  );
}

export default function FlowCanvasWrapper() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}