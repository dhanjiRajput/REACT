import React, { useEffect, useState } from "react";
import API from "../Config/API";

const Assign = () => {
  const [task, setTask] = useState({
    title: "",
    desc: "",
    endDate: "",
    assignTo: "",
  });

  const [users, setUsers] = useState([]);

  const getUser = async () => {
    let res=await API.get(`/users?role=user`);
    setUsers(res.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const createTask = async (data) => {
    let res = await API.post(`/task`, data);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setTask({
      ...task,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    alert("Task Assigned Successfully......");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Assign Task
        </h1>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Title
          </label>
          <input
            type="text"
            value={task.title}
            name="title"
            onChange={handleInput}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Description
          </label>
          <input
            type="text"
            value={task.desc}
            name="desc"
            onChange={handleInput}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            End Date
          </label>
          <input
            type="date"
            value={task.endDate}
            name="endDate"
            onChange={handleInput}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              outline: "none",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", color: "#666" }}
          >
            Assign To
          </label>
          <select
            name="assignTo"
            onChange={handleInput}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              outline: "none",
              backgroundColor: "#fff",
            }}
          >
            <option value="">Select</option>
            {users.map((user) => (
              <option value={user._id} key={user._id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>

        <input
          type="submit"
          value="Assign"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default Assign;