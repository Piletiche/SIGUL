import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import { useHistory } from 'react-router-dom';

export const Login = () => {

	const history = useHistory();

	const goDashboard = () => {
		history.push('/');
	}

	return (
		<div className="login-body">
			<div className="body-container animate__animated animate__fadeInDown">
				<div className="grid">
					<div className="col-12 lg:col-6 left-side">
						<img src="assets/layout/images/logo-dark.png" alt="apollo-layout" className="logo" />
						<h1>SiGUL</h1>
						<marque><p><b>
							Bem-vindo ao Sistema de Gestão Académica da UniLicungo!
						</b></p>
						</marque>
					</div>
					<div className="col-12 lg:col-6 right-side">
						<div className="login-wrapper">
							<div className="login-container">
								<span className="title" ><b>Conecte-se</b></span>

								<div className="grid p-fluid">
									<div className="col-12">
										<span className="p-input-icon-left">
											<i className="pi pi-user" />
											<InputText type="text" autofocus="true" placeholder="Usuário" />
										</span>
									</div>

									<div className="col-12">
										<span className="p-input-icon-left">
											<i className="pi pi-lock" />
											<InputText type="password" placeholder="Senha" />
										</span>
									</div>
									<div className="col-6">
										<Button label="Entrar" icon="pi pi-check" onClick={goDashboard}
										/>
									</div>
									<div className="col-6 password-container">
										<button type="text" className="p-link">Esqueceu a Senha?</button>
									</div>
									<div className="login-container">
										<b><span>© 2022 | <a target="_blank" href="http://www.unilicungo.ac.mz/">Universidade Licungo</a></span>
											<span> | Todos os direitos reservados</span></b>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}
