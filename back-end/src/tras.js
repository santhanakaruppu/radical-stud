import express, { json } from 'express';
import {db, connectToDb} from './db.js'
// import { student } from './student.js';

const app=express();
app.use(express.json());

// const student=[{
//     "id": "1",
//     "first name": "Raja",
//     "last name": "Pandi",
//     "location": "Madurai",
//     "email": "raja123@gamil.com",
//     "dob": "28/01/2000",
//     "education": "B.E"
// }]


app.get('/api/student',async(req, res) => {
   
    const student=await db.collection('student').find().toArray();
    console.log(student);
    if (student){
        res.json(student);
    }else{
        res.sendStatus(404);
    }
    //res.json(student);

});

app.get('/api/student/:id',async(req,res) =>{
    const {id}=req.params;
    const student=await db.collection('student').findOne({id:id})
    console.log(student);
    if (student){
        res.json(student);
    }else{
        res.sendStatus(404);
    }
})

app.put('/api/student/:id', async(req, res) => {
    const {id} =req.params;
    const {fname, lname, locat, email, dob, edu}=req.body;
    await db.collection('student').updateOne({id}, {
        $set: {first_name: fname, last_name: lname, location: locat, email:email,dob:dob,education:edu}},
    );
    const studenti=await db.collection('student').findOne({id:id});
    const student=await db.collection('student').find().toArray();
    
    if (studenti){
       
        res.json(studenti);
    }
    else{
        res.send(`unable to update studnent`);
    }
});

app.post('/api/student', async(req, res) => {
    const {fname, lname, locat, email, dob, edu, about}=req.body;
    const st=await db.collection('student').find().toArray();
    let max=0;
    console.log(st);
    let count=st.forEach(element => { if(element.id > max){
        max=element.id;

    }
    //console.log(count);
     console.log(max);
    });
    max=parseInt(max)+1;
    let sid=max.toString()
    // let u=s.map(x=>x.id);
    // console.log(u);
    console.log(count);
    
    //let sid=u.toString();
    await db.collection('student').insertOne(
        {id: sid,first_name: fname, last_name: lname, location: locat, email: email, dob: dob, education: edu, about: about},
    );
      
    const student=await db.collection('student').find().toArray();
    
    if (student){
        res.json(student);
    }else{
        res.sendStatus(404);
    }
});

    
    // const student=await db.collection('student').find().toArray();
       
    // if (dstudent){
    //     res.json('successfully deleted');
    // }else{
    //     res.sendStatus(404);
    // }
app.delete('/api/student/:id', async(req, res) => {
    const {id}=req.params;
    await db.collection('student').deleteOne({id}, (err, result)=>{
        if(err) throw err
        //res.send('successfully deleted');
    });
    const student=await db.collection('student').find().toArray();
    
    if (student){
        res.json(student);
    }else{
        res.sendStatus(404);
    }
});


connectToDb( ()=>{
    console.log('successfully connected to database');
    app.listen(8000, () => {
        console.log('server listen at the server port 8000');
    });
});