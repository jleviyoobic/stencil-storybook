import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MyComponent } from './my-component';

describe('my component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({ components: [MyComponent], template: () => <my-component /> });

    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          Hello, World! I'm
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({ components: [MyComponent], template: () => <my-component first="Stencil" last="'Don't call me a framework' JS" /> });

    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          Hello, World! I'm Stencil 'Don't call me a framework' JS
        </mock:shadow-root>
      </my-component>
    `);
  });
});
