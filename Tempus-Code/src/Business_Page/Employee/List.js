import React from 'react';
import { Link } from "react-router-dom";

function List({ setIsAdding, employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table-bEmployee'>
            <div className='employee-hero'>
                <h1>Employee Information</h1>
                <div className='switch-page-bEmployee'>
                    <div className='switched-div-bEmployee'>
                        Employee Info
                    </div>
                    <div>
                        <Link to="/bought"><p className='p1-bEmployee'>Inventory</p></Link>
                        {/*<Link to="/b-inventory"><p className='p1-bEmployee'>Inventory</p></Link>*/}
                    </div>
                    <div>
                        <Link to="/b-invoice"><p className='p2-bEmployee'>Invoice</p></Link>
                        {/*<Link to="/b-invoice"><p className='p2-bEmployee'>Invoice</p></Link>*/}
                    </div>    
                </div>
            </div>
            <table className='striped-table-bEmployee'>
                <thead>
                    <tr>
                        <th>Employee No.</th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Karan</td>
                        <td>7894858691</td>
                        <td>karan@gmail.com</td>
                        <td>$150,000</td>
                        <td>2003-03-11</td>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bEmployee">
                                    <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Shaikh</td>
                        <td>9696589425</td>
                        <td>shaikh@gmail.com</td>
                        <td>$130,000</td>
                        <td>2001-08-01</td>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bEmployee">
                                    <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Shriya</td>
                        <td>9657844811</td>
                        <td>shriya@gmail.com</td>
                        <td>$130,000</td>
                        <td>2003-03-28</td>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bEmployee">
                                    <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 4}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.mobileno}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="muted-button-bEmployee"
                                    >
                                        <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="muted-button-bEmployee"
                                    >
                                        <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setIsAdding(true)} className='round-button-bEmployee'>Add Button</button>
        </div>
    )
}

export default List;