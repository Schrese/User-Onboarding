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
        <div>
            <Form className = 'form-container'>
                <Field 
                    className = 'field'
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
                    className = 'field'
                    type = 'text' 
                    name = 'email' 
                    placeholder = 'email'
                    // value = {values.email}
                    // onChange = {handleChange}
                    />
                    {touched.email && errors.email && (
                        <p>{errors.email}</p>
                    )}
                <Field 
                    className = 'field'
                    type = 'password' 
                    name = 'password' 
                    placeholder = 'password'
                    // value = {values.password}
                    // onChange = {handleChange}
                    />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}

                <label>Agree to our Terms:
                    <Field 
                        type = 'checkbox' 
                        name = 'TOS' 
                        checked = {values.TOS}
                        />
                        {touched.TOS && errors.TOS && (
                        <p>{errors.TOS}</p>
                    )}
                </label>
                <button type = 'submit'>Submit</button> 

            </Form>
            <div className = 'container'>
                {newUser.map(newU => (
                    <ul className = 'userCard' key = {newU.id}>
                        <li>Name: {newU.name}</li>
                        <li>Email: {newU.email}</li>
                        <li>Password: {newU.password}</li>
                        <li>Your Soul Is Now Mine!!!!!</li>
                    </ul>
                ))}
            </div>

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
        name: Yup.string().min(3).required('Need a Longer Name'),
        email: Yup.string().required(),
        password: Yup.string().required(),
        TOS: Yup.boolean().oneOf([true], 'You must agree to our terms!').required()
    })
    
})(MyForm);

export default FormikMyForm;