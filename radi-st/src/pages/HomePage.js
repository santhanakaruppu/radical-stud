// import {AiOutlineSearch} from 'react-icons';
//import {BiSearch} from 'react-icons';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from 'axios';
import {FaUserEdit} from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
//import {BsSearch} from 'react-icons/bs'
const HomePage= () =>{
    const [StudentInfo, setStudentInfo]= useState([]);
    useEffect(() => {
         getSt();
        
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  //   async () => {
  //     const response = await axios.get(`/api/student`);
  //     const newStudentInfo = response.data;
  //     setStudentInfo(newStudentInfo);
      
  // }

    const searchSt= (query) => {
      console.log(query);
      if(query===""){
        getSt();
      }
      
      const nst=StudentInfo.filter((s)=> s.first_name.toLowerCase().includes(query));
      if(nst){
        setStudentInfo(nst);     
      }
      else{
        getSt();
        }
        
      
      // let sInfo={}
      // const st=async () => {
      //   const response = await axios.get(`/api/student`);
      //     sInfo= response.data;
      // }
      // console.log(sInfo);
      // let fist=sInfo.filter(s => (s.first_name.toLowerCase()=== query));
      // console.log(fist)
      
    }

    const getSt= async () => {
      const response = await axios.get(`/api/student`);
      const newStudentInfo = response.data;
      setStudentInfo(newStudentInfo);
      }

    console.log(StudentInfo);
    const btn={width: "120px",
    height: "45px",
    left: "1172px",
    top: "186px",
    background: "#000000",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#FFFFFF",
    
  }

    const DeleteSt=async(id)=>{
          let con=window.confirm(`Are you sure to delete the user with id:${id}`);
          if(con){
            const res= await axios.delete(`/api/student/${id}`);
            console.log(res);
            getSt();
          }
          
        
    }
     
    return (
        <div className='mt-5'>
          <div className='container'>
            <h2 align="left" >Student management system</h2>
            <div className='add_btn'>
              <div className='search'>
              {/* <div class="input-group mb-3">
                 <input type="text" class="form-control"
                  placeholder="Recipient's username" aria-label="Recipient's username" 
                  aria-describedby="basic-addon2" />
                  <i class="bi bi-incognito"></i>
                 
  </div> */}
            {/* <input type="text" align="left" placeholder="Search"id="form1" class="search" />
            <BsSearch /> */}
              <form>
              <input type="search" onChange={(e)=>searchSt(e.target.value)} placeholder="Search"/>
              <button type="submit">Search</button>
            </form>
            {/* <form class="nosubmit">
              <input class="nosubmit" type="search" placeholder="Search..."/>
            </form> */}
            </div>
            <Link to={`/student`}><button type="button" className="btn btn-dark" style={btn}>ADD</button>
            </Link>
              </div>
                   
                    
            <table className="table table-hover">
        
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Location</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
      <th scope="col">Education</th>
      <th scope="col">Action</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {StudentInfo.map(student =>(
        <tr key={student.id}>
           <td>{student.id}</td>
           <td>{student.first_name}</td>
           <td>{student.last_name}</td>
           <td>{student.location}</td>
           <td>{student.email}</td>
           <td>{student.dob}</td>
           <td>{student.education}</td>
           <td>
           <Link to={`/student/${student.id}`}>
           <button className='btn btn-light'> <FaUserEdit/> Edit</button>
           </Link>
           </td>
           <td>
           <button className='btn btn-light' onClick={()=>DeleteSt(student.id)}> <RiDeleteBin5Line/> Delete </button>
           </td>

         </tr>
    ))}
    
    </tbody>
  </table>
            
        
  </div>
        </div>
    );
}

export default HomePage;