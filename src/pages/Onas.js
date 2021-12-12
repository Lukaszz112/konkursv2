import react from 'react';
import { Wrapper } from './onas/wrapper';
import AboutList from '../components/onas/aboutList';

class Onas extends react.Component{
    render(){

        const title = "O Nas";

            return(
                <>
                <Wrapper>
                    <h1>{title}</h1>
                    <AboutList />
                </Wrapper>
                </>
            )
    }
}

export default Onas;