import styled from "styled-components";

export const Container = styled.div`
    /* background-color: orange; */

    
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;

    height: 90px;
    width: 100%;
    padding: 16px;

    
    justify-content: flex-end;
    align-items: center;

    display: flex;
    flex-direction: row;

    backdrop-filter: blur(2px);

    gap: 16px;
`;