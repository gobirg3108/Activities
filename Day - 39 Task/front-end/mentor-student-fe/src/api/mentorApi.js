import axios from 'axios';

const BASE_URL = 'https://mentors-student-db.onrender.com/mentors';

export const createMentor = async (mentor) => {
  return await axios.post(`${BASE_URL}/create`, mentor);
};

export const getMentors = async () => {
  return await axios.get(BASE_URL);
};

export const getStudentsByMentor = async (mentorId) => {
  return await axios.get(`${BASE_URL}/${mentorId}/students`);
};
