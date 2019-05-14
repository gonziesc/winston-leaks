# Winston-leak

Winston-leak

## Summary

The intention of this repository is to reproduce winston memory leak using daily rotate file.

## Steps

- run `npm start`
- in chrome, open `chrome://inspect/#devices` and inspect NodeJS process
- in the `profiler` window, the memory will start going up

