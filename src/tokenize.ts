import { loadPyodide } from "pyodide";
export async function tokenize(code: string) {
  const pyodide = await loadPyodide();

  const ast = pyodide.runPython(`
from tokenize import tokenize, generate_tokens
from io import StringIO

def tokenize(source):
  result = []
  tokens = generate_tokens(StringIO(source).readline)
  for token in tokens:
    result.append(token)
 
  return result

import json
json.dumps(tokenize(code), indent=2)
`, {globals: pyodide.toPy({
  code,
})});

  return JSON.parse(ast);
}
