import {ElementsFactories} from 'react-planner';

const info = {
  title: 'wall',
  tag: ['wall'],
  group: 'Vertical closure',
  description: 'Wall with bricks or painted',
  image: require('./wall.png'),
  visibility: {
    catalog: true,
    layerElementsVisible: true
  }
};

const textures = {
  bricks: {
    name: 'Bricks',
    uri: require('./textures/bricks.jpg'),
    lengthRepeatScale: 0.01,
    heightRepeatScale: 0.01,
    normal: {
      uri: require('./textures/bricks-normal.jpg'),
      lengthRepeatScale: 0.01,
      heightRepeatScale: 0.01,
      normalScaleX: 0.8,
      normalScaleY: 0.8
    }
  },
  painted: {
    name:'Painted',
    uri: require('./textures/painted.jpg'),
    lengthRepeatScale: 0.01,
    heightRepeatScale: 0.01,
    normal: {
      uri: require('./textures/painted-normal.png'),
      lengthRepeatScale: 0.01,
      heightRepeatScale: 0.01,
      normalScaleX: 0.4,
      normalScaleY: 0.4
    }
  },
};

const wall = ElementsFactories.WallFactory('wall', info, textures);

let textureValues = {
  'none': 'None'
};

wall.properties.textureA = {
  label: 'Covering A',
  type: 'enum',
  defaultValue: 'bricks',
  values: textureValues
};

wall.properties.textureB = {
  label: 'Covering B',
  type: 'enum',
  defaultValue: 'bricks',
  values: textureValues
};

export default wall;

