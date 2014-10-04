'use strict';

goog.require('tumblr.base.repository');

describe('BaseRepository', function () {
  var repository;

  beforeEach(function () {
    repository = new BaseRepository;
  });

  it('can add an item', function () {
    spyOn(repository, 'addOne');
    repository.add('foo');
    expect(repository.addOne).toHaveBeenCalledWith('foo');
  });

  it('can add many items', function () {
    var items = [];

    spyOn(repository, 'addOne').andCallFake(function (item) {
      items.push(item);
    });

    repository.add(['foo', 'bar', 'baz']);
    expect(repository.addOne.callCount).toBe(3);
    expect(items).toEqual([
      'foo',
      'bar',
      'baz'
    ]);
  });

  it('has an unimplemented addOne method', function () {
    expect(function () {
      repository.addOne();
    }).toThrow('You must implement addOne');
  });
});
