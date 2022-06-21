import React,{FC} from 'react'
import { Circles, Rings } from  'react-loader-spinner'
import { useRouter } from 'next/router'
// import { useMutation } from "@apollo/client";
import { useQuery } from '@apollo/client';
import {USER_VERIFY} from "../../graphqlOperations/userVerification"


const Signuploader:FC = () => {
  return (
    <div className='loader'>
        <Rings color="#00BFFF" height={200} width={200}/>
    </div>
  )
}

const Post:FC = ():any => {

  const router = useRouter();
  const token = String(router.query.token);
  console.log(token)
  console.log(typeof token)

  const {data, error, loading}= useQuery(USER_VERIFY,{
  
      variables : {
        verificationId: token
      }
  
    // userVerification: token
  })


   

  if(loading) console.log("loading")
  if(data) console.log(data);
  if(error) console.log(error);

  
  return (
    <div>
      {/* <p>{token}</p> */}
      <Signuploader />
    </div>

  )
  
}




export default Post