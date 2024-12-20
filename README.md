# Stale Closure in useEffect Hook
This example demonstrates a common error in React when using the `useEffect` hook with closures.  The counter will likely not increment properly due to the closure capturing the initial value of the `count` state variable rather than the updated value.  The solution shows how to fix this using the functional update pattern.