import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Register(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {     
            headers: { 'enctype': 'multipart/form-data' }
        }

        axios.post('http://localhost:3004/reg',datastring,config)
        .then(function(res){
            if(res.data.status === 'Signup_Error'){
                alert('Signup Error');
                window.location.reload();
            }
            else if(res.data.status === 'Signup_Successfully'){
                alert('Created Successfully');
                window.location.href="/";
            }
        })
        .catch(function(err){
            console.log(err);
        })


    }

    return(
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                <div className="table-responsive bg-warning rounded">
                <form onSubmit={handlesubmit}>
                <table className="table table-bordered">
                    <thead className='text-center'>
                        <tr>
                            <th colSpan={2}>Registration Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" id="name" placeholder="Name"
                            className="form-control"/></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" id="email" placeholder='Email'
                                className='form-control'/>
                            </td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>
                                <input type="number" name="phone" id="phone" placeholder='Phone Number'
                                className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" name="address" id="address" placeholder='Address'
                                className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                                <input type="password" name="password" id="password" placeholder='Password'
                                className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Confirm Password</td>
                            <td>
                                <input type="password" name="confirmpassword" id="password" placeholder='Password'
                                className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center' colSpan={2}>
                                
                                    <button type="submit" name="data_send" id="data_send"
                                    className="btn btn-primary">
                                        Submit
                                    </button>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
                </div>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
        </>
    )
}