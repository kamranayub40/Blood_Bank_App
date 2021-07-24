import React, {createContext,useState,Children,useContext} from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import firestore from '@react-native-firebase/firestore'
// import {Name} from '../Screens/Sign'
// import{AuthContext1} from '../Screens/Sign'
export const AuthContext=createContext();
 const AuthProvider=({children},props)=>{
    const[user,setUser]=useState()
    const [use_id,setuid]=useState()
    // const {user_info}=React.useContext(AuthContext1)
    // const showFlash = (name) => {
    //     setName([...Name, name]);
    //   };

    
    // const[name,setName]=useState()
    return(
        <AuthContext.Provider
        value={{
            user,
                setUser,
                use_id,
                setuid,
                // name,
                // setName,
                login:async(email,password)=>{
                    try{
                      await  auth().signInWithEmailAndPassword(email,password)
                    } catch(e){
                        console.log(e);
                    }
                },
                 register:async(email,password)=>{
                     try{
                         await auth().createUserWithEmailAndPassword(email, password)
                         .then( async function (userCreds) {
                             const use_uid ={
                                 id:userCreds.user.uid

                             }
                            await  setuid(use_uid) 
                            //  console.log("Current USer",use_uid)
                            // await database().ref('/').child('User_info/').update(use_uid)
                            // await database().ref('/').child('User_info/').update(use_uid)


                            // await setuid(user)
                             console.log("Current USer convert",use_id)
                             console.log("Name",props.name)
                            // console.log("UId",uid)
                            // console.log("User name",props.Name)
                            // await firestore().collection('User_Info').add({User_Id:uid});
                            // let user={
                            //     user_id:uid
                            // }
                            // console.log("User_Id",user)
                        //   database().ref('/').child('/User_Info/').update(user)
  
                           
                    })
                        // const {uid}=credential
                        // const user={
                        //     user_Id:uid
                        // }
                    // }
        //   name: {
        //     first: firstName,
        //     last: lastName
        //     }
    //                         firestore()
    //   .collection('Products')
    //   .add({
    //   // user:user.uid,
    //     // user:user.uid,
    //     // Name:Name,
    //     // postimg:imageUrl,
    //     User:uid
    //   })
    //     .then(()=>{
    //       console.log("Post Added")
    //     })
                            
                        
                        // })
                        // const uid =auth().user.uid; 

                        // const db = firestore();

                        // await db
                        // .collection('Products')
                        // .doc(uid)              // <----
                        // .add({
                        // id:uid,             // <----
                        // });
                        //                 // return firestore()
                        // .collection('Products')
                        // .add({
                        //     user:user.uid
                        // })
                        
                    
                    }catch(e){
                        console.log(e)

                    }
                },
                logout:async()=>{
                    try{
                        await auth().signOut();
                    }catch(e){
                        console.log(e)
                    }
                }

            }}
            >
                {children}
            

            

        </AuthContext.Provider>
    )
}
export default AuthProvider