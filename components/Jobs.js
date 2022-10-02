import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default Jobs = ({ job }) => {
    return (
        <View style={
            styles.jobContainer
        }>
            <Text style={styles.jobTitle} numberOfLines={1}>
                {job.name}
            </Text>
            <View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>{job.robotCount}</Text>
                    <Text style={styles.subtitle}>Robot Count</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.count}>{job.time}</Text>
                    <Text style={styles.subtitle}>Elapsed Time-Days</Text>
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                paddingVertical: 15,

            }}>
                <MaterialCommunityIcons
                    name="pencil"
                    size={26}
                    color="#4B3043"
                />

                <MaterialCommunityIcons
                    name="trash-can"
                    size={26}
                    color="#4B3043"
                />

            </View>
        </View>
    );

};

//styling
const styles = StyleSheet.create({
    jobContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200,
        backgroundColor: "#B9AD79"
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