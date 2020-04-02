const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123', // need ,
  host: 'localhost',
  database: 'bootcampx'
});
let cohortName = process.argv[2]
//console.log(cohortName)

pool.query(`
SELECT distinct teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers on teachers.id = teacher_id
JOIN students on students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name = '${cohortName}'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));