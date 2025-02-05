import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraView, useCameraPermissions } from 'expo-camera';
// import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Image, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "react-native-get-random-values";
import { useSelector } from "react-redux";
import SubmitButton from '../components/SubmitButton';
import { colors } from '../styles/global';
import { addPost, uploadImage } from '../utils.js/firestore';

const CreatePostScreen = ({ navigation }) => {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState(null);
    const [location, setLocation] = useState(null);
    const [name, setName] = useState(null);
    const cameraRef = useRef(null);
    const user = useSelector((state) => state.user.userInfo);
    
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

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Permission to access media library is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: false,
            quality: 0.3,
        });

        const { uri } = result.assets[0];
        setPhoto(uri);
        console.log(photo, "photo");
        console.log(uri, "photoUri");
    };

    const handleDelete = async () => {
        setPhoto(null);
        setLocation(null);
        setName(null);
    };

    const uploadImageToStorage = async () => {
        // if (!photo) return;

        try {
            const response = await fetch(photo);
            const file = await response.blob();
            const fileName = photo.split('/').pop(); // Отримуємо ім'я файлу з URI
            const fileType = file.type; // Отримуємо тип файлу
            const imageFile = new File([file], fileName, { type: fileType });
            console.log(user.uid, imageFile, fileName, "imageFile");
            const uploadedImageUrl = await uploadImage(user.uid, imageFile, fileName);

            return uploadedImageUrl;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    const handleSubmit = async () => {
        // if (!user) return;

        try {
            const imageUrl = await uploadImageToStorage();
            const postId = nanoid()

            await addPost(postId, {
                address: location,
                id: postId,
                image: imageUrl,
                userId: user.uid,
                title: name,
            });

            Alert.alert('Пост успішно створено!');
            console.log('Post data:', { imageUrl, location });
            navigation.navigate('Posts');
            handleDelete()
        } catch (error) {
            console.log(error)
        }
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
            
            <TouchableOpacity onPress={pickImage}>
                <Text style={[styles.btnText, styles.grayText]}>
                    Завантажте фото
                </Text>
            </TouchableOpacity>

            <TextInput
                style={styles.locationInput}
                placeholder="Name"
                onChangeText={setName}
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