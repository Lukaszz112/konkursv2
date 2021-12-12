import styled, {css} from "styled-components";
export const ListElement = styled.div`

    grid-column: 1/span 2;
    

    input[type="button"]{
        height: 70px;
        width: 25vw;
        border-radius: 20px;
        border: none;
        font-family: 'ubuntu';
        font-size: 24px;
        color:white;
        cursor: pointer;
        animation: wejscie 0.5s ease-in-out;
    }

    ${props => props.filtrowanie && css`
        input[type="button"]{
            background-color: #009900;
        }

        input[type="button"]:hover{
            background-color: #008800;
            box-shadow: 0px 0px 10px -4px #008800;
        }
    `}

    ${props => props.pktodbioru && css`
        input[type="button"]{
            background-color: #e6b800;
            animation-duration:.8s;
        }
        
        input[type="button"]:hover{
            background-color: #d5a700;
            box-shadow: 0px 0px 10px -4px #d5a700;
        }
    `}

    ${props => props.listaodpadow && css`
        input[type="button"]{
            background-color: #e68a00;
            animation-duration:1.1s;
        }
        
        input[type="button"]:hover{
            background-color: #d57a00;
            box-shadow: 0px 0px 10px -4px #d57a00;
        }
    `}

    ${props => props.onas && css`
        input[type="button"]{
            background-color: #cc5200;
            animation-duration:1.4s;
        }
        
        input[type="button"]:hover{
            background-color: #bb4100;
            box-shadow: 0px 0px 10px -4px #bb4100;
        }
    `}

    ${props => props.orecyklingu && css`
        input[type="button"]{
            background-color: #669900;
            animation-duration:1.7s;
        }
        
        input[type="button"]:hover{
            background-color: #778800;
            box-shadow: 0px 0px 10px -4px #778800;
        }
    `}

    @keyframes wejscie{
        from{
            transform: translateX(15em);
            opacity: 0;
        }

        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
