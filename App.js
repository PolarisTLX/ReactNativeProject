import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';



class One extends React.Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
    this.state = {
      refresh: false,
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

  refreshData = () => {
    this.setState({
      refresh: true
    });

    this.setState({
      refresh: false,
      data: [
        {
          name: "Updated",
          image: "http://i.pravatar.cc/400?img=1"
        }, {
          name: "James",
          image: "http://i.pravatar.cc/400?img=3"
        }
      ]
    })
  }

  render() {
    return (
      <View style={{ paddingTop: 40, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>One</Text>
        <FlatList
          data={this.state.data}
          style={{width: '100%'}}
          onRefresh={this.refreshData}
          refreshing={this.state.refresh}
          keyExtractor={ (item, index) => index.toString() }
          renderItem={({item, index}) => (
            <View style={[
              styles.rowStyle,
              index % 2 > 0 ? styles.itemOdd : styles.itemEven
            ]}>
            {/* <Image source={{uri: item.image}} style={{width: 50, height: 50, borderRadius: 25 }} /> */}
            <Image source={{uri: item.image}} style={styles.image} />
              <Text style={{marginLeft: 25, lineHeight: 50, fontWeight: 'bold', color: 'blue', opacity: 0.7 }}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 50/2
  },
  rowStyle: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderColor: 'lightgrey',
    borderBottomWidth: 1
  },
  itemOdd: {
    backgroundColor: '#f1f1f1'
  },
  itemEven: {
    backgroundColor: 'lightblue'
  }
})

class Two extends React.Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ fontSize: 50, color: 'blue'}}>Two</Text>
      </View>
    )
  }
}

class Three extends React.Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
  }

  render() {
    return (
      <View style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Three</Text>
      </View>
    )
  }
}

const MainStack = createBottomTabNavigator(
  {
    One: { screen: One },
    Two: { screen: Two },
    Three: { screen: Three }
  }
)

const AppContainer = createAppContainer(MainStack)



export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
}

// export default class App extends React.Component {
//
//   constructor(props){
//     super(props);
//     this.state = {
//       // data: ["Harry", "James", "Bobby", "Carl", "Jos", "Owen", "Winters", "Ralf"]
//       refresh: false,
//       data: [
//         {
//           name: "Harry",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "James",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "Bobby",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "Carl",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "Jos",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "Owen",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "Winters",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "Ralf",
//           image: "http://i.pravatar.cc/400?img=1"
//         }
//       ]
//     }
//   }
//
//   refreshData = () => {
//     this.setState({
//       refresh: true
//     });
//
//     this.setState({
//       refresh: false,
//       data: [
//         {
//           name: "Updated",
//           image: "http://i.pravatar.cc/400?img=1"
//         }, {
//           name: "James",
//           image: "http://i.pravatar.cc/400?img=3"
//         }
//       ]
//     })
//
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app! Hello Paul!</Text>
//         <FlatList
//           data={this.state.data}
//           style={{width: '100%'}}
//           onRefresh={this.refreshData}
//           refreshing={this.state.refresh}
//           keyExtractor={ (item, index) => index.toString() }
//           renderItem={({item, seperators}) => (
//             <View style={{paddingVertical: 35, borderBottomWidth: 1}}>
//             <Image source={{uri: item.image}} style={{width: 30, height: 30}} />
//               <Text>{item.name}</Text>
//             </View>
//           )}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     backgroundColor: '#33ABFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
