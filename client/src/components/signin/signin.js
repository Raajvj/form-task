import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Signin(){

        const handlesubmit = async(event) => {
            event.preventDefault();

            var datastring = new FormData(event.target);
            var config = {headers:{'enctype':'multipart/form-data'}};
            
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if(username === '' || username === null){
                alert('enter username');
            }
            else if(password === '' || password === null){
                alert('enter password');
            }
            else{
                
                await axios.post('http://localhost:3004/Signin',datastring,config)
                      .then(function(res){
                        if(res.data.status === 'username_error'){
                            alert('Invalid username');
                            window.location.reload();
                        }
                        else if(res.data.status === 'Invalid_Login'){
                            alert('Invalid Login');
                            window.location.reload();
                        }
                        else if(res.data.status === 'Login_Successfully'){
                            alert('login Successfully');
                            window.location.reload();
                        }
                      })
                      .catch(function(res){
                        alert(res);
                        window.location.reload();
                      })

            }

        }

    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className='col-lg-3'>&nbsp;</div>
                <div className='col-lg-6'>
                <div className="table-responsive rounded">
                    <form onSubmit={handlesubmit}>
                    <table className="table table-bordered bg-warning">
                        <thead className='text-center'>
                            <tr>
                                <th colSpan={2}>Sign-in</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td><input type="text" name="username" id="username" placeholder="Username" className='form-control'/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password" name="password" id="password" 
                                placeholder='Password' className='form-control'/></td>
                            </tr>
                            <tr>
                                <td className='text-center'>
                                    <Link to="/reg">
                                    <button type="button" name="data_send" id="data_send"
                                    className="btn btn-danger">
                                        Register
                                    </button>
                                    </Link>
                                </td>
                                <td className='text-center'>
                                    <button type="submit" name="data_submit" id="data_submit"
                                    className="btn btn-primary">Sign in</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </form>
                </div>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
        </div>
        </>
    )
}