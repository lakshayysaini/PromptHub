import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metaData = {
    title: 'PromptHub',
    description: 'Discover & Share AI-Powered Prompts'
}
export const dynamic = 'force-dynamic'

const RootLayout = ( { children } ) => {
    return (

        <html Lang='eng'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        { children }
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout