import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        slug: 'hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        slug: ''
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        slug: ''
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        slug: ''
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        slug: ''
      }
    ]
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...section }) => (
          <MenuItem
            key={id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
            slug={section.slug}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
