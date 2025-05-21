import { newE2EPage } from '@stencil/core/testing';

describe('ds-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-input></ds-input>');

    const element = await page.find('ds-input');
    expect(element).toHaveClass('hydrated');
  });
});
