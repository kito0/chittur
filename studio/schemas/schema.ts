import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import author from './author';
import category from './category';
import post from './post';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([post, author, category]),
});
