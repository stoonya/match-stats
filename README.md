# match-stats

**Application description:**

Simple application that takes a csv file, parses it, analyzes the data and prepares report. 
The application is built in such way to be able to change the following without changing the core functionality (mostly due to composition and delegation):
1. The source file/method
2. The metric
3. The way of reporting

**Objective:**

Practice composition and try to avoid inheritance (in this specific project)

**Stack:**
- Typescript
- fs
- moment
