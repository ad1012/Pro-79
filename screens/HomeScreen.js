import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'
import MyHeader from './components/MyHeader'
import db from '../config'

export default class HomeScreen extends Component{
    constructor(){
    super();
    this.state={
        allRequests:[]
        }
        this.requestsRef = null
    }
    getAllRequests=()=>{
        this.requestsRef = db.collection('exchange_requests')
        .onSnapshot((snapshot)=>{
            var allRequests = []
            snapshot.forEach((doc)=>{
             allRequests.push(doc.data())   
            });
            this.setState({allRequests:allRequests})
        })
    }
    keyExtractor = (item,index)=>index.toString(
        renderItem = ({
            item,i
        })=>{
            return(
                <ListItem
                key = {i}
                title = {item.item_name}
                subtitle = {item.description}
                titleStyle = {{
                    color: 'green',
                    fontSize: 20,
                    fontWeight:'bold'
                }}
                rightElement = {
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {{color:'black'}}> Exchange </Text>
                    </TouchableOpacity>
                }
                bottomDivider
                />
            )
        }
    )
}
