import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    background: black;
    padding: 24px 40px 24px 40px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    font-size: 14px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    margin: 5px 5px 5px 5px;
`;

export const Img = styled.div`

    width:150px;
    height: 150px;
    border-radius: 120px;
    background: url('/img/paulo_head.jpg');
    background-repeat: no-repeat;
    background-size:cover;
    
    
`;

export const Left = styled.div`

    width: 100%;
    list-style-position: inside;
    
`;

export const Center = styled.div`

    margin: 0px;
    padding: 0px;
    


`