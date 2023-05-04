class User{
  static async create({firsName, lastName, email, tel}){
    //прописати  sql  - запит 
    //поверне те що створено ^
    const insertQuery = `
    INSERT INTO users (first_name, last_name, email, tel)
    VALUES(${firstName}, ${lastName}, ${email}, ${tel})
    REURNING *; 
    `;

    //виконати запит
    try{createdUser = await User.pool.query(insertQuery);
      console.log('createdUSER :>>', createdUser.rows[0])
      return createdUser;
    }catch (err) {
//повернути результат або помилку
     console.log('err :>>, err');
    }}
    
  static getAll(){}
  static getById(){}
  static updateById(){}
  static deleteByID(){}
}

module.export= User;