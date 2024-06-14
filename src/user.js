class User {
  constructor({ id, name, profession, age }) {
    this.id = parseInt(id),
    this.name = name,
    this.profession = profession,
    this.age = age,
    this.birthDay = new Date().getFullYear() - parseInt(age)
  }
}

module.exports = User