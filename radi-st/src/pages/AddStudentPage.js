import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import {AiOutlineArrowLeft} from 'react-icons/ai';



const AddStudent= () =>{
  
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
  const register= async() => {
    
    const response= await axios.post('/api/student',{
      fname: inval.fname,
      lname: inval.lname,
      locat: inval.locat,
      email: inval.email,
      dob: inval.dd+'/'+inval.mm+'/'+inval.yy,
      edu: inval.edu,
      about: inval.about,

    });
    if (response){
      window.alert("Student added successfully");
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

export default AddStudent;