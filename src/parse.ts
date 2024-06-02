import { loadPyodide } from "pyodide";
import type {ModuleNode, Interactive, Expression, FunctionType} from './type';

type modeMap = {
  exec: ModuleNode,
  eval: Expression,
  single: Interactive,
  func_type: FunctionType,
};

export async function parse<T extends keyof modeMap = 'exec'>(code: string, mode?: T)//: Promise<modeMap[T]> {
: Promise<modeMap['exec']> {
  const pyodide = await loadPyodide();

  const ast = pyodide.runPython(`
from ast import parse
from _ast import AST
import codecs

BUILTIN_PURE = (int, float, bool)
BUILTIN_BYTES = (bytearray, bytes)
BUILTIN_STR = (str)


def decode_str(value):
    return value


def decode_bytes(value):
    try:
        return value.decode('utf-8')
    except:
        return codecs.getencoder('hex_codec')(value)[0].decode('utf-8')

def ast2json(node):
    assert isinstance(node, AST)
    to_return = dict()
    to_return['_type'] = node.__class__.__name__
    for attr in dir(node):
        if attr.startswith("_"):
            continue
        to_return[attr] = get_value(getattr(node, attr))
    return to_return


def get_value(attr_value):
    if attr_value is None:
        return attr_value
    if isinstance(attr_value, BUILTIN_PURE):
        return attr_value
    if isinstance(attr_value, BUILTIN_BYTES):
        return decode_bytes(attr_value)
    if isinstance(attr_value, BUILTIN_STR):
        return decode_str(attr_value)
    if isinstance(attr_value, complex):
        return str(attr_value)
    if isinstance(attr_value, list):
        return [get_value(x) for x in attr_value]
    if isinstance(attr_value, AST):
        return ast2json(attr_value)
    if isinstance(attr_value, type(Ellipsis)):
        return '...'
    else:
        raise Exception("unknown case for '%s' of type '%s'" % (attr_value, type(attr_value)))

import json
json.dumps(ast2json(parse(code, mode)), indent=2)
`, {globals: pyodide.toPy({
  code,
  mode: mode ?? 'exec'
})});

  return JSON.parse(ast);
}
