import React from 'react'
import {connect} from 'react-redux'
import {ticketFindCode} from '../../selectors/ticketSelector'
import {startRemoveTicketSearch,startUpdateStatus} from '../../action/ticketAction'
import {Link,withRouter} from 'react-router-dom'

function SearchTicket(props){
    const redirect = () => {
        return props.history.push('/tickets')
    }
    const handleRemove = (id) => {
        props.dispatch(startRemoveTicketSearch({id,redirect}))
    }
    const handleChange = (id) => {
        const status = {
            isResolved: !props.ticket.isResolved
        }
        props.dispatch(startUpdateStatus({id,status}))
    }
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Code No</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employees</th>
                        <th>Message</th>
                        <th>Priority</th>
                        <th>Actions</th>
                        <th>Remove</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>{props.ticket && props.ticket.code}</td>
                            <td>{props.customer.length !== 0 && props.customer.find(cust=>cust._id==props.ticket.customer).name }</td>
                            <td>{props.department.length !== 0 && props.department.find(depart=>depart._id==props.ticket.department).name }</td>
                            <td>{props.employee.length !== 0 && props.ticket.employees.map(tick=>{
                                return props.employee.find(emp=>emp._id == tick._id).name
                            })}</td>
                            <td>{props.ticket && props.ticket.message}</td>
                            <td>{props.ticket && props.ticket.priority}</td>
                            <td><Link to={`/tickets/${props.ticket._id}`}><button className="btn btn-info">show</button></Link></td>
                            <td><button className="btn btn-danger" onClick={()=>{handleRemove(props.ticket._id)}}>remove</button></td>
                            <td><input type="checkbox" checked={props.ticket.isResolved} onChange={()=>{handleChange(props.ticket._id)}} name="isResolved"/></td>


                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state,props) => {
    const code = props.code
    return {
        ticket : ticketFindCode(state.tickets,code),
        customer : state.customers,
        department : state.departments,
        employee : state.employees
    }
}

export default withRouter(connect(mapStateToProps)(SearchTicket))