import React,{Component} from 'react'
import {Header,Icon,Badge} from 'react-native-elements'
import {View,Text,Alert,StyleSheet, ColorPropType} from 'react-native'

const MyHeader = props =>{
    return(
        <Header
        centerComponent={{
            text:props.title,style:{color:'white',fontSize:30,fontWeight:"bold",}
        }}
        backgroundColor="tan"/>
    )
}
export default MyHeader()