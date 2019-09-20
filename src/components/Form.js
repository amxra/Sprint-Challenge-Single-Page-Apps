import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Find (props) {
    const {search, validationSchema} = props;

    return (
        <Formik 
            validationSchema={validationSchema}
            initialValues={{name: ''}}
            onSubmit={search}
            render={props => {
                return (
                <Form>
                    <label>Search with Name</label>
                    <Field name='name' type='text' placeholder='Enter Name Here' />
                    <ErrorMessage name='name' component='div' />
                    <button type="submit">Submit</button>
                </Form>
                )
            }}
        />
    );
}

export default Find;
