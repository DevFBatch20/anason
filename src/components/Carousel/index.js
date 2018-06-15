import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import carr1 from './carr1.jpg';
import carr2 from './carr2.jpg';
import carr3 from './carr3.jpg';


const items = [
  {
   
    src: carr1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: carr2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: carr3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];


const Example = () =><UncontrolledCarousel items={items} />;

export default Example;