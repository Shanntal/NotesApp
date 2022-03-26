const app = require('./app');
const port = process.env.PORT || 3000;
const { seedData } = require('./index');

const init = async() => {
    try {
        await seedData();
        app.listen(port, ()=> 
        console.log(`listening on port ${port}`));
    }
    catch(error) {
        console.log(error)
    }
}

init();