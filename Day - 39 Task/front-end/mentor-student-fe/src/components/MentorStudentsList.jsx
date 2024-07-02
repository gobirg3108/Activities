import React, { useState } from 'react';
import { getStudentsByMentor } from '../api/mentorApi';

const MentorStudentsList = () => {
  const [mentorId, setMentorId] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getStudentsByMentor(mentorId);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>View Students by Mentor</h2>
        <input
          type="text"
          placeholder="Mentor ID"
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
        />
        <button type="submit">View Students</button>
      </form>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentorStudentsList;
