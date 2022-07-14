import postCard from "./postCard";

renderItem = ({ item: story }) => {
    return <postCard post={post} />;
  };

  render();{
    
    
            <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
  


return(

    <View style= {styles.container}>
    <SafeAreaView style= {styles.droidSafeArea}/>
    <View style= {styles.appTitle}>
     <View style= {styles.appIcon}>
     <Image
    source= {require("../assets/logo.png")}
    style={styles.iconImage}
    ></Image>
    </View>
    <View style ={styles.appTitleTextContainer}>
    <Text style= {styles.appTitleText}>Spectagram</Text>
    </View>
    </View>
    <View style= {styles.cardConatainer}>
    <FlatList
    keyExtractor={this.keyExtractor}
    data={posts}
    renderItem= {this.renderItem}
    />
    </View>
    </View>
    );
}