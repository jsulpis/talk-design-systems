import { Component, h, Prop } from '@stencil/core';

/**
 * Our custom input component
 */
@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.scss',
})
export class DsInput {
  /**
   * The label of the input
   * @required
   */
  @Prop() label: string;
  /**
   * The placeholder of the input
   */
  @Prop() placeholder: string;
  /**
   * If the input is required
   */
  @Prop() required: boolean;
  /**
   * The type of the input
   * @default "text"
   */
  @Prop() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' = 'text';

  render() {
    return (
      <label class="ds-input">
        <input type={this.type} placeholder={this.placeholder} required={this.required} />
        <span>{this.label}</span>
      </label>
    );
  }
}
