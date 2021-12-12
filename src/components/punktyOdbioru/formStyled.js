import styled from "styled-components";
export const FormStyled = styled.form`
    box-sizing:border-box;
    
    select{
        background-color:#e6b800 ;
        border: none;
        border-radius: 20px;
        height: 50px;
        padding:15px;
        font-family: 'ubuntu';
        font-size: 16px;
        cursor: pointer;
        transition: all 0.5s;
    }

    select:focus{
        outline: none;
        box-shadow: 0px 0px 10px -4px #d5a700;
        font-size: 17px;
    }

    input[type="submit"]{
        background-color:#e6b800 ;
        border: none;
        border-radius: 20px;
        height: 50px;
        padding:15px;
        font-family: 'ubuntu';
        font-size: 16px;
        cursor: pointer;
        transition: all 0.5s;
    }

    input[type="submit"]:hover{
        background-color:#d5a700;
        box-shadow: 0px 0px 10px -4px #d5a700;
    }

    input[type="radio"],label{
        cursor:pointer;
    }

`;