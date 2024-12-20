```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over the setCount function.
    const intervalId = setInterval(() => {
      setCount(count + 1); // This closure uses the value of 'count' from when the useEffect ran,
                         // not the current value.
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```