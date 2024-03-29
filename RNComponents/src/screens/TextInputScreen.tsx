import React, { useState } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { styles } from '../appTheme/appTheme';
import { useForm } from '../hooks/useForm';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
                
                    <View >
                        <HeaderTitle title="TextInputs" />
                    
                        <TextInput 
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su nombre"
                            autoCorrect={ false }
                            autoCapitalize="words"
                            onChangeText={ (value) => onChange( value, 'name' ) }
                        />

                        <TextInput 
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su email"
                            autoCorrect={ false }
                            autoCapitalize="none"
                            onChangeText={ (value) => onChange( value, 'email' ) }
                            keyboardType="email-address"
                            keyboardAppearance="dark"
                        />

                        <View style={ stylesScreen.switchRow }>
                            <Text style={ stylesScreen.switchText }>Suscribirse:</Text>
                            <CustomSwitch isOn={ isSubscribed } onChange={ ( value ) => onChange( value, 'isSubscribed' ) } />
                        </View>

                        <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />

                        <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />

                        <TextInput 
                            style={ stylesScreen.inputStyle }
                            placeholder="Ingrese su teléfono"
                            onChangeText={ (value) => onChange( value, 'phone' ) }
                            keyboardType="phone-pad"
                        />

                        <View style={{ height: 100 }} />
                    </View>

                
                </TouchableWithoutFeedback>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
});

