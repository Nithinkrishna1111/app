// const express= require('express')
// const app=express()
// const routes=require('./Routes/RegisterHandler')
//
// // require('dotenv').config()
// // // app.set('view engine',ejs)
// // app.use('/api/',require('./History'))
// // const Port=process.env.PORT || 3001
// //
// //
// // app.listen(PORT,()=>{
// //     const url='http://localhost:${POST}/'
// //     console.log('listening on ${url}')
// // })
// // const bodyParser=require('body-parser')
// //
// // app.use(bodyParser.urlencoded({extended:false}));
// // app.use(bodyParser.json());
// // app.use(express.static(__dirname+ '../src/app.js'))
// //
// // app.use('/',routes)
// // const PORT =4000;
// // app.listen(PORT,() =>{
// //     console.log('server is running')
// // })
// const publicdirectory=path.join(__dirname,'../src')
// app.use(express.static(publicdirectory))
// app.get('',(req,res)=>{
//     res.send('Hello Express!')
// })
// // app.get('/',(req,res)=>{
// //     res.send("login page")
// // })
// app.listen(8080,()=>{
//     console.log('server is up and running in 8080')
// })
