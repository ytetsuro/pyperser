import {tokenize} from '../tokenize';
import {TOKEN_TYPES} from '../token_types';

describe('tokenizable python code.', () => {
  it('should return python tokens', async () => {
    const ast = await tokenize('x=1');

    expect(ast).toStrictEqual([
      [TOKEN_TYPES.NAME, "x", [1, 0], [1, 1], "x=1"],
      [TOKEN_TYPES.OP, "=", [1, 1], [1, 2], "x=1"],
      [TOKEN_TYPES.NUMBER, "1", [1, 2], [1, 3], "x=1"],
      [TOKEN_TYPES.NEWLINE, "", [1, 3], [1, 4], "x=1"],
      [TOKEN_TYPES.ENDMARKER, "", [2, 0], [2, 0], ""]
    ]);
  });
});
