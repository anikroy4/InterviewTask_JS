function calculateAverage(scores) {
  if (scores.length === 0) {
    return 0; // Handle empty scores array to avoid division by zero
  }
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
}

function evaluateStudents(students) {
  return students.map(student => {
    const averageScore = calculateAverage(student.scores);
    const status = averageScore >= 60 ? "Pass" : "Fail";
    return {
      id: student.id,
      name: student.name,
      averageScore: parseFloat(averageScore.toFixed(2)), // Format to 2 decimal places
      status: status
    };
  });
}

function getTopScorer(students) {
    if (students.length === 0) {
        return null; // Handle empty student array
    }
    let topScorer = null;
    let highestAverage = -1;

    students.forEach(student => {
        const averageScore = calculateAverage(student.scores);
        if (averageScore > highestAverage) {
            highestAverage = averageScore;
            topScorer = { ...student, averageScore}; // Spread to avoid modifying original array
        }
    });
    return topScorer;
}

function classPerformance(students) {
    if (students.length === 0) {
        return "No students to evaluate.";
    }

    const totalAverage = students.reduce((sum, student) => {
        return sum + calculateAverage(student.scores);
    }, 0);

    const classAverage = totalAverage / students.length;

    if (classAverage >= 80) {
        return "Excellent";
    } else if (classAverage >= 60) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}


const students = [
  { id: 1,
    name: 'John',
    scores: [85, 78, 92] },

  { id: 2,
    name: 'Sara',
    scores: [62, 70, 68] },
  
  { id: 3,
    name: 'Emma',
    scores: [90, 95, 94]
  },
  
  { id: 4,
    name: 'Tom',
    scores: [50, 48, 55]
  },
];

const evaluatedStudents = evaluateStudents(students);
console.log(evaluatedStudents);

const topStudent = getTopScorer(students);
console.log("Top Scorer:", topStudent);

const performance = classPerformance(students);
console.log("Class Performance:", performance);