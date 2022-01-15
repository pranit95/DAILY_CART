import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import BackDrop from '../Components/BackDrop'
import ErrorPage from '../Components/ErrorPage'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'
import Account from './Account'
import Cart from './Cart'
import Home from './Home'
import Product from './Product'

const AllRoutes = () => {

    const [sideToggle, setSideToggle] = useState(false);
    
    return (
        <>
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
            <main style={{height:"80vh"}}>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/product/:id" exact>
                        <Product/>
                    </Route>
                    <Route path="/cart" exact>
                        <Cart/>
                    </Route>
                    {/* <Route path="/account" exact>
                        <Account/>
                    </Route> */}
                    <Route>
                        <ErrorPage/>
                    </Route>
                </Switch>
            </main>
        </>)
}

export default AllRoutes
