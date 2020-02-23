//Import libraies
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//Create Component
const Header = ({ parentNavigation }) => {
  const { name } = parentNavigation.getParam('item');

  return (
    <View style={styles.viewStyle}>
      <View style={{ flexDirection: 'row' }}>
        <MaterialIcons
          name="arrow-back"
          style={styles.backIcon}
          onPress={() => parentNavigation.goBack()}
        />
        <Text style={styles.titleStyle}>{name}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => parentNavigation.navigate('Search')}>
          <MaterialIcons
            name="search"
            style={styles.rightIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => parentNavigation.navigate('Cart')}>
          <MaterialIcons
            name="shopping-cart"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'rgba(0, 0, 0, .15)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    paddingTop: 28,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  backIcon: {
    fontSize: 25,
    color: 'white',
    marginRight: 15
  },
  rightIcon: {
    fontSize: 25,
    color: 'white',
    marginHorizontal: 10
  },
  titleStyle: {
    fontSize: 20,
    color: 'white'
  }
});

//export component
export default Header;
