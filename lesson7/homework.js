// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}

let users=[
    new User(1, 'Vasay', 'Pupkin', 'asd@asd.com', '+380681234567'),
    new User(2, 'Kolay', 'Pushkin', 'jhg@asd.com', '+380681234568'),
    new User(3, 'Miosha', 'Dupkin', 'afsd@asd.com', '+380681234569'),
    new User(4, 'Tolay', 'Gupkin', 'ashd@asd.com', '+380681234597'),
    new User(5, 'Vitai', 'Tupkin', 'awsd@asd.com', '+380681239567'),
    new User(6, 'Sasha', 'Zhupkin', 'astd@asd.com', '+380681237567'),
    new User(7, 'Joe', 'Supkin', 'asnd@asd.com', '+380681294567'),
    new User(8, 'Arnold', 'Rupkin', 'acsd@asd.com', '+380681234567'),
    new User(9, 'Homer', 'Bupkin', 'asld@asd.com', '+380681214567'),
    new User(10, 'Bart', 'Phupkin', 'asud@asd.com', '+380681034567'),
]

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers=user.filter (value=>value.id%2===0)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort((a,b)=>a.id-b.id)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id,name,surname,email,phone,order) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client (1, 'Vasay', 'Pupkin', 'asd@asd.com', '+380681234567',['kokos','marakuai']),
    new Client(2, 'Kolay', 'Pushkin', 'jhg@asd.com', '+380681234568', ['kokos','marakuai','potato']),
    new Client(3, 'Miosha', 'Dupkin', 'afsd@asd.com', '+380681234569', ['kokos','marakuai','potato', 'apple', 'hj']),
    new Client(4, 'Tolay', 'Gupkin', 'ashd@asd.com', '+380681234597', ['kokos','marakuai','potato', 'apple', 'drty', 'fdg']),
    new Client(5, 'Vitai', 'Tupkin', 'awsd@asd.com', '+380681239567', ['kokos','marakuai','potato', 'apple']),
    new Client(6, 'Sasha', 'Zhupkin', 'astd@asd.com', '+380681237567', ['kokos','marakuai','potato', 'apple']),
    new Client(7, 'Joe', 'Supkin', 'asnd@asd.com', '+380681294567', ['kokos','marakuai','potato', 'apple']),
    new Client(8, 'Arnold', 'Rupkin', 'acsd@asd.com', '+380681234567', ['kokos','marakuai','potato', 'apple' , 'sgs', 'eyrerer', 'rerrt']),
    new Client(9, 'Homer', 'Bupkin', 'asld@asd.com', '+380681214567',['kokos','marakuai','potato', 'apple']),
    new Client(10, 'Bart', 'Phupkin', 'asud@asd.com', '+380681034567',['kokos','marakuai','potato', 'apple']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients=client.sort((a,b) => a.order.length-b.ordered.length);