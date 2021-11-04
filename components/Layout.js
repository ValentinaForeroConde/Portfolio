import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <main className="w-72 md:w-3/4 ... m-auto">
        {children}
      </main>
      <Footer/>
    </div>
  )
}
export default Layout;