SELECT SUM(assignment_submissions.duration) as total_duration
FROM students JOIN assignment_submissions on students.id = assignment_submissions.student_id
WHERE students.name = 'Ibrahim Schimmel';