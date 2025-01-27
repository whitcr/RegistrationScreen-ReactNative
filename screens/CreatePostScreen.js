import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Pressable, Keyboard } from 'react-native';
import { colors } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons'
import SubmitButton from '../components/SubmitButton';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as Location from 'expo-location';

const CreatePostScreen = ({ navigation }) => {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);
    const [name, setName] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log(); ('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            setLocation(location);
        })();
    }, []);

    if (!permission) {
        return <View />;
    }


    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>);
    }

    const handleTakePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri);
        }
    };

    const handleDelete = async () => {
        setPhoto(null);
        setLocation(null);
        setName(null);
    };

    const handleSubmit = async () => {
        console.log('Post data:', { photo, location });
        navigation.navigate('Posts');
        setPhoto(null);
        setLocation(null);
        setName(null);
    };


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.imageContainer}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.image} />
                ) : (
                    <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={handleTakePicture} style={styles.cameraButton}>
                                <Ionicons name="camera" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </CameraView>
                )}
            </View>

            <TextInput
                style={styles.locationInput}
                placeholder="Name"
            />

            <TextInput
                style={styles.locationInput}
                placeholder="Location"
            />

            <SubmitButton text={"Опублікувати"} onPress={handleSubmit} disable={!photo} />

            <View style={styles.deleteButtonContainer}>
                <TouchableOpacity onPress={handleDelete}>
                    <Ionicons
                        name="trash-bin-outline"
                        size={24}
                        style={styles.deleteButton}
                    />
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundColor: colors.border_gray,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: colors.border_gray,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageUploadText: {
        fontSize: 18,
        color: '#999',
    },
    locationInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: colors.border_gray,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    deleteButtonContainer: {
        width: 60,
        height: 60,
        backgroundColor: colors.border_gray,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteButton: {
        color: colors.black_primary,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    cameraButton: {
        position: 'absolute',
        bottom: 10,
        right: '50%',
        alignSelf: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CreatePostScreen; 