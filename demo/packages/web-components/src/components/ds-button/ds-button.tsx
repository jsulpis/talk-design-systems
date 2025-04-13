import { Component, h } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
})
export class DsButton {
  render() {
    return (
      <button class="ds-button">
        <slot></slot>
      </button>
    );
  }
}
