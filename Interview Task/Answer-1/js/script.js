const users = [
    { 
        id: 1,
        name: "Alice",
        age: 25,
        isActive: true,
        scores: [85, 92, 88] 
    },

    { 
        id: 2,
        name: "Bob",
        age: 30,
        isActive: false,
        scores: [70, 75, 80] 
    },

    { 
        id: 3,
        name: "Charlie",
        age: 35,
        isActive: true,
        scores: [95, 90, 93]
    },

    { 
        id: 4,
        name: "Diana",
        age: 28,
        isActive: true,
        scores: [60, 65, 70]
    },

    { 
        id: 5,
        name: "Eve",
        age: 40,
        isActive: false,
        scores: [80, 85, 88] 
    }
    
  ];
  
  function processUsers(users) {
    // Filter active users
    const activeUsers = users.filter(user => user.isActive);
  
    // Calculate average score for each active user
    activeUsers.forEach(user => {
      const totalScore = user.scores.reduce((acc, score) => acc + score, 0);
      user.averageScore = totalScore / user.scores.length;
    });
  
    // Find the top performer
    const topPerformer = activeUsers.reduce((top, user) => {
      return (user.averageScore > top.averageScore) ? user : top;
    });
  
    // Group users by age range
    const ageGroups = {
      under30: users.filter(user => user.age < 30),
      over30: users.filter(user => user.age >= 30)
    };
  
    return {
      activeUsers,
      topPerformer,
      ageGroups
    };
  }
  
  console.log(processUsers(users));
  