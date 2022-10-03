import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default Robots = ({ robot }) => {
    return (
        <View style={
            styles.jobContainer
        }>

            <MaterialCommunityIcons
                //more info
                name="information-outline"
                size={20}
                color="#4B3043"
            />
            <Text style={styles.jobTitle} numberOfLines={1}>
                {robot.name}
            </Text>
            <View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>{robot.jobCount}</Text>
                    <Text style={styles.subtitle}>Job Count</Text>
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                paddingVertical: 15,

            }}>
                <MaterialCommunityIcons
                    //edit
                    name="pencil"
                    size={26}
                    color="#4B3043"
                />

                <MaterialCommunityIcons
                    //delete
                    name="trash-can"
                    size={26}
                    color="#4B3043"
                />

            </View>
        </View>
    );

};

//styling (same as jobs)
const styles = StyleSheet.create({
    jobContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200,
        backgroundColor: "#DBBDD2"
    },
    jobTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: "#433D23",
        marginBottom: 10

    },
    count: {
        fontSize: 48,
        fontWeight: "00",
        color: "#394053"

    },
    subtitle: {
        fontSize: 12,
        fontWeight: "700",
        color: "#394053"
    }

});