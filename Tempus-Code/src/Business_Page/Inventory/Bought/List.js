import React from 'react';
import { Link } from "react-router-dom";

function List({ setIsAdding, employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table-bought'>
            <div className='employee-hero'>
                <h1>Inventory</h1>
                <div className='switch-page-bought'>
                    <div>
                        <Link to="/b-employee"><p className='p1-bInventory'>Employee Info</p></Link>
                    </div>
                    <div className='switched-div-bought'>
                        Inventory
                    </div>
                    <div>
                        <Link to="/b-invoice"><p className='p2-bInventory'>Invoice</p></Link>
                        {/*<Link to="/b-invoice"><p className='p2-bought'>Invoice</p></Link>*/}
                    </div>    
                </div>
                <div className='switch-page-bought2'>
                    <div className='switched-div-bought2'>
                        Products Bought
                    </div>
                    <div>
                        <Link to="/sold"><p className='p1-bought2'>Products Sold</p></Link>
                    </div>    
                </div>
            </div>
            <table className='striped-table-bought'>
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Name</th>
                        <th>Mobile No.</th>
                        <th>Email</th>
                        <th>Total Amount</th>
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
                                <button className="muted-button-bought">
                                    <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bought">
                                    <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
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
                                <button className="muted-button-bought">
                                    <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bought">
                                    <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
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
                                <button className="muted-button-bought">
                                    <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bought">
                                    <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
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
                                        className="muted-button-bought"
                                    >
                                        <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="muted-button-bought"
                                    >
                                        <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
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
            <button onClick={() => setIsAdding(true)} className='round-button-bought'>Add Button</button>
        </div>
    )
}

export default List;