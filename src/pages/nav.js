import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { FilterableProductTable } from './BookFilter'
import { App } from './location'
import books from '../../public/data/books.json'

const BookWrapper = () => {
	return (
		<div>
			<FilterableProductTable products={books} />
		</div>
	)
}

const Nav = () => (
	<Router>
		<div>
			<ul>
				<li><Link to='/book'>Book Filter</Link></li>
				<li><Link to='/location'>Location</Link></li>
			</ul>
			<Route exact path="/book" component={BookWrapper}/>
			<Route exact path="/location" component={App}/>
		</div>
	</Router>
)

export default Nav;