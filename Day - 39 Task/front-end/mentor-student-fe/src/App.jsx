import React from 'react';
import MentorForm from './components/MentorForm';
import StudentForm from './components/StudentForm';
import AssignStudentsForm from './components/AssignStudentsForm';
import MentorStudentsList from './components/MentorStudentsList';

const App = () => {
  return (
    <div>
      <h1>Mentor and Student Management</h1>
      <MentorForm />
      <StudentForm />
      <AssignStudentsForm />
      <MentorStudentsList />
    </div>
  );
};

export default App;
