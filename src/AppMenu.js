import React from 'react';
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

const AppSubmenu = (props) => {

	const [activeIndex, setActiveIndex] = useState(null);

	const onMenuItemClick = (event, item, index) => {
		//avoid processing disabled items
		if (item.disabled) {
			event.preventDefault();
			return true;
		}

		if (props.root && props.onRootItemClick) {
			props.onRootItemClick({
				originalEvent: event,
				item: item
			});
		}

		//execute command
		if (item.command) {
			item.command({ originalEvent: event, item: item });
			event.preventDefault();
		}

		if (index === activeIndex)
			setActiveIndex(null)
		else
			setActiveIndex(index)

		if (props.onMenuItemClick) {
			props.onMenuItemClick({
				originalEvent: event,
				item: item
			});
		}
	}

	const onKeyDown = (event, item, index) => {
		if (event.key === 'Enter') {
			onMenuItemClick(event, item, index);
		}
	}

	const onMenuItemMouseEnter = (index) => {
		if (props.root && props.menuActive && isHorizontalOrSlim() && !isMobile()) {
			setActiveIndex(index)
		}
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	if (nextProps.parentMenuItemActive === false) {
	// 		return {
	// 			activeIndex: null
	// 		}
	// 	}

	// 	return null;
	// }

	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	if (this.isHorizontalOrSlim() && !this.isMobile() && prevProps.menuActive && !this.props.menuActive) {
	// 		this.setState({activeIndex: null});
	// 	}
	// }

	const isHorizontalOrSlim = () => {
		return (props.layoutMode === 'horizontal' || props.layoutMode === 'slim');
	}

	const isMobile = () => {
		return window.innerWidth <= 640;
	}

	const renderLinkContent = (item) => {
		let submenuIcon = item.items && <i className="pi pi-fw pi-angle-down layout-menuitem-toggler"></i>;
		let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;

		return (
			<React.Fragment>
				<i className={item.icon}></i>
				<span>{item.label}</span>
				{submenuIcon}
				{badge}
			</React.Fragment>
		);
	}

	const renderLink = (item, i) => {
		let content = renderLinkContent(item);

		if (item.to) {
			return (
				<NavLink activeClassName="active-menuitem-routerlink" to={item.to}
					onClick={(e) => onMenuItemClick(e, item, i)} exact role="menuitem"
					target={item.target} onMouseEnter={(e) => onMenuItemMouseEnter(i)}
					className={item.styleClass}>{content}</NavLink>
			)
		} else {
			return (
				<a href={item.url} tabIndex={item.url ? '' : 0} role="menuitem" onClick={(e) => onMenuItemClick(e, item, i)} target={item.target}
					onMouseEnter={(e) => onMenuItemMouseEnter(i)} onKeyDown={(e) => onKeyDown(e, item, i)} className={item.styleClass}>
					{content}
				</a>
			);

		}
	}
	var items = props.items && props.items.map((item, i) => {
		let active = activeIndex === i;
		let styleClass = classNames(item.badgeStyleClass, { 'active-menuitem': active });
		let tooltip = props.root && <div className="layout-menu-tooltip">
			<div className="layout-menu-tooltip-arrow"></div>
			<div className="layout-menu-tooltip-text">{item.label}</div>
		</div>;

		return <li className={styleClass} key={i} role="none">
			{item.items && props.root === true && <div className='arrow'></div>}
			{renderLink(item, i)}
			{tooltip}
			<CSSTransition classNames="layout-submenu" timeout={{ enter: 400, exit: 400 }} in={active} unmountOnExit>
				<AppSubmenu items={item.items} onMenuItemClick={props.onMenuItemClick} layoutMode={props.layoutMode}
					menuActive={props.menuActive} parentMenuItemActive={active} />
			</CSSTransition>
		</li>
	});

	return items ? <ul role="menu" className={props.className}>{items}</ul> : null;

}

export const AppMenu = () => {

		return <AppSubmenu items={props.model} className="layout-menu layout-main-menu clearfix"
			menuActive={props.active} onRootItemClick={props.onRootMenuItemClick}
			onMenuItemClick={props.onMenuItemClick} root={true} layoutMode={props.layoutMode}
			parentMenuItemActive={true} />
}
