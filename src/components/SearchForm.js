import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components"

const StyledSection = styled.section `

    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    color: grey;
    margin-top: 2%;
    align-items: flex-end;
    font-family: 'Cute Font', cursive;

    div{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    input{
        width: 70%;
        text-align: centre;
    }


    button{
      
        margin-top: 0.5rem;
        background-color: #00FF7F;
        width 30%;
        color: gray;
        padding: 0.5rem;
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
                     <div>
                    <label>Find Character</label>
                    <Field name='name' type='text' placeholder='Search Name' />
                    <ErrorMessage name='name' component='div' />
                    <button type="submit">Submit</button>
                    </div>
                    </StyledSection>
                </Form>
                )
            }}
        />
    );
}

export default Find;
