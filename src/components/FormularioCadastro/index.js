// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import axios from 'axios'

function FormularioCadastro() {
    const formatarValorComoDecimal = (valor) => {
        const somenteNumeros = valor.replace(/\D/g, '');
        if (somenteNumeros.length < 3 ){
            return somenteNumeros;
        }
        if (somenteNumeros.length === 3) {
            return `${somenteNumeros.slice(0, 1)}.${somenteNumeros.slice(1)}`;
        }
        const parteInteira = somenteNumeros.slice(0, -2);
        const parteDecimal = somenteNumeros.slice(-2);
        return `${parteInteira}.${parteDecimal}`;
    }

    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [posicao, setPosicao] = useState('')
    const [numeroCamisa, setNumeroCamisa] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('https://rinokumura.onrender.com/jogadores', {nome, sexo, idade, altura, peso, posicao, numeroCamisa})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNome('')
            setSexo('')
            setIdade('')
            setAltura('')
            setPeso('')
            setPosicao('')
            setNumeroCamisa('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="container">
            <h2>Cadastro de usuários</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <select
                    id="sexo"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required>
                    <option value="">Selecione o sexo</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMININO">Feminino</option>
                    </select>

                <input 
                    type="number"
                    id="idade"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
                <input 
                    type="altura"
                    id="altura"
                    placeholder="Altura"
                    value={altura}
                    onChange={(e) =>{
                        const valorFormatado = formatarValorComoDecimal(e.target.value);
                        setAltura(valorFormatado);
                    }}
                    required
                />
                <input 
                    type="peso"
                    id="peso"
                    placeholder="Peso (kg)"
                    value={peso}
                    onChange={(e) =>{
                        const valorFormatado = formatarValorComoDecimal(e.target.value);
                        setPeso(valorFormatado);
                    }}
                    required
                />
                <input 
                    type="text"
                    id="posicao"
                    placeholder="Posição"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    required
                />
                <input
                    type="number"
                    id="numeroCamisa"
                    placeholder="Número da camisa"
                    value={numeroCamisa}
                    onChange={(e) => setNumeroCamisa(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <button onClick={() => navigate('/jogadores')} className="link-usuarios">
                Ver usuários cadastrados
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioCadastro