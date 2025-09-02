// Demo login simulation
const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
];

function login(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (user) return { success: true, message: 'Login successful' };
  return { success: false, message: 'Invalid credentials' };
}

module.exports = login;
