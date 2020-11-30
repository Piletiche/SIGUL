import React, { useRef, useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';

export const AppConfig = () => {

	const [active, setActive] = useState(false);
	const config = useRef(null);
	let outsideClickListener = useRef(null);

	let themeColors = [
		{ name: 'Blue', file: 'blue', image: 'blue.svg' },
		{ name: 'Green', file: 'green', image: 'green.svg' },
		{ name: 'Cyan', file: 'cyan', image: 'cyan.svg' },
		{ name: 'Purple', file: 'purple', image: 'purple.svg' },
		{ name: 'Indigo', file: 'indigo', image: 'indigo.svg' },
		{ name: 'Yellow', file: 'yellow', image: 'yellow.svg' },
		{ name: 'Orange', file: 'orange', image: 'orange.svg' },
		{ name: 'Pink', file: 'pink', image: 'pink.svg' }
	];

	const unbindOutsideClickListener = useCallback(() => {
		if (outsideClickListener.current) {
			document.removeEventListener('click', outsideClickListener.current);
			outsideClickListener.current = null;
		}
	}, []);

	const hideConfigurator = useCallback((event) => {
		setActive(false);
		unbindOutsideClickListener();
		event.preventDefault();
	}, [unbindOutsideClickListener]);

	const bindOutsideClickListener = useCallback(() => {
		if (!outsideClickListener.current) {
			outsideClickListener.current = (event) => {
				if (active && isOutsideClicked(event)) {
					hideConfigurator(event);
				}
			};
			document.addEventListener('click', outsideClickListener.current);
		}
	}, [active, hideConfigurator]);

	useEffect(() => {
		if (active) {
			bindOutsideClickListener()
		}
		else {
			unbindOutsideClickListener()
		}
	}, [active, bindOutsideClickListener, unbindOutsideClickListener]);

	const isOutsideClicked = (event) => {
		return !(config.current.isSameNode(event.target) || config.current.contains(event.target));
	}

	const toggleConfigurator = (event) => {
		setActive(prevState => !prevState);
	}

	const configClassName = classNames('layout-config', {
		'layout-config-active': active
	});

	return (
		<div ref={config} id="layout-config" className={configClassName}>
			<div className="layout-config-content">
				<button className="layout-config-button" onClick={toggleConfigurator}>
					<i className="pi pi-cog" />
				</button>

				<button className="layout-config-close" onClick={hideConfigurator}>
					<i className="pi pi-times" />
				</button>

				<h5 style={{ marginTop: 0 }}>Input Style</h5>
				<div class="p-formgroup-inline">
					<div class="p-field-radiobutton">
						<RadioButton id="input_outlined" name="inputstyle" value="outlined" />
						<label htmlFor="input_outlined">Outlined</label>
					</div>
					<div class="p-field-radiobutton">
						<RadioButton id="input_filled" name="inputstyle" value="filled" />
						<label htmlFor="input_filled">Filled</label>
					</div>
				</div>

				<h5>Ripple Effect</h5>
				<InputSwitch />

				<h5>Menu Type</h5>
				<div class="p-field-radiobutton">
					<RadioButton id="static" name="layoutMode" value="static" />
					<label htmlFor="static">Static</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="overlay" name="layoutMode" value="overlay" />
					<label htmlFor="overlay">Overlay</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="horizontal" name="layoutMode" value="horizontal" />
					<label htmlFor="horizontal">Horizontal</label>
				</div>
				<div class="p-field-radiobutton">
					<RadioButton id="slim" name="layoutMode" value="slim" />
					<label htmlFor="slim">Slim</label>
				</div>

				<h5>Themes</h5>
				<div class="layout-themes">
					{
						themeColors.map(color => {
							return <div key={color.name}>
								<a href="#" style={{ backgroundColor: color.color }} onClick={(event) => props.changeTheme(color.file)}>
									{props.themeColor === color.file && <i className="pi pi-check"></i>}
								</a>
							</div>
						})
					}
				</div>
			</div>
		</div>
	);

}
