/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MobileCenter from 'mobile-center';
import Crashes from "mobile-center-crashes";
import Analytics from "mobile-center-analytics";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
async function ClickBtn() {  
  const installId = await MobileCenter.getInstallId();
    alert(installId);  
 }

 function ChangeDisable() {  
     this.setState({  
         disabled: this.state.disabled ? false : true  
   }); 
   throw new Error("This is a test javascript crash!"); 
 }  

export default class iosreact725 extends Component {
  constructor(props){        
      super(props);   
      this.state = {  
          disabled : false,  
       }  
   }
  render() {
    Analytics.trackEvent("Learn More");
    return (
      <View style={styles.container}>
         <Button  
                onPress={ClickBtn}  
                title="Learn More"  
                color="green"  
               disabled={this.state.disabled}  
               accessibilityLabel="Learn more about this purple button" 
        /> 
        <Button  
              onPress={ChangeDisable.bind(this)}  
              title="change"  
              color="gray"  
             accessibilityLabel="Learn more about this purple button"
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iosreact725', () => iosreact725);
