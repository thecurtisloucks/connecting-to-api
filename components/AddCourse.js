import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const afterPress = (code, name, description) => {
  if (code.trim() === "" || name.trim() === "") {
    return 'Course not successfully added. Make sure both Code and Name are filled in';
  }
  return 'Course successfully added!';
};


const AddCourse = () => {

  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [result, setResult] = useState();
  

  function putData(input_code, input_name, input_description){
    const corsWorkAround = "https://cors-anywhere.herokuapp.com/";
    const url = corsWorkAround + "https://exercise-3-comp-3504.uc.r.appspot.com/api/course";
    
    fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "code":input_code,
        "name":input_name,
        "description":input_description,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}

  return (
    <View style={{marginTop:100}}>    
    <Text style={{fontSize: 20, fontWeight:"bolder"}}> New Course Form</Text>
        <TextInput label="Code" mode="outlined" placeholder="Enter course code" value = {code} onChangeText={ (text)=>{setCode(text);}} />
        <TextInput label="Name" mode="outlined" placeholder="Enter course name" value = {name} onChangeText={ (text)=>{setName(text);}} />
        <TextInput label="Description" mode="outlined" placeholder="Enter course description" value = {description} onChangeText={ (text)=>{setDescription(text);}} />

<Button mode="contained" onPress={()=>{
  
  setResult(afterPress(code,name,description));
  putData(code, name, description);
    
}}
style={{marginTop:10, marginBottom:20}}
>
Add
</Button>
<Text>Result = {' '}{result}</Text>
    </View>
  );
}

export default AddCourse;
