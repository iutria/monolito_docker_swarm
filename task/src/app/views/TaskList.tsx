import { useEffect } from "react";
import { Container, Grid } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useTask } from "../states/useTask";
import { TaskCard } from "../components/atomics/TaskCard";
import { VoidMessaje } from "../components/atomics/VoidMessaje";


const TaskList = () => {
  const navigate = useNavigate();  

  const { getTasks, list: tasks } = useTask();

  useEffect(() => {
    getTasks();
  }, []);

  return (<>
    <button
      className='floating-button'
      onClick={() => navigate("/add")}
    >
      <FaPlus/>
    </button>
    <Container css={{ 
      paddingTop: tasks.length == 0 ? '$0' : "$10", 
      minHeight: '100vh'}}
      >
      {
        tasks.length==0 ?
        <VoidMessaje />:
        <Grid.Container gap={2}>
          {tasks.map((item, index) => (<TaskCard key={index} item={item} />))}
        </Grid.Container>
      }
    </Container>
  </>
  );
};

export default TaskList;
