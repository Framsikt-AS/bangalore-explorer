<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Bangalore Explorer Project

This project is an Angular application that showcases information about Bangalore, India's Silicon Valley. This file provides instructions to help Copilot generate high-quality code for this project.

## Project Overview

Bangalore Explorer is a web application that serves as a digital guide for tourists and anyone interested in learning about Bangalore. It includes information about the city's history, popular places to visit, cultural aspects, and more.

## Code Style Guidelines

- Follow the Angular Style Guide for code organization and naming conventions
- Use camelCase for variables and functions, PascalCase for classes and interfaces
- Include JSDoc comments for all public functions and classes
- Write self-documenting code with clear variable names
- Organize imports alphabetically
- Use strong typing with TypeScript
- Apply reactive programming patterns with RxJS when appropriate
- Maintain accessibility standards (WCAG)

## Project Structure

- `src/app/components`: Angular components organized by feature
- `src/app/services`: Services for data handling and business logic
- `src/assets`: Static assets like images
- `src/environments`: Environment configurations

## Preferred Implementations

- Use Angular Router for navigation
- Use Angular Services for data management
- Implement lazy loading for route modules
- Use SCSS for styling with BEM naming convention
- Prefer Reactive Forms over Template-driven Forms
- Implement responsive design for all components

## Custom Components

When creating components, consider:

1. Component reusability
2. Single responsibility principle
3. Proper encapsulation
4. Input/Output design patterns
5. OnPush change detection for performance

## Testing Guidelines

- All components should have unit tests
- Use TestBed for Angular testing
- Mock dependencies when needed
- Test edge cases and error scenarios

## APIs and Data

- For now, the application uses static data
- In the future, we might integrate with tourism APIs
- Consider using interface definitions for all data structures

## Design System

- Primary color: #1a365d
- Secondary color: #2c5282
- Text colors: #333 (primary), #666 (secondary)
- Font: Roboto
- Border radius: 8px for cards, 4px for buttons
- Box shadow: 0 2px 5px rgba(0, 0, 0, 0.1)

---

This is a private project owned by Framsikt-AS.
