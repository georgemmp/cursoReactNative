import b64 from 'base-64';
import firebase from 'firebase';

import { MODICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO } from './Types';

export const modificaAdicionaContatoEmail = text => {
    return {
        type: MODICA_ADICIONA_CONTATO_EMAIL,
        payload: text
    };
};

export const adicionaContato = email => {
    return dispatch => {
        const emailB64 = b64.encode(email);
        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    const { currentUser } = firebase.auth();
                    const emailUsuarioB64 = b64.encode(currentUser.email);
                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                            .push({ email, nome: 'Nome do contato' })
                            .then(() => console.log('Sucesso'))
                            .catch(error => console.log(error));
                } else {
                    dispatch({
                        type: ADICIONA_CONTATO_ERRO,
                        payload: 'E-mail informado não corresponde a um usuário válido'
                    });
                }
            });
    };
};

