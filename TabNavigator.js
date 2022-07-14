import React from 'React'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/createPost";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";


const tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
return(
<Tab.Navigator
 screenOptions= {({ route}) =>({
  tabBarIcon: ({ focused, color, size})=>{
let iconName;
if(route.name==='Feed'){
iconName= focused
? 'book'
: 'book-outline';
} else if (route.name === 'CreatePost'){
  iconName = focused ? 'create' : 'create-outline';
}
return <Ionicons name= {iconName} size= {size} color= {color} />;
},
})}

tabBarOptions={{
  activeTintColor: 'tomato',
inactiveTintColor:'gray',
}}
>

<Tab.screen name= "Feed" component= {Feed}/>
<Tab.screen name= "CreatePost" component= {CreatePost}/>
</Tab.Navigator>
);
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  },
  cardContainer: {
    flex: 0.85
  }
});
