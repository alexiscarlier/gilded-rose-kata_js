Gilded Rose Kata
===============================

This kata was sourced from [here](https://github.com/emilybache/GildedRose-Refactoring-Kata). The aim is a to a add a new feature to the existing code, via refactoring.

## Install

```
npm install
```

## Test

```
npm test
```

## Technologies Used
* JavaScript
* Jasmine

## Notes on approach

The approach I ended up using to solve the kata was fairly simple. Write tests for the legacy code ensuring that I get full coverage.
Having done that, write new and more changeable code which satisfies these tests, before adding on the additional functionality.

I didn't take this approach straight away, but rather tried to incrementally change the legacy code. I think this method could work, and I think I learnt things trying it,
but the approach definitely seems less time efficient than what I ended up doing (probably because the existing legacy code was so poor).

## Tasks done
* Passed the initial failing test

## Needs work
* My tests are not as DRY as they could be
* Some of the functions for my new code are longer than they should be
* I haven't much changed the structure or amount of classes compared to the legacy code (apart from extacting Items into a seperate file). My shop class has far too much
going on, and is dealing with the behaviour of items, which it shouldn't be. It makes sense to move this behaviour into the items class and maybe create seperate classes for each item
* Items need to be guarded to ensure their quality stays between 0 and 50
* It's not clear what happens when an item is initialised with quality outside of this range. This is a relic of the original code, but seems like it should be improved. Currently if an items is instantiated outside of the range nothing happens, which violates some of the requirements
