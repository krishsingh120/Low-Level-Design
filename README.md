# Low Level Design

## SOLID Principles

SOLID is a set of five design principles for writing maintainable and scalable code.

### **S** - Single Responsibility Principle (SRP)

A class should have only one reason to change. Each class should have a single responsibility.

### **O** - Open/Closed Principle (OCP)

Software entities should be open for extension but closed for modification. Use inheritance or composition to extend behavior without modifying existing code.

### **I** - Interface Segregation Principle (ISP)

Clients should not depend on interfaces they don't use. Create small, focused interfaces instead of large, general-purpose ones.

### **L** - Liskov Substitution Principle (LSP)

Derived classes should be substitutable for their base classes without breaking the application. Maintain the contract of parent classes in child classes.

### **D** - Dependency Inversion Principle (DIP)

Depend on abstractions (interfaces/abstract classes) rather than concrete implementations. High-level modules should not depend on low-level modules.
