import React, {Component} from 'react';

class Signup extends Component {
    render(){
        return(
            <div className="signup">
                <h2 className="signup--header">Let's start with the basics!</h2>
                <form action="#" class="signup--form">
                    <input type="text" class="signup--form_name input" placeholder="Name"/>
                    <input type="text" class="signup--form_lname input" placeholder="Last Name"/>
                    <input type="text" class="signup--form_email input" placeholder="email"/>
                    <input type="text" class="signup--form_password input" placeholder="password"/>
                    <button type="submit" name="submit" value="text" class="signup--form_button">Signup Now</button>
                </form>
            </div>
        )
    }
}
export default Signup;