import { newE2EPage } from '@stencil/core/testing';

describe('ds-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-button></ds-button>');

    const element = await page.find('ds-button');
    expect(element).toHaveClass('hydrated');
  });
});
