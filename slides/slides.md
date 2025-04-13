---
theme: seriph
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: "Building Future-Proof Design Systems: A Practical Guide to Framework Independence"
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
class: text-center
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Building Future-Proof Design Systems: A Practical Guide to Framework Independence

Julien Sulpis

Future Frontend

2025-05-27

---

# Julien Sulpis

- web consultant
- worked on 2 large scale design systems
- I won't explain precisely what I did, but I will share what I think is a good architecture based on my experience

---

# Large scale company

- many projects
- multiple frameworks
- some libraries (TailwindCSS)
- maybe multiple platforms (web, mobile...)

---

# How to build a design system for such a company ?

- one design system per JS framework ? waste of time and not future-proof
- one design system for everyone ? how ?
- tech stacks can change : JS frameworks, libraries, tooling etc

<!--
company so big that they can have two teams working on two design systems without even knowing it
-->

---

# Design Tokens

- a single source of truth for a design decision
- a way to share design decisions across teams & projects
- built in layers
- examples : colors, spacing, etc.

---

# Design Tokens

- what is a design token
- defined in design software
- transposed in code
- can be automated : Figma Tokens Studio, Style Dictionary, etc. (show CSS tokens ?)

---

# Components styles

- write components style in pure CSS using the design tokens
- only style, no JS
- can use Storybook to document them
- can use a preprocessor to make it easier to write, but the output should include pure CSS
- so far, no hard dependency to any framework or library (only devDependencies) (show CSS for a component)

---

# Components logic

- one solution is write components in a framework syntax (React, Angular...)
- we shared the CSS, but the JS has to be written multiple times

---

# Web Components

- web standard to make components that can be used in any framework
- can be used in any web page, even a simple HTML page
- libs: Lit, Stencil (show a Stencil component ?)

---

# Framework bindings

- web components don't allow to use some framework features like Angular two-way binding
- to use web components efficiently within a JS framework, we need to create bindings
- "proxy" components that wrap the web components and expose the framework features
- can be automated with tools like Stencil, Lit, etc.
- possibly some framework-specific features like Angular directives -> don't forget DX
- Demo of React component, autocompletion etc. -> looks like a regular React component (with caveats)

---

# Tooling and DX

- provide aditional tools to improve DX
- TailwindCSS for atomic CSS classes (margin, flex, gap etc) (demo of Tailwind using CSS variables ?)
- eslint rules to enforce best practices and help developers (demo of eslint autofix)

---

# Architecture recap

- looks like a kind of clean architecture
- the core packages are 100% web standards

---

# Possible changes

- frameworks and libraries can be switched or abandoned without affecting the core
- users can choose the framework they want to use, the libraries, or juste write plain HTML / CSS for simple use cases (HTML form demo)

---

# End
