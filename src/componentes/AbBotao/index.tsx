import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
    onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: #FFF;
    color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: AbBotaoProps) => props.tipo === 'primario'
        ? css`
            &:hover {
                background: #EB7900;
                border: 2px solid #EB9B00;
            }  
        `
        : css`
            &:hover {
                background: #FFF;
                border: 2px solid #BB7900;
                color: #BB7900;
            }
        `
    }
`

export const AbBotao = ({ texto, onClick, tipo = 'primario'} : AbBotaoProps) => {
    return (<BotaoEstilizado onClick={onClick} tipo={tipo}>
        {texto}
    </BotaoEstilizado>)
}
