import b64 from 'base-64';
import firebase from 'firebase';

import { MODICA_ADICIONA_CONTATO_EMAIL } from './Types';

export const modificaAdicionaContatoEmail = text => {
    return {
        type: MODICA_ADICIONA_CONTATO_EMAIL,
        payload: text
    };
};

export const adicionaContato = email => {
    const emailB64 = b64.encode(email);
    firebase.database().ref(`/contantos/${emailB64}`)
        .once('value')
        .then(snapshot => {
            if (snapshot.val()){
                console.log('Usuário existe');
            } else {

            }
        });
    return {
        type: ''
    };
};

