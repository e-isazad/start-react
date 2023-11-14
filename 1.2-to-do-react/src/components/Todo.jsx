import React, { useState } from 'react';
import Data from '../data.js';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  let [students, setStudents] = useState([...Data]);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  function handleSearch(e) {
    let filtred = students.filter((student) => {
      return student.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim())
    });

    if (e.target.value.trim() === "") {
      setStudents([...Data]);
    } else {
      setStudents(filtred);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newStudent = { id: uuidv4(), name: name, description: description, isCompleted: false, todoDate: new Date() };
    setStudents([...students, newStudent]);
    Data.push(newStudent);
    setName("");
    setDescription("");
  }

  function handleDelete(id) {
    let filterStudents = students.filter((student) => student.id !== id);
    setStudents([...filterStudents]);
  }

  function handleMark(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, isCompleted: !student.isCompleted } : student
      )
    );
  }

  function handleSortByDate() {
    setStudents((prevStudents) =>
      [...prevStudents].sort((a, b) => new Date(b.todoDate) - new Date(a.todoDate))
    );
  }

  return (
    <React.Fragment>
      <input onChange={(e) => handleSearch(e)} placeholder='search to-do' />
      <button>sort completed todos button</button>
      <button onClick={handleSortByDate}>sort by date todo</button>
      <ul>
        {students && students.map((student) => (
          <li key={student.id} style={{ textDecoration: student.isCompleted ? 'line-through' : 'none' }}>
            {student.name}---- {student.description}
            <button onClick={() => handleDelete(student.id)}>delete to do</button>
            <button onClick={() => handleMark(student.id)}>mark as done to do</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type='string'
          placeholder='enter your name'
        />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          type='string'
          placeholder='enter your description'
        />
        <button>Add to do</button>
      </form>
    </React.Fragment>
  );
}

export default Todo;
