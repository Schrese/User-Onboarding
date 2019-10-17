import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';



const MyForm = ({setShowForm, values, status, errors, touched}) => {
    const [newUser, setNewUser] = useState([]);

    useEffect(() => {
        status && setNewUser (newUser => [...newUser, status])
    },[status])

    return (
        <div>Hi Again
            <Form>
                <Field 
                    type = 'text' 
                    name = 'name' 
                    placeholder = 'name'
                    // value = {values.name}
                    // onChange = {handleChange}
                    />
                    {touched.name && errors.name && (
                        <p>{errors.name}</p>
                    )}
                    
                <Field 
                    type = 'text' 
                    name = 'email' 
                    placeholder = 'email'
                    // value = {values.email}
                    // onChange = {handleChange}
                    />
                <Field 
                    type = 'password' 
                    name = 'password' 
                    placeholder = 'password'
                    // value = {values.password}
                    // onChange = {handleChange}
                    />

                <label>Agree to our Terms:
                    <Field 
                        type = 'checkbox' 
                        name = 'TOS' 
                        checked = {values.TOS}
                        />
                </label>
                <button type = 'submit'>Submit</button> 

            </Form>


        </div>
    )
}
const FormikMyForm = withFormik({
    mapPropsToValues({ name, email, password, TOS }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            TOS: TOS || false
        };
    },
    handleSubmit(values, {setStatus}) {
        axios.post('https://reqres.in/api/users', values)
            .then(res => {setStatus(res.data);})
            .catch(err => console.log('what have you done?', err.response));
    },
    validationSchema: Yup.object().shape({
        name: Yup.string(3).required('Need a Longer Name'),
        email: Yup.string().required()
    })
    
})(MyForm);

export default FormikMyForm;