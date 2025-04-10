// Attendance Form Submission
document.getElementById("attendanceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const studentId = document.getElementById("studentId").value;
  const password = document.getElementById("password").value;

  // Simulate attendance data (replace with actual backend logic)
  const attendanceData = {
    "12345": "85%", // Example: Student ID 12345 has 85% attendance
    "67890": "92%", // Example: Student ID 67890 has 92% attendance
  };

  const attendanceResult = document.getElementById("attendanceResult");

  if (attendanceData[studentId]) {
    attendanceResult.innerHTML = `<div class="alert alert-success">
                                    <strong>Success!</strong> Your attendance is <span>${attendanceData[studentId]}</span>.
                                  </div>`;
    attendanceResult.style.animation = "fadeIn 1s ease";
  } else {
    attendanceResult.innerHTML = `<div class="alert alert-danger">
                                    <strong>Error:</strong> Invalid Student ID or Password.
                                  </div>`;
    attendanceResult.style.animation = "shake 0.5s ease";
  }
});
