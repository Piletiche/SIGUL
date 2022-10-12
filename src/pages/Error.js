import React from 'react';
import { Button } from "primereact/button";
import { useHistory } from 'react-router-dom';

export const Error = () => {

	const history = useHistory();

	const goDashboard = () => {
		history.push('/');
	}

	return <div className="exception-body error-body">
		<div className="exception-container">
			<img src="assets/layout/images/logo-dark.png" alt="apollo-layout" />
			<h1>Erro</h1>
			<p>
				Por favor contacte o administrador do sistema.
			</p>

			<Button label="Go To Dashboard" icon="pi pi-arrow-left" onClick={goDashboard} />
		</div>
	</div>
}