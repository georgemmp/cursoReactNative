import React from 'react';
import {View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default props => (
    <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 25}}>Whatsapp Clone</Text>
        </View>

        <View style={{flex: 2}}>
            <TextInput style={{fontSize: 20, height: 45}} placeholder="Email" />
            <TextInput style={{fontSize: 20, height: 45}} placeholder="Senha" />
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <TouchableHighlight onPress={() => Actions.formCadastro()} underlayColor={'transparent'}>
                    <Text style={{fontSize: 15}}>Ainda não tem cadastro? Cadastra-se</Text>
                </TouchableHighlight>
            </View>
        </View>

        <View style={{flex: 2}}>
            <Button title="Acessar" color="#115e54" onPress={() => false} />
        </View>
    </View>
);