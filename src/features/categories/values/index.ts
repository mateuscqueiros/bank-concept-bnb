import { CategoryType } from '../types';

export const DEFAULT_CATEGORY_VALUES: CategoryType[] = [
  {
    id: '0',
    icon: 'icon-vehicles',
    name: 'Carro',
    color: 'rose',
    userId: 1,
  },
  {
    id: '1',
    icon: 'icon-shirt',
    name: 'Roupas',
    color: 'sky',
    userId: 1,
  },
  {
    id: '2',
    icon: 'icon-kitchen',
    name: 'Comida',
    color: 'emerald',
    userId: 1,
  },
  {
    id: '3',
    icon: 'icon-shopping-cart',
    name: 'Mercado',
    color: 'amber',
    userId: 1,
  },
];

export const DEFAULT_CATEGORY_FORM_VALUES = {
  name: '',
  icon: 'icon-shirt',
  color: 'slate',
};

export const CATEGORY_COLORS = [
  {
    name: 'Slate',
    value: 'slate',
  },
  {
    name: 'Vermelho',
    value: 'red',
  },
  {
    name: 'Laranja',
    value: 'orange',
  },
  {
    name: 'Âmbar',
    value: 'amber',
  },
  {
    name: 'Amarelo',
    value: 'yellow',
  },
  {
    name: 'Lima',
    value: 'lime',
  },
  {
    name: 'Verde',
    value: 'green',
  },
  {
    name: 'Esmeralda',
    value: 'emerald',
  },
  {
    name: 'Verde petróleo',
    value: 'teal',
  },
  {
    name: 'Ciano',
    value: 'cyan',
  },
  {
    name: 'Sky',
    value: 'sky',
  },
  {
    name: 'Azul',
    value: 'blue',
  },
  {
    name: 'Índigo',
    value: 'indigo',
  },
  {
    name: 'Violeta',
    value: 'violet',
  },
  {
    name: 'Fúcsia',
    value: 'fuchsia',
  },
  {
    name: 'Rosa',
    value: 'pink',
  },
  {
    name: 'Rosé',
    value: 'rose',
  },
];

export const CATEGORY_ICONS = [
  {
    name: 'Roupas',
    value: 'icon-shirt',
  },
  {
    name: 'Alimentos',
    value: 'icon-kitchen',
  },
  {
    name: 'Casa',
    value: 'icon-house',
  },
  {
    name: 'Educação',
    value: 'icon-education',
  },
  {
    name: 'Lazer',
    value: 'icon-recreation',
  },
  {
    name: 'Outros',
    value: 'icon-other',
  },
  {
    name: 'Saúde',
    value: 'icon-health',
  },
  {
    name: 'Serviços',
    value: 'icon-services',
  },
  {
    name: 'Trabalho',
    value: 'icon-job',
  },
  {
    name: 'Transporte',
    value: 'icon-transportation',
  },
  {
    name: 'Veículos',
    value: 'icon-vehicles',
  },
  {
    name: 'Viagem',
    value: 'icon-travel',
  },
];
