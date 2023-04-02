import React from 'react'
import './Tabular.css'
export default function Tabular(props) {
	
    const data = props.results.map((d,index) => {
		
        return <table key = {index}>
            <thead>
                <tr>
                    <td colSpan = "2" className = "bold">{d.name} Details</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className = "bold">name</td>
                    <td>{d.name}</td>
                </tr>
                <tr>
                    <td className = "bold">age</td>
                    <td>{d.age}</td>
                </tr>
                <tr>
                    <td className = "bold">email</td>
                    <td>{d.email}</td>
                </tr>
                <tr>
                    <td className = "bold">phone_number</td>
                    <td>{d.Phone_Number}</td>
                </tr>
                <tr>
                    <td className = "bold">dept</td>
                    <td>{d.dept}</td>
                </tr>
                <tr>
                    <td className = "bold">status</td>
                    <td className = {d.status === "Active" ? "active" : "inactive"}>{d.status}</td>
                </tr>
                <tr>
                    <td className = "bold">
                        emp_id
                    </td>
                    <td>{d.Emp_id}</td>
                </tr>
            </tbody>
        </table>
    })
	
    return (
        <div className = "outerdiv">
            <div className = "innerdiv">
                <h2 className = "close" onClick = {() => props.onclick()}>&#10060;</h2>
                {data}
            </div>
        </div>
    )
}