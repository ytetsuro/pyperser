import {parse} from '../';

describe('parseable python code.', () => {
  it('should return Module AST when undefined mode', async () => {
    const ast = await parse('x = 1', 'exec');

    expect(ast).toStrictEqual({"_type":"Module","body":[{"_type":"Assign","col_offset":0,"end_col_offset":5,"end_lineno":1,"lineno":1,"targets":[{"_type":"Name","col_offset":0,"ctx":{"_type":"Store"},"end_col_offset":1,"end_lineno":1,"id":"x","lineno":1}],"type_comment":null,"value":{"_type":"Constant","col_offset":4,"end_col_offset":5,"end_lineno":1,"kind":null,"lineno":1,"n":1,"s":1,"value":1}}],"type_ignores":[]});
  });

  it('should return Module AST when mode is exec', async () => {
    const ast = await parse('x = 1', 'exec');

    expect(ast).toStrictEqual({"_type":"Module","body":[{"_type":"Assign","col_offset":0,"end_col_offset":5,"end_lineno":1,"lineno":1,"targets":[{"_type":"Name","col_offset":0,"ctx":{"_type":"Store"},"end_col_offset":1,"end_lineno":1,"id":"x","lineno":1}],"type_comment":null,"value":{"_type":"Constant","col_offset":4,"end_col_offset":5,"end_lineno":1,"kind":null,"lineno":1,"n":1,"s":1,"value":1}}],"type_ignores":[]});
  });

  it.skip('should return Expression AST when mode is eval', async () => {
    const ast = await parse('1', 'eval');

    expect(ast).toStrictEqual({});
  });

  it.skip('should return Interactive AST when mode is single', async () => {
    const ast = await parse('x = 1', 'single');

    expect(ast).toStrictEqual({});
  });

  it.skip('should return FunctionType AST when mode is func_type', async () => {
    const ast = await parse('(int, str) -> List[int]', 'func_type');

    expect(ast).toStrictEqual({});
  });
});
