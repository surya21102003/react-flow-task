import React, { useEffect, useState } from "react";
import BlockPanel from "./components/BlockPanel";
import FlowCanvas from "./components/FlowCanvas";
import blocksData from "./data/blocks.json";
import "./App.css";

function App() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(blocksData);
  }, []);

  return (
    <div className="app">
      <BlockPanel blocks={blocks} />
      
         <FlowCanvas />
      
     
    </div>
  );
}

export default App;









