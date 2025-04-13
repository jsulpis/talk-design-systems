import { Component, h, Prop } from '@stencil/core';

/**
 * Our custom button component
 */
@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
})
export class DsButton {
  /**
   * The type of the button
   * @default "button"
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * If the button is disabled
   * @default false
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <button class="ds-button" type={this.type} disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}
