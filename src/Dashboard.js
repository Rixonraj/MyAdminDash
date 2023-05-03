import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { Chart } from "react-google-charts";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
      loadUser()
      console.log("users",users)
  }, []);

  const loadUser = async () => {
      try {
          const userData = await axios.get("https://60ec88a8a78dc700178adb9f.mockapi.io/myStudents");
          setUsers(userData.data)
          setLoading(false)
          
      } catch (error) {
          alert("error")
      }
  }



  const data = [
    ["RollNo", "Other Student's Marks", "My Student's Marks"]
  ];

  for (let index = 0; index < users.length; index++) {
    data[index + 1] = [users[index].id , (users[index].Selected ? users[index].marks : 0),(users[index].Selected ? 0 : users[index].marks) ];
    
  }

  const options = {
    title: "Students Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (


    <div className="container-fluid">
          <Chart chartType="Bar" width="100%" height="400px" data={data} options={options} />
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div className="row">
                    {users.map((user)=>{
                      return  <Card user={user}/>
                    })}
                    </div>
    </div>
  )
}

export default Dashboard