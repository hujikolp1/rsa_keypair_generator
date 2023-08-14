#!/bin/bash

esbuild ./src/App.tsx --bundle --outfile=public/bundle.js --loader:.ts=tsx --target=es2020