import React from 'react'
import './Suggestions.css'
export default function Suggestions(props) {
	
    const suggs = props.results.map((data,index) => {
        return <div className = "empdata" key = {index} onClick = {() => props.update(data.name,data.Emp_id)}>
           
		   <span className = "large">{data.name}</span>
            <span className = "right large">{data.Emp_id}</span>
            <br />
            <span className = "small">{data.dept}</span>
            <span className = "right small">Emp-ID</span>
            <hr/>

        </div>
    })
	
	
    return (
        <div className = "suggestions">
            {suggs}
        </div>
    )
}