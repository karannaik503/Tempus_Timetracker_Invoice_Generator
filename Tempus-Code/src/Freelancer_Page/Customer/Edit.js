import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ customers, selectedCustomer, setCustomers, setIsEditing }) {

    const id = selectedCustomer.id;

    const [firstName, setFirstName] = useState(selectedCustomer.firstName);
    const [mobileno, setMobileNo] = useState(selectedCustomer.mobileno);
    const [email, setEmail] = useState(selectedCustomer.email);
    const [salary, setSalary] = useState(selectedCustomer.salary);
    const [date, setDate] = useState(selectedCustomer.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !mobileno || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const customer = {
            id,
            firstName,
            mobileno,
            email,
            salary,
            date
        };

        for (let i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                customers.splice(i, 1, customer);
                break;
            }
        }

        setCustomers(customers);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${customer.firstName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container-fEmployer">
            <form onSubmit={handleUpdate}>
                <h1>Edit Customer</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="mobileno">Last Name</label>
                <input
                    id="mobileno"
                    type="text"
                    name="mobileno"
                    value={mobileno}
                    onChange={e => setMobileNo(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" className='update-button-fEmployer' />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="cancel-button-fEmployer"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit;