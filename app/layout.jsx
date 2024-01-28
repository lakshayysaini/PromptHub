import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metaData = {
    title: 'PromptHub',
    description: 'Discover & Share AI-Powered Prompts'
}

const RootLayout = ( { children } ) => {
    return (

        <html Lang='eng'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    { children }
                </main>
            </body>
        </html>
    )
}

export default RootLayout