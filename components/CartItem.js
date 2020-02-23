import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemNameCont}>
        <AntDesign
          name='plus'
          style={[styles.titleIcons,{marginLeft:0}]}
          onPress={props.onAdd}
        />
        <View style={{flexDirection:'row'}}>
          <Text style={styles.quantity}>{props.quantity} </Text>
          <Text style={styles.mainText}>{props.title}</Text>
        </View>
        <AntDesign
          name='minus'
          style={styles.titleIcons}
          onPress={props.onMinus}
        />
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>{props.amount.toFixed(2)} LE</Text>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemNameCont: {
    flexDirection: 'row',
    width: '50%',
  },
  titleIcons: {
    fontSize: 18,
    color: 'red',
    alignSelf:'center',
    marginHorizontal:15
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;
