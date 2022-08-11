import { Component, h, Prop, } from '@stencil/core';
const colorOptions = ['blue', 'yellow', 'green', 'red', 'lightblue', 'black', 'orange', 'pink', 'purple', 'lightgreen']

@Component({
  tag: 'article-tags',
  styleUrl: 'article-tags.scss',
  shadow: true,
})
export class ArticleTags {

  @Prop() tags: string[]

  render() {
    return (
      <div id='container'>
        {this.tags.map((tag) => (<button-hash font='medium' color={colorOptions[Math.floor(Math.random()*colorOptions.length)]}>{tag}</button-hash>))}
      </div>
    );
  }

}
