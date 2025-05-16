const dotenv = require("dotenv")
const { default: mongoose } = require("mongoose")
dotenv.config({path: "./config.env"})

// Import the app ect library
const app = require("./app")

const DB = process.env.DATABASE.replace(
    'PASSWORD',
    process.env.DATABASE_PASSWORD,
)

// Establish connection in the database
const local_DB = process.env.DATABASE_LOCAL
mongoose.connect(local_DB).then((con)=>{
    // console.log(con.connections)
    console.log("DB connection successful")
}).catch(error => console.log(error));

 

// Specify the server port
const port = 4001
// Start listening for incoming request on the web
app.listen(port, () => {
    console.log(`App running on port : ${port}`)
})