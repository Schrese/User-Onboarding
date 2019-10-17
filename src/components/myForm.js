import React, {useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import Axios from 'axios';

const MyForm = () => {
    const [newUser, setNewUser] = useState();

    return (
        <div>Hi Again
            <Form>
                <Field 
                    type = 'text' 
                    name = 'name' 
                    placeholder = 'name'/>
                <Field 
                    type = 'text' 
                    name = 'email' 
                    placeholder = 'email'/>
                <Field 
                    type = 'password' 
                    name = 'password' 
                    placeholder = 'password'/>

                <label>Agree to our Terms:
                    <Field 
                        type = 'checkbox' 
                        name = 'TOS' />
                </label>
                <button type = 'submit'>Submit</button> 

            </Form>


        </div>
    )
}
const FormikMyForm = withFormik({
    mapPropsToValues({name, email, password, TOS}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            TOS: TOS || false
        }
    }
    
})(MyForm);

export default FormikMyForm;