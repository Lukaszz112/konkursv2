import styled from "styled-components";
export const ListaWrapper = styled.div`
    text-align:center;
    animation: Punkty 2s ease;

    @keyframes Punkty{
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
        }
    }
`;