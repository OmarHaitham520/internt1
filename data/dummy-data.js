//convert to json server
//fake api
import category from '../models/category';
import cloth from '../models/cloth';
export const CATERGORIES = [
  new category('c1', 'Shoes'),
  new category('c2', 'Pants'),
  new category('c3', 'Shirt'),
  new category('c4', 'Caps'),
  new category('c5', 'Socks'),
  new category('c6', 'Belts')
];
export const hedoom=[
new cloth(
'h1',
'c1',
'nike air force',
'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ebad848a-13b1-46d5-a85e-49b4b6a4953c/air-force-1-le-big-kids-shoe-3JNSvS.png',
1000,
'46'
),
new cloth (
'h2',
'c1',
'air jordan',
'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ckykef7ov0iiv3oo8fcg/air-force-1-07-shoe-xmpTzM.png',
1500,
'40'
),
new cloth (
  'h3',
  'c1',
  'air jordanX',
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ckykef7ov0iiv3oo8fcg/air-force-1-07-shoe-xmpTzM.png',
  1550,
  '41'
  ),
  new cloth (
    'h4',
    'c1',
    'air jordan',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6a91c26b-7471-459d-91c5-30665fdc144c/air-force-1-high-07-mens-shoes-CGjvNW.png',
    1500,
    '48'
    )
];


