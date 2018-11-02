import React from 'react';
import { View, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const formCadastro = props => (
    <ImageBackground style={{ flex: 1 }} source={require('../img/bg.png')}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <TextInput
    value={props.nome} placeholder="Nome" style={{ fontSize: 20, height: 45 }} 
                    onChangeText={texto => props.modificaNome(texto)}
                />
                <TextInput
    value={props.email} placeholder="Email" style={{ fontSize: 20, height: 45 }} 
                    onChangeText={texto => props.modificaEmail(texto)}
                />
                <TextInput
    value={props.senha} placeholder="Senha" style={{ fontSize: 20, height: 45 }} 
                    onChangeText={texto => props.modificaSenha(texto)} 
                    secureTextEntry
                />
            </View>

            <View style={{ flex: 1 }}>
                <Button title="Cadastrar" onPress={() => false} color="#115e54" />
            </View>
        </View>
    </ImageBackground>
);

const mapStateToProps = state => (
    {
        nome: state.AutenticaoReducer.nome,
        email: state.AutenticaoReducer.email,
        senha: state.AutenticaoReducer.senha
    }
);


export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(formCadastro);
