import {Fragment} from 'react'
import classes from './Header.css'
import './Header.css'
const Header=props=>{
    return(<Fragment>
        <header className={classes.header}>
            <button>PriceQuoteHistory</button>
        </header>

    </Fragment>)
}
export default Header