# pyparser

Python ast parser for Node.js

===

This project is under development.

Please feel free to PullRequest and Issue.

---

# Basic Using

```bash
$ npm i pyparser
```

```typescript
import {parse} from 'pyparser';

(async () => {
  const ast = await parse('123');

  console.log(ast);
  /*
    {
      "_type": "Module",
      "body": [
        {
          "_type": "Expr",
          "col_offset": 0,
          "end_col_offset": 3,
          "end_lineno": 1,
          "lineno": 1,
          "value": {
            "_type": "Constant",
            "col_offset": 0,
            "end_col_offset": 3,
            "end_lineno": 1,
            "kind": null,
            "lineno": 1,
            "n": 123,
            "s": 123,
            "value": 123
          }
        }
      ],
      "type_ignores": []
    }*/
})();
```

# License

Copyright (c) 2024 Tetsuro Yoshikawa Licensed under the MIT license.
