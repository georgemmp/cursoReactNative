import { MODICA_ADICIONA_CONTATO_EMAIL } from './Types';

export const modificaAdicionaContatoEmail = text => {
    return {
        type: MODICA_ADICIONA_CONTATO_EMAIL,
        payload: text
    };
};

