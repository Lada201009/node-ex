class User{
  static create({firsName, lastName, email, tel}){
    //прописати  sql  - запит 
    //поверне те що створено ^
    const insertQuery = `
    INSERT INTO users (first_name, last_name, email, tel)
    VALUES(${firstName}, ${lastName}, ${email}, ${tel})
    REURNING *; 
    `;

    //виконати запит
    //повернути результат або помилку
  }
  static getAll(){}
  static getById(){}
  static updateById(){}
  static deleteByID(){}
}

module.export= User;