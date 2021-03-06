import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class FormLogin extends Component {
    autenticaUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if (this.props.loadLogin) {
            return (
                <ActivityIndicator size="large" />
            ); 
        } 
        return (
            <Button title="Acessar" color="#115e54" onPress={() => this.autenticaUsuario()} />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../img/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>Whatsapp Clone</Text>
                    </View>

                    <View style={{ flex: 2 }}>
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.email} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="Email" 
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.senha} 
                            style={{ fontSize: 20, height: 45 }} 
                            placeholder="Senha"
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                            secureTextEntry 
                        />
                        <Text style={{ color: 'red', fontSize: 18 }}>
                            {this.props.erroLogin}
                        </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableHighlight 
                                onPress={() => Actions.formCadastro()} 
                                underlayColor={'transparent'}
                            >
                                <Text style={{ fontSize: 15, color: '#fff' }}>Ainda não tem cadastro? Cadastra-se</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticaoReducer.email,
        senha: state.AutenticaoReducer.senha,
        erroLogin: state.AutenticaoReducer.erroLogin,
        loadLogin: state.AutenticaoReducer.loadLogin
    }
);

export default connect(
    mapStateToProps, 
    { 
        modificaEmail, 
        modificaSenha, 
        autenticarUsuario 
    }
)(FormLogin);
