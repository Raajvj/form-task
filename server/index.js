const exp = require("express");
const mycon = require("mysql");
var bodyparser = require('body-parser');
const cors = require("cors");
const multer = require('multer');
const upload = multer();

const app = exp();
app.use(cors());
app.use(exp.json()); 
app.use(upload.array());
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: true }));
app.use(exp.static('public'));

var c = mycon.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "password",
    database : "task"
});

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log('Database Connected');}
})

app.post('/reg',(request,response)=>{
    let name = request.body.name;
    let email = request.body.email;
    let phone = request.body.phone;
    let address = request.body.address;
    let password = request.body.password;
    let confirmpassword=request.body.confirmpassword;


   let sql = 'insert into register(username,password,name,phone,address) values (?,?,?,?,?)';

            c.query(sql,[email,password,name,phone,address],(err,res)=>{
                if(err){
                    let s = {"status":"Signin_Error"};
                    response.send(s);
                }
                else{
                    let s = {"status":"Signup_Successfully"};
                    response.send(s);
                }
            })
        });

app.post('/',(request,response)=>{

    let username = request.body.username;
    let password = request.body.password;

    let sql = 'select * from register where username=?';

    c.query(sql,[username],(err,res)=>{
        if(err){
            let s = {"status":"username_error"};
            response.send(s);
        }
        else if(res.length > 0){
            let username1 = res[0].username;
            let password1 = res[0].password;
            let id = res[0].id;
            

            if(username1 === username && password1 === password){
                let s = {"status":"Login_Successfully","id":id};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid_Login"};
                response.send(s);
            }
        }
        else{
            let s = {"status":"Invalid_Login"};
            response.send(s);
        }
    })

})

app.listen(3004);
