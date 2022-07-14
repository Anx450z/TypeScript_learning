# Learning TypeScript

* Resources : https://www.youtube.com/watch?v=BwuLxPH8IDsf

# instructions
* use npm install to install node_modules
* use tsc <.ts file name> to compile to .js

# Syllabus

* TypeScript Basics
* Compiler & Configuration Deep Dive
* Working with Next-gen JS Code
* Classes & Interfaces
* Advanced Types & TypeScript Features
* Generics
* Decorators
* Full project
* Working with Namespaces & Modules
* Webpack & TypeScript
* Third-Party Libs & TypeScript
* React + TypeScript & NodeJS + TypeScript

# Core Types of TS

* number : example = 1, 5.3, -10
* string : example = 'hello', "hello", `hello`
* boolean : example = true, false (0 is false)
* object : example = {age:30}
* arrays : example = [1,2,true, 'Ankur']
* tuple : example = [1,2] (immutable array with 2 elements)
* enum : example = enum{ NEW, OLD }
* any : example = can assign any type just like JS

# Additional Function Types

* undefined : example
* void : example = 
* unknown : example = can assign unknown value, different than any
* never : example = functions that never return anything not even undefined
# Notes

* TS does not implement measures to catch errors during runtime when 
  compiled to JS. It is used to catch errors during development.

# Commands

* watch mode for single file: tsc <file_name> -watch
* watch for entire folder : tsc --init
  then run tsc, to compile all files. also support mode for all file : tsc -w
