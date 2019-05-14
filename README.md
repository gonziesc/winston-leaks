# Winston-leak

## Summary

The intention of this repository is to reproduce winston memory leak using daily rotate file.

## Steps

- clone this repository
- run `npm install`
- run `npm start`
- in chrome, open `chrome://inspect/#devices` and inspect NodeJS process
- in the `profiler` window, the memory will start going up

![profiler](https://i.ibb.co/hYs2x6n/Screen-Shot-2019-05-14-at-11-15-32.png)

Eventually, this message will appear:

![memory crash](https://i.ibb.co/7tDWTWh/Screen-Shot-2019-05-14-at-11-16-09.png)

The process will stop because of lack of memory.

You can trace allocation and memory heap in the `memory` tab.

