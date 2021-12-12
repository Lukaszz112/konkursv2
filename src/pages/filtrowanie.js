import react from 'react';
import {FiltrowanieWrapper} from './filtrowanieStyled/filtrowanieWrapper';
import {Filter} from './filtrowanieStyled/filter';


class Filtrowanie extends react.Component{
    render(){

        const title = "Filtry";

            return(
                <FiltrowanieWrapper>
                    <h1>{title}</h1>
                    <Filter>
                    </Filter>
                </FiltrowanieWrapper>
            )
    }
}

export default Filtrowanie;