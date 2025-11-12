// Minimal module declaration to silence TypeScript "Could not find a declaration file" error
// for the untyped package `react-simple-maps`.
// This treats the module as `any`. If you need types later, replace this with
// a proper declaration or install `@types/react-simple-maps` if it becomes available.
declare module 'react-simple-maps' {
  const content: any;
  export = content;
}
