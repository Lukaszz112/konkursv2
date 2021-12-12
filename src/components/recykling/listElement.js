import styled, {css} from 'styled-components';
export const Element = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    width: 40vw;
    height: auto;
    background-color: #006600;
    border-radius: 20px;
    margin: auto;
    margin-bottom: 20px;
    padding: 20px;
    color: white;
    letter-spacing: 1px;
    text-align: justify;
    place-items: center;
    transition: all .5s ease-in-out;

    :hover{
        transform: scale(1.02);

    }

    img{
        animation: zdjecia 4s ease infinite; 
    }

    h2{
        text-align:center;
        grid-column: 1/span 3;
    }

    p{
        grid-column: 1/span 3;
    }

    ${props => props.papier && css`
        background-color: deepskyblue;

        img{
            grid-column: 1;
        }

        p{
            grid-column: 2/span 3;
        }


    `}

    ${props => props.metal && css`
    background-color: #eeee00;
    color: black;

        img{
            grid-column: 3;
            animation-delay: .5s;
        }

        p{
            grid-column: 1/span 2;
        }
    `}

    ${props => props.szklo && css`
    background-color: #009900;

    img{
        grid-column: 1;
    }

    p{
        grid-column: 2/span 3;
    }
    `}

    ${props => props.plastik && css`
    background-color: #eeee00;
    color:black;

    img{
        grid-column: 3;
        animation-delay: .5s;
    }

    p{
        grid-column: 1/span 2;
    }
    `}

    @keyframes zdjecia{
        0%{
            transform: rotate(25deg)
        }

        50%{
            transform: rotate(-25deg)
        }

        100%{
            transform: rotate(25deg)
        }
    }
`