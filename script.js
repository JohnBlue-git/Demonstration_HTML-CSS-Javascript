const userList = document.getElementById('userList');
const userForm = document.getElementById('userForm');
const $slider = document.getElementById('slider');

// Default users
const defaultUsers = [
  { name: 'Alice', age: '30', gender: 'female', country: 'USA' },
  { name: 'Bob', age: '25', gender: 'male', country: 'UK' }
];

// Function to render users
function renderUsers(users) {
  userList.innerHTML = '';
  
  // Filter users with age threshold
  const $slider = document.getElementById('slider');
	const filteredUsers = users.filter(user => user.age >= $slider.value1 && user.age <= $slider.value2);
	
  // create row and fill in user data
  filteredUsers.forEach((user, index) => {
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
  
  if (userForm.age.value < 0 || userForm.age.value > 150) {
    alert("Please enter an age between 0 and 150.");
    event.preventDefault(); // Prevent form submission
    return;
  }
  
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

// Handle slider
$slider.addEventListener('change', (event) => {
	event.preventDefault();
	renderUsers(defaultUsers);
});

// Function to delete a user
function deleteUser(index) {
  defaultUsers.splice(index, 1);
  renderUsers(defaultUsers);
}
