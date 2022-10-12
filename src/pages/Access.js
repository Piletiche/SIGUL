import React from 'react';
import { Button } from "primereact/button";
import { useHistory } from 'react-router-dom';

export const Access = () => {

	const history = useHistory();

	const goDashboard = () => {
		history.push('/');
	}


	return <div className="exception-body access-body">
		<div className="exception-container">
			<img src="assets/layout/images/logo-dark.png" alt="apollo-layout" />
			<h1>Negado</h1>
			<p>
				Você não tem os privilégios necessários.
			</p>

			<Button label="Ir para o painel" icon="pi pi-arrow-left" onClick={goDashboard} />
		</div>
	</div>
}