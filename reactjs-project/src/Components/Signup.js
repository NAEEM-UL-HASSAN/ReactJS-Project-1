import React from 'react'
import PropTypes from 'prop-types'

export default function Signup(props) {

    const submit_form = () => {
        if (document.getElementById('name').value === '' || document.getElementById('email').value === '' || document.getElementById('password').value === '' || document.getElementById('c-password').value === '' || document.getElementById('age').value === '') {
            props.alert('All Fields are Required!', 'danger');
        }
        else {
            let name = document.getElementById('name');
            let regex = /^[a-zA-Z ]+$/;
            if (!regex.test(name.value)) {
                props.alert('Name must contain only letters!', 'danger');
            }
            else if (document.getElementById('password').value.length < 8) {
                props.alert('Password must contain at least 8 characters!', 'danger');
            }
            else if (!document.getElementById('password').value.match(/[a-z]/g)) {
                props.alert('Password must contain at least one lowercase letter!', 'danger');
            }
            else if (!document.getElementById('password').value.match(/[A-Z]/g)) {
                props.alert('Password must contain at least one uppercase letter!', 'danger');
            }
            else if (!document.getElementById('password').value.match(/[0-9]/g)) {
                props.alert('Password must contain at least one number!', 'danger');
            }
            else if (document.getElementById('password').value !== document.getElementById('c-password').value) {
                props.alert('Password and Confirm Password must be same!', 'danger');
            }

            else {
                props.alert('Form Submitted Successfully!', 'success');
            }
        }
    }
    return (
        <div className="container rounded my-4 p-5 bg-dark text-light" style={{ border: '4px solid white' }}>
            <form className="row g-3 ">

                <div className="col-md-4">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" Required />
                </div>

                <div className="col-md-4">
                    <label htmlFor="email" className="form-label">Username</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        <input type="email" className="form-control" id="email" Required />
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" Required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="c-password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="c-password" Required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" Required />
                </div>
                <div className="col-12">
                    <button className="btn btn-success" onClick={submit_form} type="submit">Submit form</button>
                </div>
            </form>
        </div>
    )
}
