
import '@styles/globals.css'

import Nav from '@components/Nav/Nav'
import Provider from '@components/Provider/Provider'

export const metadata = {
    title: "k-agency",
    description: 'Discover & share'
}

const Root = ({children}) => {
  return (
    <html lang="en">
        <body> 
            <Provider> 
            <div>
                <div className="gradient"/>
            </div>
            
            <Nav />
            <main className="app">
                {children}
            </main>
            </Provider>
        </body>
    </html>   
    )
}

export default Root