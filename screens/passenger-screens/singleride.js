import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';

const SingleRideScreen = () => {
    const navigation = useNavigation();
    const [selectedDriver, setSelectedDriver] = useState('female');

    const handleFindDriver = () => {
        navigation.navigate('ChooseDriver');
    };

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="#007bff" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.sectionTitle}>Choose Driver</Text>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedDriver === 'female' && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedDriver('female')}
                    >
                        <MaterialIcons name="woman" size={40} color={selectedDriver === 'female' ? '#007bff' : '#000'} />
                        <Text>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedDriver === 'male' && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedDriver('male')}
                    >
                        <MaterialIcons name="man" size={40} color={selectedDriver === 'male' ? '#007bff' : '#000'} />
                        <Text>Male</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.findDriverButton}>
                    <Button text="Find a driver" onPress={handleFindDriver}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    header: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    backButton: {
        marginTop:20,
        marginRight: 15,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        marginTop: '75%', 
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        marginBottom: 30,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    option: {
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    selectedOption: {
        borderColor: '#007bff',
        backgroundColor: '#d0e7ff',
    },
    findDriverButton: {
        marginTop: 30,
        marginLeft:20
    },
});

export default SingleRideScreen;
