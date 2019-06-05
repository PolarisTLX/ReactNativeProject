import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // data: ["Harry", "James", "Bobby", "Carl", "Jos", "Owen", "Winters", "Ralf"]
      data: [
        {
          name: "Harry",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "James",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "Bobby",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "Carl",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "Jos",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "Owen",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "Winters",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "Ralf",
          image: "http://i.pravatar.cc/400?img=1"
        }
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Hello Paul!</Text>
        <FlatList
          data={this.state.data}
          style={{width: '100%'}}
          keyExtractor={ (item, index) => index.toString() }
          renderItem={({item, seperators}) => (
            <View style={{paddingVertical: 35, borderBottomWidth: 1}}>
            <Image source={{uri: item.image}} style={{width: 30, height: 30}} />
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#33ABFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
