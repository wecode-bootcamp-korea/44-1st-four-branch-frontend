const CATEGORY_LIST = [
  { id: 0, categoryName: '홈' },
  { id: 1, categoryName: '향수' },
  { id: 2, categoryName: '스킨 케어' },
  { id: 3, categoryName: '바디 & 핸드' },
  { id: 4, categoryName: '헤어' },
];

const SKINCARE = [
  {
    categoryList: [
      { id: 'mainid=2', name: '모두보기' },
      { id: 'subid=1', name: '클렌저' },
      { id: 'subid=2', name: '각질제거' },
      { id: 'subid=3', name: '트리트먼트' },
      { id: 'subid=4', name: '토너' },
    ],
    categoryImage:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const BODYHAND_DATA = [
  {
    categoryList: [
      { id: 'mainid=3', name: '모두보기' },
      { id: 'subid=5', name: '핸드' },
      { id: 'subid=6', name: '바디' },
    ],
    categoryImage:
      'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
];

const HAIR_DATA = [
  {
    categoryList: [
      { id: 'mainid=4', name: '모두보기' },
      { id: 'subid=7', name: '샴푸' },
      { id: 'subid=8', name: '컨디셔너' },
      { id: 'subid=9', name: '트리트먼트' },
    ],
    categoryImage:
      'https://plus.unsplash.com/premium_photo-1664007755604-e44b2cae5a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUVCJUI5JTk3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const PERFUME = [
  {
    categoryList: [
      { id: 'mainid=1', name: '모두보기' },
      { id: 'subid=10', name: '플로럴' },
      { id: 'subid=11', name: '프레쉬' },
      { id: 'subid=12', name: '우디' },
      { id: 'subid=13', name: '오퓰런트' },
    ],
    categoryImage:
      'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
];

export { CATEGORY_LIST, SKINCARE, BODYHAND_DATA, HAIR_DATA, PERFUME };
