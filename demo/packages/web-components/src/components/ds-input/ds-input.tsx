import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.scss',
})
export class DsInput {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() required: boolean;
  @Prop() type: string = 'text';

  render() {
    return (
      <label class="ds-input">
        <input type={this.type} placeholder={this.placeholder} required={this.required} />
        <span>{this.label}</span>
      </label>
    );
  }
}
