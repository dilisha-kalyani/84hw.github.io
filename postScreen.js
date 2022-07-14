import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

renderItem= ({item:post}) => {
    return <PostCard post= {post} navigation= {this.props.navigation}/>;
    };

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";