import React from 'react'

import './assets/css/bootstrap-clearmin.min.css'
import './assets/css/roboto.css'
import './assets/css/material-design.css'
import './assets/css/small-n-flat.css'
import './assets/css/font-awesome.min.css'

import sass_less_png from './assets/img/sass-less.png';
import devices_png from './assets/img/devices.png';
import components_png from './assets/img/components.png';
import dashboard_svg from './assets/img/sf/dashboard.svg';
import notepad_svg from './assets/img/sf/notepad.svg';
import brick_svg from './assets/img/sf/brick.svg';
import window_layout_svg from './assets/img/sf/window-layout.svg';
import cat_svg from './assets/img/sf/cat.svg';
import lock_open_svg from './assets/img/sf/lock-open.svg';

export default class App extends React.Component {
	render () {
		return [
			<div id="cm-menu">
				<nav class="cm-navbar cm-navbar-primary">
					<div class="cm-flex"><a href="index.html" class="cm-logo"></a></div>
					<div class="btn btn-primary md-menu-white" data-toggle="cm-menu"></div>
				</nav>
				<div id="cm-menu-content">
					<div id="cm-menu-items-wrapper">
						<div id="cm-menu-scroller">
							<ul class="cm-menu-items">
								<li class="active"><a href="index.html" class="sf-house">Home</a></li>
								<li><a href="dashboard-sales.html" class="sf-dashboard">Dashboard</a></li>
								<li><a href="components-text.html" class="sf-brick">Components</a></li>
								<li class="cm-submenu">
									<a class="sf-window-layout">Navbar layouts <span class="caret"></span></a>
									<ul>
										<li><a href="layouts-breadcrumb1.html">1st nav breadcrumb</a></li>
										<li><a href="layouts-breadcrumb2.html">2nd nav breadcrumb</a></li>
										<li><a href="layouts-tabs.html">2nd nav tabs</a></li>
									</ul>
								</li>
								<li class="cm-submenu">
									<a class="sf-cat">Icons <span class="caret"></span></a>
									<ul>
										<li><a href="ico-sf.html">Small-n-flat</a></li>
										<li><a href="ico-md.html">Material Design</a></li>
										<li><a href="ico-fa.html">Font Awesome</a></li>
									</ul>
								</li>
								<li><a href="notepad.html" class="sf-notepad">Text Editor</a></li>
								<li><a href="login.html" class="sf-lock-open">Login page</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>,
			<header id="cm-header">
				<nav class="cm-navbar cm-navbar-primary">
					<div class="btn btn-primary md-menu-white hidden-md hidden-lg" data-toggle="cm-menu"></div>
					<div class="cm-flex">
						<h1>Home</h1> 
						<form id="cm-search" action="index.html" method="get">
							<input type="search" name="q" autocomplete="off" placeholder="Search..." />
						</form>
					</div>
					<div class="pull-right">
						<div id="cm-search-btn" class="btn btn-primary md-search-white" data-toggle="cm-search"></div>
					</div>
					<div class="dropdown pull-right">
						<button class="btn btn-primary md-notifications-white" data-toggle="dropdown"> <span class="label label-danger">23</span> </button>
						<div class="popover cm-popover bottom">
							<div class="arrow"></div>
							<div class="popover-content">
								<div class="list-group">
									<a class="list-group-item">
										<h4 class="list-group-item-heading text-overflow">
											<i class="fa fa-fw fa-envelope"></i> Nunc volutpat aliquet magna.
										</h4>
										<p class="list-group-item-text text-overflow">Pellentesque tincidunt mollis scelerisque. Praesent vel blandit quam.</p>
									</a>
									<a class="list-group-item">
										<h4 class="list-group-item-heading">
											<i class="fa fa-fw fa-envelope"></i> Aliquam orci lectus
										</h4>
										<p class="list-group-item-text">Donec quis arcu non risus sagittis</p>
									</a>
									<a class="list-group-item">
										<h4 class="list-group-item-heading">
											<i class="fa fa-fw fa-warning"></i> Holy guacamole !
										</h4>
										<p class="list-group-item-text">Best check yo self, you're not looking too good.</p>
									</a>
								</div>
								<div style={{padding: 10}}><a class="btn btn-success btn-block">Show me more...</a></div>
							</div>
						</div>
					</div>
					<div class="dropdown pull-right">
						<button class="btn btn-primary md-account-circle-white" data-toggle="dropdown"></button>
						<ul class="dropdown-menu">
							<li class="disabled text-center">
								<a style={{cursor: "default"}}><strong>John Smith</strong></a>
							</li>
							<li class="divider"></li>
							<li>
								<a><i class="fa fa-fw fa-user"></i> Profile</a>
							</li>
							<li>
								<a><i class="fa fa-fw fa-cog"></i> Settings</a>
							</li>
							<li>
								<a href="login.html"><i class="fa fa-fw fa-sign-out"></i> Sign out</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>,
			<div id="global">
				<div class="container-fluid cm-container-white">
					<h2 style={{marginTop: 0}}>Welcome to Clearmin template demo !</h2> 
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.</p>
				</div>
				<div class="container-fluid">
					<div class="row cm-fix-height">
						<div class="col-sm-4">
							<div class="panel panel-default">
								<div class="panel-body">
									<img src={sass_less_png} alt="Less support" class="img-responsive" />
									<br />
									<p>Clearmin ships with vanilla CSS, but its source code utilizes Less CSS preprocessor. Quickly get started with precompiled CSS or build on the source. Colors and sizes are easily customizable with less variables.</p>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="panel panel-default">
								<div class="panel-body">
									<img src={devices_png} alt="Responsive across devices" class="img-responsive" />
									<br />
									<p>Clearmin easily and efficiently scales your websites and applications with a single code base, from phones to tablets to desktops with CSS media queries. Swipe from left on phones to toggle main menu.</p>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="panel panel-default">
								<div class="panel-body">
									<img src={components_png} alt="Components" class="img-responsive" />
									<br />
									<p>With Bootstrap, you get extensive and beautiful documentation for common HTML elements, dozens of custom HTML and CSS components, and awesome jQuery plugins.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="row cm-fix-height">
						<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
							<a href="dashboard-sales.html" class="panel panel-default thumbnail cm-thumbnail">
								<div class="panel-body text-center">
									<span class="svg-48">
										<img src={dashboard_svg} alt="dashboard" />
									</span>
									<h4>Dashboard</h4> <small>C3.js charts to display some fancy pies.</small>

								</div>
							</a>
						</div>
						<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
							<a href="notepad.html" class="panel panel-default thumbnail cm-thumbnail">
								<div class="panel-body text-center">
									<span class="svg-48">
										<img src={notepad_svg} alt="notepad" />
									</span>
									<h4>Text editor</h4> <small>Summernote WYSIWYG Editor implementation.</small>

								</div>
							</a>
						</div>
						<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
							<a href="components-text.html" class="panel panel-default thumbnail cm-thumbnail">
								<div class="panel-body text-center">
									<span class="svg-48">
										<img src={brick_svg} alt="brick" />
									</span>
									<h4>Components</h4> <small>Bootstrap main classes.</small>

								</div>
							</a>
						</div>
						<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
							<a href="layouts-breadcrumb1.html" class="panel panel-default thumbnail cm-thumbnail">
								<div class="panel-body text-center">
									<span class="svg-48">
										<img src={window_layout_svg} alt="window-layout" />
									</span>
									<h4>Navbar layouts</h4> <small>Put all you need on the top of your screen.</small>

								</div>
							</a>
						</div>
						<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
							<a href="ico-sf.html" class="panel panel-default thumbnail cm-thumbnail">
								<div class="panel-body text-center">
									<span class="svg-48">
										<img src={cat_svg} alt="cat" />
									</span>
									<h4>Icons</h4> <small>Semantic little pics.</small>

								</div>
							</a>
						</div>
						<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
							<a href="login.html" class="panel panel-default thumbnail cm-thumbnail">
								<div class="panel-body text-center">
									<span class="svg-48">
										<img src={lock_open_svg} alt="lock-open" />
									</span>
									<h4>Login page</h4> <small>Have a look to the login page.</small>

								</div>
							</a>
						</div>
					</div>
					<div class="panel panel-default">
						<div class="panel-heading">Check our fancy colors</div>
						<div class="panel-body" id="demo-buttons">
							<p>Click buttons below to change navbar main color :</p>
							<div class="row">
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-primary" data-switch-color="primary">primary</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-success" data-switch-color="success">success</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-info" data-switch-color="info">info</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-warning" data-switch-color="warning">warning</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-danger" data-switch-color="danger">danger</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-gray" data-switch-color="gray">gray</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-yellow" data-switch-color="yellow">yellow</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-purple" data-switch-color="purple">purple</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-turquoise" data-switch-color="turquoise">turquoise</button>
									<br />
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
									<button class="btn btn-block btn-midnight" data-switch-color="midnight">midnight</button>
									<br />
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer class="cm-footer"><span class="pull-left">Connected as John Smith</span><span class="pull-right">&copy; PAOMEDIA SARL</span></footer>
			</div>
		];
	}
}