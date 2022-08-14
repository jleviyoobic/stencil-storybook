import { Component, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.scss',
  shadow: true
})
export class SearchBar {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <button type='submit'>
          <custom-icons iconName='search'/>
        </button>
      </form>
    );
  }
}
