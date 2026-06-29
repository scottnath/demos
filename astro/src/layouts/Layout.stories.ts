import preview from '../../.storybook/preview';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';
import Layout from './Layout.astro';

const meta = preview.meta({
  title: 'Layouts/Layout',
  component: Layout as unknown as AstroComponentFactory,
});

export const Default = meta.story({
  args: {
    title: 'scottnath/demos',
    slots: {
      default: '<main><h1>Layout shell</h1><p>Default slot content.</p></main>',
    },
  },
});
