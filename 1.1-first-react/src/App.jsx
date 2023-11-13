import React from 'react';
import { students } from './students';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Firstmain from './components/main/Firstmain';
import Lastmain from './components/main/Lastmain';

function App() {
  return (
    <>
    <Header />
    <Firstmain/>

      <ol>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ol>
      <Lastmain/>
      <Footer/>
    </>

  );
}

export default App;
