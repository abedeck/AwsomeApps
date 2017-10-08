/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
    TouchableOpacity
} from 'react-native';


export default class AwesomeProject extends Component {
    constructor(props){
        super(props);
    }
    
  render() {
    return (
      <View style={styles.container}>
    <Image source={require('./asset/Symbol2.png')} style={styles.logo}/>
<TouchableOpacity onPress={()=>this.onclick}>
        <Image source={require('./asset/Symbol1.png')} style={styles.sign} onclick='hayoo'/>
            </TouchableOpacity>
<Text style={styles.credit}>Binangun,co</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo:{
        width:212,
        height:65,
        alignItems:'center',
        justifyContent:'center',
    },
     sign:{
        width:162,
        height:27,
     marginTop:30,
        alignItems:'center',
        justifyContent:'center',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  credit: {
    fontSize: 20,
    textAlign: 'center',
    position:'absolute',
      flex:0.1,
      left:0,
      right:0,
      bottom:-10,
      flexDirection:'row',
      height:80,
      alignItems:'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
