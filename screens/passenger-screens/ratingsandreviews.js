import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RatingsAndReviewsScreen = () => {
    const navigation = useNavigation();
    const driversRated = [
        {
            id: "1",
            name: "Jane Doe",
            rating: 4.5,
            review: "The car was clean and comfortable. The driver was punctual and polite.",
        },
        {
            id: "2",
            name: "John Smith",
            rating: 4,
            review: "The driver was friendly, but the ride felt a bit rushed at times.",
        },
    ];

    const renderDriver = ({ item }) => (
        <View style={styles.reviewCard}>
            <View style={styles.profileContainer}>
                <Image
                    style={styles.profileImage}
                />
                <View style={styles.profileText}>
                    <Text style={styles.driverName}>{item.name}</Text>
                    <View style={styles.ratingContainer}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FontAwesome
                                key={index}
                                name="star"
                                size={18}
                                color={index < Math.round(item.rating) ? "#1E40AF" : "#E5E7EB"}
                            />
                        ))}
                    </View>
                </View>
            </View>
            <Text style={styles.reviewText}>{item.review}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="#EDE9F6" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Ratings and Reviews</Text>
            </View>
            <View style={styles.summarySection}>
                <Text style={styles.summaryTitle}>Passenger Rating</Text>
                <Text style={styles.overallRating}>4.5</Text>
                <Text style={styles.recommended}>88% Recommended</Text>
            </View>
            <FlatList
                data={driversRated}
                renderItem={renderDriver}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.reviewList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#F3F4F6',
    }, 
    container3: {
        flex: 1,
        backgroundColor:  '#F3F4F6',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        height: 45,
        backgroundColor: '#3B3B98',
        borderRadius: 6,
    },
    backButton: {
        marginRight: 15,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EDE9F6',
        marginLeft: 70,
    },
    summarySection: {
        backgroundColor: "#BFDBFE",
        padding: 20,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
    },
    summaryTitle: {
        fontSize: 16,
        color: "#374151",
        marginBottom: 10,
    },
    overallRating: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#1E40AF",
    },
    recommended: {
        fontSize: 16,
        color: "#374151",
        marginTop: 10,
    },
    reviewList: {
        padding: 20,
    },
    reviewCard: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#E5E7EB",
    },
    profileText: {
        marginLeft: 10,
    },
    driverName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#374151",
    },
    ratingContainer: {
        flexDirection: "row",
        marginTop: 5,
    },
    reviewText: {
        fontSize: 14,
        color: "#374151",
        marginTop: 10,
    },
    writeReviewButton: {
        backgroundColor: "#1E40AF",
        padding: 15,
        alignItems: "center",
        margin: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
    },
});

export default RatingsAndReviewsScreen;
