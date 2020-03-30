SELECT name, id, cohort_id
FROM students
WHERE end_date IS Null
ORDER BY cohort_id;