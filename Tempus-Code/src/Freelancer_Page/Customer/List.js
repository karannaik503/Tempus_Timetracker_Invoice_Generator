import React from 'react';
import { Link } from "react-router-dom";

function List({ setIsAdding, customers, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <div className='employer-hero'>
                <h1>Client Information</h1>
                <div className='switch-page-fEmployer'>
                    <div className='switched-div-fEmployer'>
                        Client Info
                    </div>
                    <div>
                        <Link to="/f-timesheet"><p className='p1-fEmployer'>Time Sheet</p></Link>
                    </div>
                    <div>
                        <Link to="/f-invoice"><p className='p2-fEmployer'>Rates & Invoice</p></Link>
                    </div>
                </div>
            </div>
            <table className='striped-table-fEmployer'>
                <thead>
                    <tr>
                        <th>Client No.</th>
                        <th>Client Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Project Cost</th>
                        <th>Due Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rajesh</td>
                        <td>9657844911</td>
                        <td>rajesh@gmail.com</td>
                        <td>$75</td>
                        <td>2023-05-28</td>
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
                        <td>Keshav</td>
                        <td>7959449866</td>
                        <td>keshav@gmail.com</td>
                        <td>$50</td>
                        <td>2023-04-28</td>
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
                        <td>Sanjana</td>
                        <td>7556814996</td>
                        <td>sanjana@gmail.com</td>
                        <td>$75</td>
                        <td>2023-04-25</td>
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
                    {customers.length > 0 ? (
                        customers.map((customer, i) => (
                            <tr key={customer.id}>
                                <td>{i + 4}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.mobileno}</td>
                                <td>{customer.email}</td>
                                <td>{formatter.format(customer.salary)}</td>
                                <td>{customer.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(customer.id)}
                                        className="muted-button-fEmployer"
                                    >
                                        <img className='edit-logo-fEmployer' alt="edit" src="./images/edit-button.png"/>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(customer.id)}
                                        className="muted-button-Employee"
                                    >
                                        <img className='delete-logo-fEmployer' alt="delete" src="./images/delete-button.jpg"/>
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
            <button onClick={() => setIsAdding(true)} className='round-button-fEmployer'>Add Button</button>
        </div>
    )
}

export default List;