class Phone {
  static create () {}
  static async getAll () {
    const selectQuery = `
    SELECT *
    FROM phones
    ORDER BY id
    `;
    try {
      const foundPhones = await Phone.pool.query(selectQuery);
      return foundPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  
  static getById () {}
  static updateById () {}
  static deleteById () {}
}

module.exports = Phone;