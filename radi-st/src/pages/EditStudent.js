import axios from "axios";
import { Link , useParams} from "react-router-dom";
import { useState, useEffect } from "react"; 
import {AiOutlineArrowLeft} from 'react-icons/ai';


const EditStudent= () =>{

    const {id}=useParams({});
    
    console.log(id);
      
     

    const [inval, setval]=useState({
        fname:"", 
        lname:"",
        locat:"",
        email:"",
        dd:"",
        mm:"",
        yy:"",
        edu:"",
        about:"",
      })

      useEffect(() => {
        loadStudentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadStudentDetails = async() => {
      const response = await axios.get(`/api/student/${id}`);
      const newdata=response.data;
      const date=newdata[0].dob.split('/');
      console.log(date);
      const sdata={
        fname:newdata[0].first_name,
        lname:newdata[0].last_name,
        locat:newdata[0].location,
        email:newdata[0].email,
        dd:date[0],
        mm:date[1],
        yy:date[2],
        edu:newdata[0].education,
        about:newdata[0].about,
      }


      setval(sdata);
  }

      const setdata=(e) =>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setval((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }

    //   if(sdata){
    //     setval(sdata);
    //   }

    //   const edata=StudentInfo.find(s=> s.id===id);
    //   console.log(edata);
    //   const date=edata.dob.split('/');
    //   console.log(date);
    const [getData, setSatae]= useState([]);
    useEffect(() => {
        const loadStudentInfo= async () => {
            const response = await axios.get(`/api/student/${id}`);
            const newStudentInfo = response.data;
            setSatae(newStudentInfo);
            
        }
        loadStudentInfo();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    console.log(getData);
    
    
    //   const newdata={
    //     "fname": "SANTHANA karuppu",
    //     "lname": "K",
    //     "locat": "Madurai",
    //     "email": "santhanakaruppu22@gmail.com",
    //     "dd": "22",
    //     "mm": "12",
    //     "yy": "2001",
    //     "edu": "bsc computer science",
    //     "about": "vellaichamy nadar college"
    // }
      
//    console.log(sdata);
    // console.log(newdata.fname);
    // console.log(getData.first_name);
    

// document.getElementById('fname').value="sk";
    
   

     
    

      const register= async() => {
        
        const response= await axios.put(`/api/student/${id}`,{
          fname: inval.fname,
          lname: inval.lname,
          locat: inval.locat,
          email: inval.email,
          dob: inval.dd+'/'+inval.mm+'/'+inval.yy,
          edu: inval.edu,
          about: inval.about,
    
        });
        if (response){
          // window.alert('success');
          console.log(response);
        }
    }
    
    
      const black={
        color:"black",
      }
      const margin={
        marginTop: "30PX",
        
      }
      return (
            <div className="container">
              <div className="home">
                <Link to="/" style={black}><AiOutlineArrowLeft size={30}/></Link>
              </div>
              <div className="row" style={margin}>
                  <div className="col" >
                  <label className="lab">First Name :</label>
                    <input type="text" id="fname" name="fname" value={inval.fname} onChange={setdata} class="inputk" />
                  </div>
                  <div className="col">
                    <label className="lab">Last Name :</label>
                    <input type="text" id="lname" name="lname" value={inval.lname} onChange={setdata} className="inputk" />
                  </div>
                  <div className="row"style={margin}>
                    <div className="col">
                    <label className="lab">Location &nbsp;&nbsp; :</label>
                    <input type="text" id="locat" name="locat" value={inval.locat} onChange={setdata} className="inputk" />
                   </div>
                    </div>
                    <div className="row"style={margin}>
                    <div className="col">
                    <label className="lab">Email   &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  :</label>
                    <input type="text" id="email" name="email"  value={inval.email} onChange={setdata}className="inputk" />
                   </div>
                    </div>
                    <div className="row"style={margin}>
                    <div className="col">
                    <label className="lab">DOB    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;   :</label>
                    <input type="number" placeholder="    DD" id="dd" name="dd" value={inval.dd} onChange={setdata}className="date" />
                    <input type="number" placeholder="    MM" id="mm" name="mm" value={inval.mm} onChange={setdata} className="date" />
                    <input type="number" placeholder="   YYYY" id="yy" name="yy" value={inval.yy} onChange={setdata}  className="date" />
                   </div>
                    </div>
                    <div className="row"style={margin}>
                    <div className="col">
                    <label className="lab">Education&nbsp; :</label>
                    <input type="text" className="inputk" id="edu" name="edu" value={inval.edu} onChange={setdata} />
                   </div>
                    </div>
                    <div className="row"style={margin}>
                    <div className="col">
                    <label className="lab">About &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;:</label>
                    <textarea className="textarea" id="about" name="about" value={inval.about} onChange={setdata} />
                   </div>
                    </div>
                    <div className="row"style={margin}>
                      <div className="col">
                        <Link to="/">
                      <button  onClick={register} className="submit">Submit</button>
                      </Link>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
    

export default EditStudent;