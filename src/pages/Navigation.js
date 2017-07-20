import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { FilterableProductTable } from './bookfilter'
import { App } from './location'
import { Counter } from './counter'
import DraggableApp from './dnd/index'
import books from '../../public/data/books.json'
import './Navigation.css'

const BookWrapper = () => {
	return (
		<div>
			<FilterableProductTable products={books} />
		</div>
	)
}

const Navigation = () => (
	<Router>
		<div>
			<ul className="navigation">
				<li><Link to='/book'>Book Filter</Link></li>
				<li><Link to='/location'>Location</Link></li>
				<li><Link to='/counter'>Counter</Link></li>
				<li><Link to='/dnd'>DnD</Link></li>
			</ul>
			<Route exact path="/book" component={BookWrapper}/>
			<Route exact path="/location" component={App}/>
			<Route exact path="/counter" component={Counter}/>
			<Route exact path="/dnd" component={DraggableApp}/>
		</div>
	</Router>
)

export default Navigation;