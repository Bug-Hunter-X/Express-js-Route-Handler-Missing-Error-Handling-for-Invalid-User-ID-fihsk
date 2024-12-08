const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    const parsedUserId = parseInt(userId);
    if (isNaN(parsedUserId)) {
      return res.status(400).send('Invalid user ID');
    }
    const user = users.find(user => user.id === parsedUserId);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.send(user);
    }
  } catch (error) {
    console.error('Error handling user ID:', error);
    res.status(500).send('Server error');
  }
});

// ... rest of the code