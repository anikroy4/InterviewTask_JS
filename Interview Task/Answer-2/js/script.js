const employees = [
  { id: 1, name: 'Alice', tasksCompleted: 50, rating: 4.8 },
  { id: 2, name: 'Bob', tasksCompleted: 30, rating: 3.9 },
  { id: 3, name: 'Charlie', tasksCompleted: 70, rating: 4.5 },
  { id: 4, name: 'Diana', tasksCompleted: 20, rating: 3.2 },
];


function calculateBonuses(employees) {
    const eligibleEmployees = [];
  
    for (const employee of employees) {
      if (employee.tasksCompleted >= 40 && employee.rating >= 4.0) {
        const bonus = employee.tasksCompleted * 10;
        eligibleEmployees.push({
          id: employee.id,
          name: employee.name,
          bonus: bonus
        });
      }
    }
  
    return eligibleEmployees;
  }
  
  const bonuses = calculateBonuses(employees);
  console.log(bonuses);