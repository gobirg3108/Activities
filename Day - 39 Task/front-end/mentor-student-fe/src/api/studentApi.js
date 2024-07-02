import axios from 'axios';

const BASE_URL = 'https://mentors-student-db.onrender.com/students';

export const createStudent = async (student) => {
  return await axios.post(`${BASE_URL}/create`, student);
};

export const assignMentor = async (studentId, mentorId) => {
  return await axios.post(`${BASE_URL}/assign-mentor`, { studentId, mentorId });
};

export const getPreviousMentors = async (studentId) => {
  return await axios.get(`${BASE_URL}/${studentId}/previous-mentors`);
};

export const getStudents = async () => {
  return await axios.get(BASE_URL);
};
