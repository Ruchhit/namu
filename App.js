import React from 'react';
import ReactDOM from 'react-dom';

// core way of creating an element :-
// const head= React.createElement('h1',{},'hwllow ji kya haal chal');
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(head);

// to create an alement using jsx :-
// const head = <h1 id='rooty'>hello jii got made by jsx</h1>
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(head);

// creating a new componenet :-
// const Heading1 = ()=>{
//     return <h1 className='head'>heading from react component</h1>;
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Heading/>);


// nested jsx code :-
// const Head = () =>(
//     <div id='container'>
//         <h2> this is a heading 2 under div</h2>
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<Head/>);


// component composition (rendering one component into other) :-
// const Heading1 = () => <h1 className='head'>heading from react component</h1>;
// const Heading2 = () =>( 
//     <div id='firstId'> 
//     <Heading1/>
//     <h2> this is another heading</h2>
//     </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Heading2/>);

// food ordering app

const Header = ()=>{
    return(
        <div className='header'>
            <div className='log'>
                <img className='img'src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}



const AppLayout = ()=>{
    return (
        <Header/>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)