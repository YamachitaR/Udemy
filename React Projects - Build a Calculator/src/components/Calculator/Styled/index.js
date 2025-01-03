import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center; /* Ajustado para um valor válido */
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px); /* Corrigido 'mimax' para 'minmax' e 'row' para 'rows' */
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`;

export const Screen = styled.div`
    grid-column: 1 / -1;
    background-color: rgba(60, 64, 67, 0.75);
    display: flex;
    justify-content: space-around;
    flex-direction: column; /* Corrigido de 'flec-direction' para 'flex-direction' */
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Previous = styled.div`
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem;
`;

export const Current = styled.div`
    color: white;
    font-size: 2.5rem;
`;


export const Button = styled.button`
    cursor: pointer;
    font-size: 2rem;
    border: 1px outset white;
    outline: none;
    background-color: rgba(255, 255, 255, 0.75);

    &:hover {
        background-color: rgba(255, 255, 255, 0.9);
    }

    /* Aplica o grid-column span se gridSpan for passado como props */
    ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};`}

    /* Aplica o background cinza se operation for passado como props */
    ${({ operation }) => operation && `background-color: gray;`}


    ${({ control }) => control && `background-color: skyblue;`}

    ${({ equals }) => equals && `border-bottom-right-radius: 10px; background-color: gray;`}

     ${({ period }) => period && `border-bottom-left-radius: 10px; background-color: skyblue;`}




`;
 