import styled from "styled-components";
export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 6fr, 6fr;
    row-gap: 10px;
    width: 80vw;
    margin:auto;
    place-items:center;
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