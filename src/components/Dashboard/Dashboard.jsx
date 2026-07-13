import {useState} from "react";
import './Dashboard.css'
function Dashboard(){
    const [count,setCount] = useState(250)
    const [count1,setCount1] = useState(50)
    const [count2,setCount2] = useState(40)
    const [count3,setCount3] = useState(40)
    const [students,setStudents] = useState([])
    function addStudents(){
        setStudents([
            "Rahul",
            "Ravi",
            "Anjali"
        ])
    }
    function add(){
        setCount(count+1)
        
    }
    function add1(){
        setCount1(count1+1)
        console.log(count1)
    }
    function add2(){
        setCount2(count2-1)
        console2.log(count2)
    }
    function add3(){
        setCount3(count3+1)
        console.log(count3)
    }

    return(<>
    <div className="card">
        
        <div className="card">
        <h1>Welcome Back</h1>
        <div className="card">
            <h2>{count}</h2>
        <button onClick={add}>AddStudents</button>
        <button onClick={()=>setCount(250)}>ResetStudents</button>
            <p>Total students</p>
        </div>
        <div className="card">
            <h2>{count1}</h2>
        <button onClick={add1}>AddCompanies</button>
            <p>Companies</p>
        </div>
        <div className="card">
            <h2>{count2}</h2>
        <button onClick={add2}>Decrease</button>
            <p>Pending</p>
        <div className="card">
            <h2>{count3}</h2>
        <button onClick={add3}>Increase</button>
            <p>Placed</p>
            </div>
        <div className="card">
          <button onClick={addStudents}>Students</button>

            <h3>Students Array</h3>

            {students.map((student, index) => (
                <p key={index}>{student}</p>
            ))}
        </div>
        </div>
        </div>
        </div>
        </>
    )
};
export default Dashboard;