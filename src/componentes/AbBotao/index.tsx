import React from 'react';

import { AbBotao, AbBotaoProps } from '../src';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args} />;

export const Primario = Template.bind({});

Primario.args = {
    textp: 'Ab Botão Primário',
    tipo: 'primario'
} as AbBotaoProps

export const Secundario = Template.bind({});

Secundario.args = {
    textp: 'Ab Botão Secundário',
    tipo: 'secundario'
} as AbBotaoProps
