import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableNativeFeedbackComponent, Pressable, Button, Alert, TouchableOpacity, View, Image, FlatList } from 'react-native';
import Icon from "@expo/vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";
import React, { Component } from 'react';
import tempJobData from './tempJobData';
import tempRobotData from './tempRobotData';
import Jobs from './components/Jobs';
import Robots from './components/Robots';


export default class Detail extends React.Component {

  state = {
    jobsSelected: true //start at jobs tab
  }

  //jobs VS robots tab
  onTabPressed = () => {
    this.setState({ jobsSelected: !this.state.jobsSelected })
  }

  render() {
    return (
      <View style={styles.backgroundBottom}>
        <View style={styles.backgroundTop}>
          <View style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 40
          }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                width: "50%",
              }}
            >

              <Icon
                name="chevron-left"
                size={24}
                color="#044244"
              />
            </TouchableOpacity>
            <View style={{
              width: "50%",
              alignItems: "flex-end"
            }}>
              <Icon
                name="dots-two-vertical"
                size={24}
                color="#044244"
              />
            </View>
          </View>
          <Image
            source={require('./pfp.jpg')}
            style={styles.profileImage} />

          <Text style={styles.name}>Riya Patel</Text>
          <Text style={styles.org}>Reekon Tools</Text>

          <View style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 20
          }}>
            <View>
              <Text style={styles.robotNum}>4</Text>
              <Text style={styles.robots}>Robots</Text>
            </View>
          </View>
        </View>

        {/* button to add job */}
        <View style={{
          marginVertical: 15,
          marginHorizontal: 167,
        }}>
          <TouchableOpacity style={styles.addJobButton}>
            <AntDesign name="plus" size={16} color="#CCC7B9" />
          </TouchableOpacity>
          <Text styles={styles.addJobText}>Add Job</Text>
        </View>


        {/* nav bar */}
        <View style={styles.navBar}>
          <TouchableOpacity
            onPress={this.onTabPressed}
            style={{
              borderBottomColor: this.state.jobsSelected ? "#CCC7B9" : "#394053",
              borderBottomWidth: 4,
              paddingVertical: 6,
            }}
          >
            <Text style={{
              color: this.state.jobsSelected ? "#CCC7B9" : "#9ca1a2"
            }}>JOBS IN PROGRESS</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.onTabPressed}
            style={{
              borderBottomColor: this.state.jobsSelected ? "#394053" : "#CCC7B9",
              borderBottomWidth: 4,
              paddingVertical: 6,
              marginLeft: 30
            }}
          >
            <Text style={{
              // fontFamily:"Bold",
              color: this.state.jobsSelected ? "#9ca1a2" : "#CCC7B9"
            }}>ACTIVE ROBOTS</Text>
          </TouchableOpacity>
        </View>

        {/* job list components */}
        <View style={styles.jobList}>
          {this.state.jobsSelected ?
            //job page selected  
            <FlatList
              data={tempJobData}
              keyExtractor={item => item.name}
              horizontal={true}
              showHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Jobs job={item} />
              )}
            />
            :
            //robot page selected  
            <FlatList
              data={tempRobotData}
              keyExtractor={item => item.name}
              horizontal={true}
              showHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Robots robot={item} />
              )}
            />
          }


        </View>
        {/* button */}
        <Pressable style={styles.button} onPress={() => Alert.alert('Dashboard in Progress')}>
          <Text style={styles.butText}>View Error Dashboard</Text>
        </Pressable>
      </View>
    )
  }
}

//style
const styles = StyleSheet.create({
  backgroundBottom: {
    backgroundColor: "#394053",
    height: "100%",
  },
  backgroundTop: {
    paddingHorizontal: 40,
    backgroundColor: "#CCC7B9",
    height: "34%",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 20
  },
  name: {
    fontSize: 22,
    fontWeight: "1",
    color: "#433D23",
    alignSelf: "center"
  },
  org: {
    fontSize: 16,
    fontWeight: "1",
    color: "#9ca1a2",
    alignSelf: "center"
  },
  robotNum: {
    fontSize: 15,
    fontWeight: "1",
    color: "#433D23",
    alignSelf: "center"
  },
  robots: {
    fontSize: 16,
    color: "#9ca1a2",
    alignSelf: "center",
    fontWeight: "1"
  },
  addJobButton: {
    borderColor: "CCC7B9",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    width: 50,
    borderRadius: 4,
    padding: 6,
  },
  addJobText: {
    color: "433D23",
    fontSize: 14,
    marginTop: 30,
    fontWeight: "600",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#CCC7B9',
    borderWidth: 2,
    borderColor: "433D23",
    marginTop: 25,

  },
  butText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#433D23',
  },
  jobList: {
    height: 275,
    paddingTop: 10,
    paddingLeft: 32
  },
  navBar: {
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingTop: 1,
  }
});

