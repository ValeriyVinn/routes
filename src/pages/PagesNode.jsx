import { Outlet } from 'react-router-dom';


const NodeComponent = () => {
  return (
    <>
      <h1>Node.js</h1>
      <Outlet />
    </>
  );
};
export default NodeComponent;