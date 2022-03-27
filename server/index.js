const Sequelize = require('sequelize');
const { UUID, UUIDV4, STRING, TEXT} = Sequelize
const connection = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/notesApp');

const Note = connection.define('note', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false
    },
    title: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    text: {
        type: TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

const seedData = async() => {
    try {
        await connection.sync({ force: true })
        const notes = await Promise.all([
            Note.create({ title: 'Errands', text: 'Groceries!'}),
            Note.create({ title: 'Greeting', text: 'Hello world!'})
        ])
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    Note,
    seedData
}