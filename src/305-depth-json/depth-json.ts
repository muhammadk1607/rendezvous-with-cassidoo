/*
Given some JSON data, calculate the maximum depth reached.
Both arrays and dictionaries increase the depth!
If the input is invalid data, the response should be undefined.

Example:

```js
> depthJson([])
> 1

> depthJson([1, 2, 3, 4, 5])
> 1

> depthJson([{"a": []}, ["abc"]])
> 3
```
*/

const isObject = (value: any) =>
  value !== null && typeof value === "object" && Array.isArray(value) === false;

export const depthJson = (json: any[]) => {
  let maxDepth = 1;

  for (let index = 0; index <= json.length; index++) {
    const value = json[index];
    if (Array.isArray(value) || isObject(value)) maxDepth += depthJson(value);
  }

  return maxDepth;
};
