# Js design patterns

## Singleton Design Pattern

- Singleton design pattern restricts the creation/instantiation of a certain class's object. With Singleton pattern implemented you can only create a single instance of a class.
    - for example: May be you want to setup a db connection from your project.

## Proxy Design Pattern

#### What is Proxy Pattern?
Proxy Design Pattern provides a placeholder / wrapper for another object to control access to it.

- Client talks to Proxy,
- Proxy decides when / how to forward request to Real Object.

#### Why do we need Proxy?

Use Proxy when you want to add extra behavior without changing the original class.

```bash
Client → Proxy → Real Object
```

## Factory Design Pattern

#### What is Factory Pattern?

Factory Design Pattern provides an interface for creating objects, but lets subclasses or a factory class decide which object to create.

- Client does not use new directly
- Object creation logic is centralized

#### Why Factory Pattern?

- Use Factory when:

    - Object creation logic is complex
    - You want to hide instantiation details
    - You want to follow Open–Closed Principle
    - Multiple related objects share common behavior