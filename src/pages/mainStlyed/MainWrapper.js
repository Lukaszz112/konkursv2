import styled from "styled-components";
export const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-template-rows: repeat(4, 2fr);
    row-gap: 10px;
    width: 500px;
    height: auto;
    margin:auto;
    margin-top: 30px;
    place-items: center;    
`;