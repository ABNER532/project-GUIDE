// Navigation functions
function showPage(pageId) {
  document.getElementById('welcomePage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('createPage').style.display = 'none';
  document.getElementById(pageId).style.display = 'flex';
}

// Show login page
document.getElementById('showLoginBtn').addEventListener('click', function() {
  showPage('loginPage');
});

// Show create account page
document.getElementById('showCreateBtn').addEventListener('click', function() {
  showPage('createPage');
});

// Back buttons
document.getElementById('backFromLoginBtn').addEventListener('click', function() {
  showPage('welcomePage');
});
document.getElementById('backFromCreateBtn').addEventListener('click', function() {
  showPage('welcomePage');
});

// Login form submit
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const accountName = document.getElementById('accountName').value;
  const password = document.getElementById('password').value;
  alert(`Logged in as: ${accountName}\nPassword: ${password}`);
  // Add real authentication logic here
});

// Create account form submit
document.getElementById('createForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const newAccount = document.getElementById('newAccountName').value;
  const email = document.getElementById('newEmail').value;
  const newPassword = document.getElementById('newPassword').value;
  alert(`Account created!\nName: ${newAccount}\nEmail: ${email}\nPassword: ${newPassword}`);
  // Add real registration logic here
  showPage('welcomePage');
});