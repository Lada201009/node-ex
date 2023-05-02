const {Pool} = require('pg');

const connectionConfig={
  host:'127.0.0.1',
  port:'5432',
  database:'phones_sales',
  user:'postgres',
  password:'admin'
}

const pool = new Pool(connectionConfig);

// pool.connect(err=>{
//   if(!err) {
//     console.log('DB connection success!')
//   }
// })

// process.on('beforeExit', () => pool.end())

// pool.query('SELECT CURRENT_DATE;', (err, data) => {
//   if(!err){
//     console.log('data :>>', data.rows)
//   }
// })

// // отримати прелик користувач.

// pool.query('SELECT * FROM users;', (err, data) => {
//   if (!err) {
//     console.log('data :>> ', data.rows)
//   }
// })


// pool.query('SELECT CURRENT_DATE;')
// .then(data => {
//   console.log('data.rows')
// })
// .catch(err => {
//   console.log('err :>> ', err)
// })

// (async () => {
//   try { 
//    const data = await pool.query('SELECT CURRENT_DATE;')
// console.log('data.rows :>> ', data.rows)
// } catch (err) {
//   console.log('e :>> ', err)
// }
// })()
// опереція виклику функції це в кінці ()


const id = 1;
(async () => {
  try { 
   const data = await pool.query(`SELECT * FROM users WHERE id=${id};`)
console.log('data.rows :>> ', data.rows)
} catch (err) {
  console.log('e :>> ', err)
}
})();
// одно и тоже
(async () => {
  try { 
   const data = await pool.query(`SELECT * FROM users WHERE id=$1;`, [id])
console.log('data.rows :>> ', data.rows)
} catch (err) {
  console.log('e :>> ', err)
}
})();