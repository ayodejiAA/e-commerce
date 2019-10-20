import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

const Directory = ({ sections }) => (
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

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);
