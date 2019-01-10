import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_ERRO,
    CADASTRO_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from './Types';

const modificaEmail = (texto) => ({
    type: MODIFICA_EMAIL,
    payload: texto
});

const modificaSenha = (texto) => ({
    type: MODIFICA_SENHA,
    payload: texto
});

const modificaNome = (texto) => ({
    type: MODIFICA_NOME,
    payload: texto
});

const cadastrarUsuario = ({ nome, email, senha }) => dispatch => {
        dispatch({ type: CADASTRO_EM_ANDAMENTO });
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                const emailB64 = b64.encode(email);
                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastraUsuarioSucesso(dispatch));
            })
            .catch(error => cadastraUsuarioErro(error, dispatch));
    };

const cadastraUsuarioSucesso = (dispatch) => {
    dispatch({
        type: CADASTRO_USUARIO_SUCESSO
    });

    Actions.formBoasVindas();
};

const cadastraUsuarioErro = (error, dispatch) => {
    dispatch({
        type: CADASTRO_USUARIO_ERRO,
        payload: error.message
    });
};

const autenticarUsuario = ({ email, senha }) => dispatch => {
        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(error => loginUsuarioErro(error, dispatch));
    };

const loginUsuarioSucesso = (dispatch) => {
    dispatch({
        type: LOGIN_USUARIO_SUCESSO
    });
    Actions.formPrincipal();
};

const loginUsuarioErro = (error, dispatch) => {
    dispatch({
        type: LOGIN_USUARIO_ERRO,
        payload: error.message
    });
};

export { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastrarUsuario,
    autenticarUsuario
};
