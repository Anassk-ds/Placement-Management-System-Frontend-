import Student from "../../StudentTable/Student";
import { Link } from "react-router-dom";
function Students(){
    const students = [
        {
            id:1,
            name:"Raju",
            email:"raju@gmail.com",
            branch:"CSE",
            cgpa:9
        }
    ]
    return(
        <>
        <h1>Student Management</h1>
        <p>Manage all registered students here</p>
        <Link to="/Register">
        <button>
            Add New Student 
        </button>
        
        </Link>
        
        <Student students={students} />
        </>
    )
};
export default Students;