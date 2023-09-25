import React, { Component } from 'react'
import {io} from "socket.io-client"

export default class App extends Component {
  constructor(){
    super();
    this.socket=io("http://localhost:8000/")
    this.socket.on("client",(data)=>{
      console.log(data)
    })
    this.socket.on("sendmsgtoall",(data)=>{
      console.log(data)
    })
    // this.socket.on("brdcstmsg",(data)=>{
    //   console.log(data)
    // })
    
    this.socket.on("exclusivemsg",(data)=>{
      console.log(data)
    })
    this.socket.on("sendmsgtogrp",(data)=>{
      console.log(data)
    })
  }
   handlemessage=()=>{
     this.socket.emit("MSG","client sending this to server")

  }
  handlebrdcstmessage = ()=>{
    this.socket.emit("BRDCST","broadcast to all")
  }
  handleexclusivebrdcstmessage=()=>{
    this.socket.emit("EXC BROADCAST","send to exclusive brdcst participants")
  }
  handlejoinroom=()=>{
    this.socket.emit("JOIN ROOM","GROUP A")
  }
 
  render() {
    return (
      <div>
        socket client side
        <button onClick={this.handlemessage}>send message</button>
        <button onClick={this.handlebrdcstmessage}>send message to all</button>
        <button onClick={this.handleexclusivebrdcstmessage}>exclusive broadcast</button>
        <button onClick={this.handlejoinroom}>JOIN Room</button>
  </div>
    )
  }
}
