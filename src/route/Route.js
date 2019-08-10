import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from '../components/FormLogin';
import FormCadastro from '../components/FormCadastro';
import BoasVindas from '../components/BoasVindas';
import Principal from '../components/Principal';
import AdicionarContato from '../components/AdicionarContato';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#FFFF' }} headerTintColor="#fff">
        <Stack key="root">
            <Scene key="formLogin" component={FormLogin} title="Login" hideNavBar />
            <Scene key="formCadastro" component={FormCadastro} title="Cadastro" hideNavBar={false} />
            <Scene key="formBoasVindas" component={BoasVindas} title="Bem-Vindo" hideNavBar />
            <Scene key="formPrincipal" component={Principal} title="Principal" hideNavBar />
            <Scene key="adicionarContato" component={AdicionarContato} title="AdicionarContato" hideNavBar={false} />
        </Stack>
    </Router>
);
