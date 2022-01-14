import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';


const App = () => {
  const intialstate =[
    {title:'Seher yemeyi',complate:false},
    {title:'Idman',complate:true},
    {title:'Islemek',complate:false},
  ]
  const [todoTitle,setTodoTitle]=useState('')
  const [todoList,setTodoList] = useState(intialstate)

  const addTodo = ()=>{
    let data = {title:todoTitle,complate:false}
    let newList = todoList
    newList.push(data)
    setTodoList(newList)
    setTodoTitle('')
  }

  const uptadeTodo = (index)=>{
    let newList = [];
    todoList.map((item,i)=>{
      i == index ? 
      newList.push({title:item.title,complate:!item.complate})
      : newList.push(item)
    });
    setTodoList(newList)
    setTodoTitle('')
  }

  const deleteTodo = (index) =>{
    let newList = todoList.filter((filter,i)=>i!==index)
    setTodoList(newList)
    setTodoTitle('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputDiv}>
      <TextInput 
      onChangeText={value=>setTodoTitle(value)}
      value={todoTitle}
      style={styles.input} />
      </View>
      <View style={styles.listDiv}>
      <ScrollView>
          {
          todoList.map((list,index)=>(
            <TouchableOpacity 
            key={index} 
            onPress={()=>uptadeTodo(index)}
            onLongPress={()=>deleteTodo(index)}
            style={{ 
            flexDirection:'row',  
            width:'100%',
            height:60,
            borderWidth:1,
            borderColor:list.complate === true ? 'green' : 'red',
            alignItems:'center',
            justifyContent:'space-between',
            paddingLeft:20,
            paddingRight:20,
            borderRadius:20,
            marginBottom:10
            }}>
              <Text style={styles.text}>{list.title}</Text>
              <Icon 
              name={list.complate === true ? 'checkbox-active' : 'checkbox-passive'}
              color={list.complate === true ? 'green' : 'red'}
              size={30}
              />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      </View>
      <TouchableOpacity 
      onPress={()=>addTodo()}
      style={styles.btn}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    color: 'white',
    fontSize: 32,
  },
  inputDiv:{
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    flex:3,
  },
  listDiv:{
    padding:20,
    width:'100%',
    flex:5
  },
  input:{
    width:'90%',
    height:60,
    borderRadius:5,
    backgroundColor:'white'
  },
  btn:{
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    right:30,
    bottom:30,
    backgroundColor:'blue',
    borderRadius:50,
    height:60,
    width:60
  },
  listBox:{
    width:'100%',
    height:60,
    borderWidth:1,
  }
});
