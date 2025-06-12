import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'


const Createscreen = ({data, setdata}) => {
  const [itemName, setitemName] = useState('')
  const [stockAmt, setstockAmt] = useState('')
  const [isEdit, setisEdit] = useState(false)
  const [editItemId, seteditItemId] = useState(null)
  const AddItemhandler = () =>{
    const newItem ={
      id: Date.now(),
      name: itemName,
      stock: stockAmt
    }

    setdata([...data, newItem ])
     setitemName('')
     setstockAmt('')
     setisEdit(false)
  }
  const deleteItemHandler = (id) =>{
    setdata(data.filter((item)=> item.id !== id))
  }
  const editItemHandler = (item) =>{
    setisEdit(true)
    setitemName(item.name)
    seteditItemId(item.id)
  }
  const updateItemHandler = () => {
    setdata(data.map((item)=>(
      item.id === editItemId ? {...item, name:itemName, stock:stockAmt} : item 
    )))

  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Item..'
        style={styles.input}
        value={itemName}
        onChangeText={(item) => setitemName(item)}
      />
      <TextInput
        placeholder='Enter Stock Amount..'
        style={styles.input}
        value={stockAmt}
        onChangeText={(item) => setstockAmt(item)}
      />
      <Pressable style={styles.addbutton} onPress={()=> isEdit ? updateItemHandler() : AddItemhandler()}>
        <Text style={styles.addtext}>{isEdit ? "EDIT Item": "ADD Item"}</Text>

      </Pressable>
      <View>
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>All Items In Stock...</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock < 15 ? "#FFCCCC" : "#D7F6BFFF" }]}>
              <Text style={styles.itemtext}>{item.name}</Text>
              
              <View style={{flexDirection:"row", gap:20}}>
                <Text style={styles.itemtext}>{item.stock}</Text>
                <Pressable onPress={()=> editItemHandler(item)}>
                 <Text style={styles.itemtext}>✏️ </Text>
                </Pressable>
                
                <Pressable onPress={()=> deleteItemHandler(item.id)}>
              <Text style={styles.itemtext}>🗑️</Text>
              </Pressable>
              </View>

            </View>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  )
}


export default Createscreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  addbutton: {
    backgroundColor: "#CABFEEFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addtext: {
    color: "white",
    fontSize: 15,
    fontWeight: 400
  },
   headingcontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:18
  },
  headingtext:{
    fontWeight:500,
    fontSize:18,
  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7,

  },
  itemtext:{
    fontWeight:400,
    fontSize:14,
    
  }
})