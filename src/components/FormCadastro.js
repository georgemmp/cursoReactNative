import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastrarUsuario 
} from '../actions/AutenticacaoActions';

class FormCadastro extends Component {
    cadastraUsuario() {
        const { nome, email, senha } = this.props;
        
        this.props.cadastrarUsuario({
            nome,
            email,
            senha
        });
    }

    renderBtnCadastro() {
        if (this.props.loadCadastro) {
            return (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button 
                title="Cadastrar" 
                onPress={() => this.cadastraUsuario()} 
                color="#115e54" 
            />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={require('../img/bg.png')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 2, justifyContent: 'center', color: '#fff' }}>
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.nome} 
                            placeholder="Nome" 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.email} 
                            placeholder="Email" 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            placeholderTextColor='#fff'
                            value={this.props.senha} 
                            placeholder="Senha" 
                            style={{ fontSize: 20, height: 45 }} 
                            onChangeText={texto => this.props.modificaSenha(texto)} 
                            secureTextEntry
                        />

                        <Text style={{ color: 'red', fontSize: 18 }}>{this.props.erroCadastro}</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticaoReducer.nome,
        email: state.AutenticaoReducer.email,
        senha: state.AutenticaoReducer.senha,
        erroCadastro: state.AutenticaoReducer.erroCadastro,
        loadCadastro: state.AutenticaoReducer.loadCadastro
    }
);

export default connect(
    mapStateToProps, 
    { 
        modificaEmail, 
        modificaSenha, 
        modificaNome,
        cadastrarUsuario
    }
)(FormCadastro);
