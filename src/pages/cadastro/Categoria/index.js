import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);



    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }   

    function handleChange(infosDoEvento){
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    useEffect(() => {
        console.log('alou ow alo wda');
        const URL = 'http://localhost:8080/categorias';
        fetch(URL)
            .then( async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });
    },[

    ]);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: gabrielle</h1>
            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                console.log('Ta tentando enviar né seu otario');
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}>
                
                <FormField 
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar 
                </Button>
            </form>

            {categorias.length === 0 &&
                <div>
                    loading...
                </div>
            }

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;