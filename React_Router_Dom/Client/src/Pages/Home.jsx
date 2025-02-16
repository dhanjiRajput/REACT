import React, { useEffect, useState } from "react";
import getUserDetails from "../userDetails";
import TaskCard from "../Components/TaskCard";
import API  from "../Config/API";

const Home = () => {
  const [task, setTask] = useState([]);
  let user = getUserDetails();
  

  const getTasks = async () => {
    if (user) {
      if (user.role == "admin") {
        let res=await API.get(`/task?assignedBy=${user.id}`);
        setTask(res.data);
      } else {
        let res=await API.get(`/task?assignTo=${user.id}`);
        setTask(res.data);
      }
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      {task.map((task) => (
        <TaskCard {...task} role={user.role} key={task._id} />
      ))}
    </div>
  );
};

export default Home;