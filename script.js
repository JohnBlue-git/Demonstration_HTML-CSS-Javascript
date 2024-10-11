const userList = document.getElementById('userList');
const userForm = document.getElementById('userForm');

// Default users
const defaultUsers = [
  { name: 'Alice', age: '30', gender: 'female', country: 'USA' },
  { name: 'Bob', age: '25', gender: 'male', country: 'UK' }
];

// Function to render users
function renderUsers(users) {
  userList.innerHTML = '';
  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.country}</td>
                <td><button onclick="deleteUser(${index})">Delete</button></td>
            `;
    userList.appendChild(row);
  });
}

// Initial render with default users
renderUsers(defaultUsers);

// Handle form submission
userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newUser = {
    name: userForm.name.value,
    age: userForm.age.value,
    gender: userForm.gender.value,
    country: userForm.country.value
  };

  // Add new user to the list and re-render
  defaultUsers.push(newUser);
  renderUsers(defaultUsers);

  // Reset form fields
  userForm.reset();
});

// Function to delete a user
function deleteUser(index) {
  defaultUsers.splice(index, 1);
  renderUsers(defaultUsers);
}
