module.exports = {
  name: 'charts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/charts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
