import { FlatList, StyleSheet, Text, View } from 'react-native'

const Allitems = ({data}) => {
  return (
    <View>
      <View style={styles.headingcontainer}>
        <Text style={styles.headingtext}>Items</Text>
        <Text style={styles.headingtext}>Quantity</Text>
      </View>
      <FlatList 
           data={data}
           keyExtractor={(item) => item.id}
           renderItem={({item}) =>(
            <View style={[styles.itemContainer, {backgroundColor: item.stock < 15 ? "#FFCCCC":"#D7F6BFFF"}]}>
              <Text style={styles.itemtext}>{item.name}</Text>
        <Text style={styles.itemtext}>{item.stock}</Text>

            </View>
           )} 
           contentContainerStyle={{gap:10}}
           />
    </View>
  )
}

export default Allitems

const styles = StyleSheet.create({
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