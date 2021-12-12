import react from 'react';
import { ListaWrapper } from './listaOdpadow/wrapper';

class ListaOdpadow extends react.Component{
    render(){

        const title = "Lista odpadów";

            return(
                <>
                <ListaWrapper>
                    <h1>{title}</h1>
                </ListaWrapper>
                </>
            )
    }
}

export default ListaOdpadow;