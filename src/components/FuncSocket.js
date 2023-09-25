import React,{useState,useEffect} from 'react'
import {io} from "socket.io-client"
function FuncSocket() {
    const[text,setText]=useState("")
    let socket=io("http://localhost:8000/")
    useEffect(()=>{
    socket.on("client",(data)=>{
            console.log(data)
          })
        socket.on("sendmsgtoall",(data)=>{
            console.log(data)
          })
          //socket.on("brdcstmsg",(data)=>{
          //   console.log(data)
          // })
          
        socket.on("exclusivemsg",(data)=>{
            console.log(data)
          })
        socket.on("sendmsgtogrp",(data)=>{
            console.log(data)
          })
    },[socket])

    const handlemessage=()=>{
        socket.emit("MSG","client sending to server")
   
     }
     const handlebrdcstmessage = ()=>{
       socket.emit("BRDCST","broadcast to all")
     }
     const handleexclusivebrdcstmessage=()=>{
       socket.emit("EXC BROADCAST","send to exclusive brdcst participants")
     }
      const handlejoinroom=()=>{
       socket.emit("JOIN ROOM","GROUP A")
     }

     const handleChange=(e)=>{
         setText(e.target.value)

     }

    return (
        <div>
socket client side
        <button onClick={handlemessage}>send message</button>
        <button onClick={handlebrdcstmessage}>send message to all</button>
        <input type="text" value={text} name="text" onChange={handleChange}></input>
        <button onClick={handleexclusivebrdcstmessage}>exclusive broadcast</button>
        <button onClick={handlejoinroom}>JOIN Room</button>
        </div>
    )
}

export default FuncSocket

