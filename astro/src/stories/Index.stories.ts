import preview from '../../.storybook/preview';
import type { AstroComponentFactory } from '@storybook-astro/renderer/types';
import Index from '../pages/index.astro';

const meta = preview.meta({
  title: 'Pages/Index',
  component: Index as unknown as AstroComponentFactory,
});

export const Default = meta.story({});
