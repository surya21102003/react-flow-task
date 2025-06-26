import { Handle,Position } from "reactflow"
const CustomNode=({data})=>{
  return(
    <div style={{padding:10,border:'1px solid #999',borderRadius:5,background:'#f0f0f0'}}>
      <Handle type="target" position={Position.Left}/>
      {data.label}
  <Handle type="source" position={Position.Right}/>

    </div>
  )
}
export default CustomNode;