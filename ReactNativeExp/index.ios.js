/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

class ReactNativeExp extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['cat', 'dog', 'bear', 'pig', 'cow', 'horse', 'duck']),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.welcome}>
            Welcome to React Native, Bacano!
          </Text>
        </View>
        <ListView style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.listText}><Text style={styles.text}>{rowData}</Text></View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 50,
    paddingBottom: 20
  },
  list: {
    flex: 1,
  },
  listText: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'hotpink',
    borderTopWidth: 1,
    borderTopColor: 'hotpink',
    marginTop: 5
  },
  text: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('ReactNativeExp', () => ReactNativeExp);
