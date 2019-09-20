import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components"

const StyledSection = styled.section `

    display: flex;
    flex-direction: column;
    width: 40%;
    text-align: center;
    color: grey;
    margin-top: 2%;
    align-items: center;


    button{
      
        margin-top: 0.5rem;
        background-color: #BEBEBE;
        width 20%;
        color: gray;
    }

`


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
                    <StyledSection>
                    <label>Search</label>
                    <Field name='name' type='text' placeholder='Enter Name Here' />
                    <ErrorMessage name='name' component='div' />
                    <button type="submit">Submit</button>
                    </StyledSection>
                </Form>
                )
            }}
        />
    );
}

export default Find;
