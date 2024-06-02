import { loadPyodide } from "pyodide";
import {TOKEN_TYPES} from './token_types';

type ALL_TOKEN_TYPES = typeof TOKEN_TYPES[keyof typeof TOKEN_TYPES];

export type Token = [ALL_TOKEN_TYPES, string, [number, number], [number, number], string];

export async function tokenize(code: string): Promise<Token[]> {
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
