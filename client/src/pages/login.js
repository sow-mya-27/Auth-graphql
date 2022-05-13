import { useContext,useState } from "react";
import {AuthContext} from "../context/authContext";
import {useForm} from "../utility/hooks";
import {useMutation} from "@apollo/client";
import {gql} from "graphql-tag";
import { useNavigate } from "react-router-dom";

import {TextField,Button,Container,Stack,Alert} from "@mui/material"


const LOGIN_USER=gql `
    mutation login(
        $loginInput:LoginInput
    ){
        loginUser(
            loginInput:$loginInput
        ){
            email
            username
            token
        }
    }
`

function Login(props){
    const context=useContext(AuthContext)
    let navigate=useNavigate();
    const [errors,setErrors]=useState([])

    function loginUserCallback(){
        // console.log("hi")
        loginUser()
    }

    const {onChange,onSubmit,values}=useForm(loginUserCallback,{
        email:'',
        password:''
    })

    const [loginUser,{loading}]=useMutation(LOGIN_USER,{
        update(proxy,{data:{loginUser:userData}}){
            context.login(userData);
            navigate('/')
        },
        onError ({graphQLErrors}){
            setErrors(graphQLErrors)
        },
        variables:{loginInput:values}
    })

    return(
        <Container spacing={2} maxWidth="sm">
            <h3>Login</h3>
            <p>this is a register page, login below to create an account!</p>
            <Stack spacing={2} paddingBottom={2}>
                <TextField
                    label="Email"
                    name="email"
                    onChange={onChange}
                />
                <TextField
                    label="Password"
                    name="password"
                    onChange={onChange}
                />
            </Stack>
            {errors.map(function(error){
                return(
                    <Alert severity="error">
                        {errors.message}
                    </Alert>
                )
            })}
            <Button variant="contained" onClick={onSubmit}>Login</Button>
        </Container>
    )
}
export default Login;