import React, { useState } from 'react';

const FormComponent = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [link, setLink] = useState('');
    const [imagem, setImagem] = useState(null);

    const handleTituloChange = (event) => {
        setTitulo(event.target.value);
    };

    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        setImagem(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode enviar os dados para um servidor, armazená-los localmente ou fazer o que desejar
        console.log({ titulo, descricao, link, imagem });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="titulo">Título:</label>
                <input type="text" id="titulo" value={titulo} onChange={handleTituloChange} />
            </div>
            <div>
                <label htmlFor="descricao">Descrição:</label>
                <input type="text" id="descricao" value={descricao} onChange={handleDescricaoChange} />
            </div>
            <div>
                <label htmlFor="link">Link:</label>
                <input type="text" id="link" value={link} onChange={handleLinkChange} />
            </div>
            <div>
                <label htmlFor="imagem">Imagem:</label>
                <input type="file" id="imagem" accept="image/*" onChange={handleImagemChange} />
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default FormComponent;
