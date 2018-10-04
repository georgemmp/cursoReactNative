import React from 'react';
import {View, TextInput, Button} from 'react-native';

export default props => (
    <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 2, justifyContent: "center"}}>
            <TextInput placeholder="Nome" style={{fontSize: 20, height: 45}}/>
            <TextInput placeholder="Email" style={{fontSize: 20, height: 45}}/>
            <TextInput placeholder="Senha" style={{fontSize: 20, height: 45}}/>
        </View>

        <View style={{flex: 1}}>
            <Button title="Cadastrar" onPress={() => false} color="#115e54"/>
        </View>
    </View>
);