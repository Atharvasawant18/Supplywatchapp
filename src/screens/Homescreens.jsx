import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Allitems from './Allitems'
import Createscreen from './Createscreen'



const Homescreens = () => {
  const [view, setview] = useState(0)
  const [data, setdata] = useState([
  {id:1,name:"Wheat",stock:5, unit:"kg"},
  {id:2,name:"Rice",stock:17, unit:"kg"},
  {id:3,name:"sugar",stock:24, unit:"kg"},
  {id:4,name:"salt",stock:5, unit:"kg"},
  {id:5,name:"Grains",stock:18, unit:"kg"},
  {id:6,name:"peanuts",stock:13, unit:"kg"},
  {id:7,name:"Dal",stock:18, unit:"kg"},

])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DashBoard</Text>
      <View style={styles.btncointainer}>
        <Pressable style={[styles.button, view === 0 ? {backgroundColor:"green"}: null]} onPress={()=>setview(0)}>
            <Text style={[styles.btnText, view === 0 ? {color:"white"}: null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? {backgroundColor:"green"}: null]}onPress={()=>setview(1)}>
            <Text style={[styles.btnText, view === 1 ? {color:"white"}: null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? {backgroundColor:"green"}: null]}onPress={()=>setview(2)}>
            <Text style={[styles.btnText, view === 2 ? {color:"white"}: null]}>Create Item</Text>
        </Pressable>
      </View>
      {view === 0 &&<Allitems data={data}/>}
      {view === 1 &&<Allitems data={data.filter(item =>(item.stock < 15))}/>}
      {view === 2 &&<Createscreen data={data} setdata={setdata}/>}

    </View>
  )
}

export default Homescreens

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    padding:"10%",
    backgroundColor:"white",
  },
  title:{
    fontSize:24,
    fontWeight:"Bold",
    color:"#333",
  },
  btncointainer:{
    flexDirection:"row",
    gap:10,
    marginVertical:10,
  },
  button:{
    paddingVertical:5,
    paddingHorizontal:5,
    borderRadius:50,
    borderWidth:1,
    borderColor:"green",
  },
  btnText:{
    color:"green",
    fontSize:12,
    
  },
})