import React from 'react'
// import AuthProvider from '../config/Auth'
import AuthProvider from '../config/Auth'
import Routes from '../config/routes'
const Provider=()=>{
    return(
        <AuthProvider>

            <Routes/>
        </AuthProvider>
    )
}
export default Provider