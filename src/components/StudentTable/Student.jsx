import { Link } from "react-router-dom";
import "./Student.css";

function Student({ students }) {
  return (
    <>
      <h2>Registered Students</h2>

      {students.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Branch</th>
                <th>CGPA</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.studentName}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.branch}</td>
                  <td>{student.cgpa}</td>
                  <td>
                    <Link to={`/student/${student.id}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Student;
