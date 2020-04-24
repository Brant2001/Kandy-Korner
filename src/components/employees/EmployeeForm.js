import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const isManager = useRef()
    const isFullTime = useRef()
    const hourlyRate = useRef()

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)

        const isManagerBoolean = (isManager.current.value === "yes" ? true : false)
        const isFullTimeBoolean = (isFullTime.current.value === "yes" ? true : false)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId: locationId,
                isManager: isManagerBoolean,
                isFullTime: isFullTimeBoolean,
                hourlyRate: hourlyRate.current.value
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeJob">Manager: </label>
                    <input
                        type="boolean"
                        id="employeeJob"
                        ref={isManager}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Manager?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeHours">Full Time: </label>
                    <input
                        type="boolean"
                        id="employeeHours"
                        ref={isFullTime}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Full Time?"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeePay">Hourly Rate: </label>
                    <input
                        type="number"
                        id="employeePay"
                        ref={hourlyRate}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Hourly Rate"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(loc => (
                            <option key={loc.id} value={loc.id}>
                                {loc.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}