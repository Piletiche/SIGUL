import React from 'react';

//Aqui define a variável para pegar o ano
const data = new Date();
const ano = data.getFullYear();

const AppFooter = () => {

    return (
        <div className="layout-footer">
            <span className="footer-text-left">© {ano} | <a target="_blank" href="http://www.unilicungo.ac.mz/"><b>Universidade Licungo</b></a></span>
            <span className="footer-text-right">Todos os direitos reservados</span>
        </div>
    )

}

export default AppFooter;