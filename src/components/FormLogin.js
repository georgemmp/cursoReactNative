import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin = props => (
    <ImageBackground style={{ flex: 1 }} source={require('../img/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: '#fff' }}>Whatsapp Clone</Text>
            </View>

            <View style={{ flex: 2 }}>
                <TextInput
    placeholderTextColor='#fff'
    value={props.email} style={{ fontSize: 20, height: 45 }} placeholder="Email" 
                    onChangeText={texto => props.modificaEmail(texto)}
                />
                <TextInput
                placeholderTextColor='#fff'
    value={props.senha} style={{ fontSize: 20, height: 45 }} placeholder="Senha"
                    onChangeText={texto => props.modificaSenha(texto)} secureTextEntry 
                />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight onPress={() => Actions.formCadastro()} underlayColor={'transparent'}>
                        <Text style={{ fontSize: 15, color: '#fff' }}>Ainda não tem cadastro? Cadastra-se</Text>
                    </TouchableHighlight>
                </View>
            </View>

            <View style={{ flex: 2 }}>
                <Button title="Acessar" color="#115e54" onPress={() => false} />
            </View>
        </View>
    </ImageBackground>
);

const mapStateToProps = state => (
    {
        email: state.AutenticaoReducer.email,
        senha: state.AutenticaoReducer.senha
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);
