import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: ["Harry", "James", "Bobby", "Carl", "Jos", "Owen", "Winters", "Ralf"]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! Hello Paul!</Text>
        <FlatList
          data={this.state.data}
          keyExtractor={ (item, index) => index.toString() }
          renderItem={({item, seperators}) => (
            <View>
              <Text>{item}</Text>
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
