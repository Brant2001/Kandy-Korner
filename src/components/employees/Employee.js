import React from "react"

export default ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Works at the {location.address} branch</div>
        <div className="employee__isManager">Manager: {employee.isManager ? "yes" : "no"}</div>
        <div className="employee__isFullTime">Full Time: {employee.isFullTime ? "yes" : "no"}</div>
        <div className="employee__hourlyRate">Makes {employee.hourlyRate}$ an hour</div>
    </section>
)