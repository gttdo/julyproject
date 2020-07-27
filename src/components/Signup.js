import React, {Component} from 'react';

class Signup extends Component {
    render(){
        return(
            <div className="signup">
                <h2 className="signup--header heading-2">Let's start with the basics!</h2>
                <form action="#" className="signup--form">
                    <input type="text" className="signup--form_name input" placeholder="Name"/>
                    <input type="text" className="signup--form_lname input" placeholder="Last Name"/>
                    <input type="text" className="signup--form_email input" placeholder="email"/>
                    <input type="text" className="signup--form_password input" placeholder="password"/>
                    <button type="submit" name="submit" value="text" className="signup--form_button btn-1">Signup Now</button>
                </form>
            </div>
        )
    }
}
export default Signup;