import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Ionicons,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";





render();{
    return(
      
    <View style = {styles.container}>
     <View style = {styles.cardcontainer}>
      <View style = {styles.authorcontainer}>
       <View style = {styles.authorImageContainer}>
         </View>
         <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              story: this.props.story
            })
          }
        ></TouchableOpacity>
    <Image
    source={require("../assets/profile_img.png")}
    style= {styles.profileImage}
    
    ></Image>
    
    </View>
    <View style= {styles.authorNameContainer}>
     <Text style= {styles.authorNameText}>{this.props.post.author}</Text>
    </View>
    
    <Image source = {require("../assets/post.jpeg")} style= {styles.postImage}/>
    <View styles= {styles.captionContainer}>
    <Text style= {styles.captionText}>
       {this.props.post.caption}
    </Text>
    </View>
    <View style = {styles.actionContainer}>
    <View style = {styles.likeButton}>
       <Ionicons name = {"heart"} size= {RFValue(30)} color= {"white"}/>
    <Text style= {styles.likeText}>12k</Text>
    </View>
      </View>
        </View>
          </View>
    );
    }
    