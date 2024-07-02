import React, { useState, useEffect } from 'react';
import { getStudents } from '../api/studentApi';

const AssignStudentsForm = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudents();
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setError('Failed to fetch students. Please try again later.');
      }
    };

    fetchStudents();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Assign Students</h2>
      {students.length === 0 ? (
        <p>No students available for assignment.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student._id}>{student.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssignStudentsForm;
