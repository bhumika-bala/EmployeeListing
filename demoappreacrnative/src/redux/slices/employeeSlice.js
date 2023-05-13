import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  favoriteEmployees: [],
  likedEmployees: [],
  firstName: '',
  lastName: '',
  email: '',
  jobTitle: '',
  salary: '',
  favoriteCount: 0,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setSalary: (state, action) => {
      state.salary = action.payload;
    },
    addEmployee: (state) => {
      const { firstName, lastName, email, jobTitle, salary } = state;
      const newEmployee = {
        id: state.employees.length + 1,
        firstName,
        lastName,
        email,
        jobTitle,
        salary,
        favoriteCount: 0, // Set favoriteCount to 0 by default
      };
      state.employees.push(newEmployee);
    },
    toggleFavorite: (state, action) => {
      const employeeId = action.payload;
      const isFavorite = state.favoriteEmployees.includes(employeeId);

      if (isFavorite) {
        state.favoriteEmployees = state.favoriteEmployees.filter(
          (id) => id !== employeeId
        );
      } else {
        state.favoriteEmployees.push(employeeId);
      }

      // Update favorite count for all employees
      state.employees.forEach((employee) => {
        const isFavorite = state.favoriteEmployees.includes(employee.id);
        employee.favoriteCount = isFavorite
          ? state.favoriteCount + 1
          : state.favoriteCount;
      });
    },
    toggleLiked: (state, action) => {
      const employeeId = action.payload;
      const isLiked = state.likedEmployees.includes(employeeId);

      if (isLiked) {
        state.likedEmployees = state.likedEmployees.filter(
          (id) => id !== employeeId
        );
      } else {
        state.likedEmployees.push(employeeId);
      }

      // Update favorite count for all employees
      state.employees.forEach((employee) => {
        const isFavorite = state.favoriteEmployees.includes(employee.id);
        employee.favoriteCount = isFavorite
          ? state.favoriteCount + 1
          : state.favoriteCount;
      });
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setJobTitle,
  setSalary,
  addEmployee,
  toggleFavorite,
  toggleLiked,
} = employeeSlice.actions;

export default employeeSlice.reducer;
