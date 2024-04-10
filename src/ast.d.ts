export type Module = ModuleNode | Interactive | Expression | FunctionType;

export type ModuleNode = {
    _type: 'Module';
    body: Stmt[];
    type_ignores: TypeIgnore[];
};

export type Interactive = {
    _type: 'Interactive';
    body: Stmt[];
};

export type Expression = {
    _type: 'Expression';
    body: Expr;
};

export type FunctionType = {
    _type: 'FunctionType';
    argtypes: Expr[];
    returns: Expr;
};

export type Stmt = FunctionDef | AsyncFunctionDef | ClassDef | Return | Delete | Assign | TypeAlias | AugAssign | AnnAssign | For | AsyncFor | While | If | With | AsyncWith | Match | Raise | Try | Assert | Import | ImportFrom | Global | Nonlocal | ExprStmt | Pass | Break | Continue;

export type FunctionDef = {
    _type: 'FunctionDef';
    name: string;
    args: Arguments;
    body: Stmt[];
    decorator_list: Expr[];
    returns?: Expr;
    type_comment?: string;
    type_params?: TypeParam[];
} & Attributes;

export type AsyncFunctionDef = {
    _type: 'AsyncFunctionDef';
    name: string;
    args: Arguments;
    body: Stmt[];
    decorator_list: Expr[];
    returns?: Expr;
    type_comment?: string;
    type_params?: TypeParam[];
} & Attributes;

export type ClassDef = {
    _type: 'ClassDef';
    name: string;
    bases: Expr[];
    keywords: Keyword[];
    body: Stmt[];
    decorator_list: Expr[];
    type_params?: TypeParam[];
} & Attributes;

export type Return = {
    _type: 'Return';
    value?: Expr;
} & Attributes;

export type Delete = {
    _type: 'Delete';
    targets: Expr[];
} & Attributes;

export type Assign = {
    _type: 'Assign';
    targets: Expr[];
    value: Expr;
    type_comment?: string;
} & Attributes;

export type TypeAlias = {
    _type: 'TypeAlias';
    name: Expr;
    type_params?: TypeParam[];
    value: Expr;
} & Attributes;

export type AugAssign = {
    _type: 'AugAssign';
    target: Expr;
    op: operator;
    value: Expr;
} & Attributes;

export type AnnAssign = {
    _type: 'AnnAssign';
    target: Expr;
    annotation: Expr;
    value?: Expr;
    simple: number;
} & Attributes;

export type For = {
    _type: 'For';
    target: Expr;
    iter: Expr;
    body: Stmt[];
    orelse: Stmt[];
    type_comment?: string;
} & Attributes;

export type AsyncFor = {
    _type: 'AsyncFor';
    target: Expr;
    iter: Expr;
    body: Stmt[];
    orelse: Stmt[];
    type_comment?: string;
} & Attributes;

export type While = {
    _type: 'While';
    test: Expr;
    body: Stmt[];
    orelse: Stmt[];
} & Attributes;

export type If = {
    _type: 'If';
    test: Expr;
    body: Stmt[];
    orelse: Stmt[];
} & Attributes;

export type With = {
    _type: 'With';
    items: WithItem[];
    body: Stmt[];
    type_comment?: string;
} & Attributes;

export type AsyncWith = {
    _type: 'AsyncWith';
    items: WithItem[];
    body: Stmt[];
    type_comment?: string;
} & Attributes;

export type Match = {
    _type: 'Match';
    subject: Expr;
    cases: MatchCase[];
} & Attributes;

export type Raise = {
    _type: 'Raise';
    exc?: Expr;
    cause?: Expr;
} & Attributes;

export type ExceptHandler = {
    _type: 'ExceptHandler';
    type?: Expr;
    name?: string;
    body: Stmt[];
} & Attributes;

export type Try = {
    _type: 'Try';
    body: Stmt[];
    handlers: ExceptHandler[];
    orelse: Stmt[];
    finalbody: Stmt[];
} & Attributes;

export type Assert = {
    _type: 'Assert';
    test: Expr;
    msg?: Expr;
} & Attributes;

export type Import = {
    _type: 'Import';
    names: Alias[];
} & Attributes;

export type ImportFrom = {
    _type: 'ImportFrom';
    module?: string;
    names: Alias[];
    level?: number;
} & Attributes;

export type Global = {
    _type: 'Global';
    names: string[];
} & Attributes;

export type Nonlocal = {
    _type: 'Nonlocal';
    names: string[];
} & Attributes;

export type ExprStmt = {
    _type: 'Expr';
    value: Expr;
} & Attributes;

export type Pass = {
  _type: 'Pass';
} & Attributes;
export type Break = {
  _type: 'Break';
} & Attributes;
export type Continue = {
  _type: 'Continue';
} & Attributes;

export type Expr = BoolOp | NamedExpr | BinOp | UnaryOp | Lambda | IfExp | Dict | PythonSet | ListComp | SetComp | DictComp | GeneratorExp | Await | Yield | YieldFrom | Compare | Call | FormattedValue | JoinedStr | Constant | Attribute | Subscript | Starred | Name | List | Tuple;

export type BoolOp = {
    _type: 'BoolOp';
    op: boolop;
    values: Expr[];
} & Attributes;

export type NamedExpr = {
    _type: 'NamedExpr';
    target: Expr;
    value: Expr;
} & Attributes;

export type BinOp = {
    _type: 'BinOp';
    left: Expr;
    op: operator;
    right: Expr;
} & Attributes;

export type UnaryOp = {
    _type: 'UnaryOp';
    op: unaryop;
    operand: Expr;
} & Attributes;

export type Lambda = {
    _type: 'Lambda';
    args: Arguments;
    body: Expr;
} & Attributes;

export type IfExp = {
    _type: 'IfExp';
    test: Expr;
    body: Expr;
    orelse: Expr;
} & Attributes;

export type Dict = {
    _type: 'Dict';
    keys: Expr[];
    values: Expr[];
} & Attributes;

export type PythonSet = {
    _type: 'Set';
    elts: Expr[];
} & Attributes;

export type ListComp = {
    _type: 'ListComp';
    elt: Expr;
    generators: Comprehension[];
} & Attributes;

export type SetComp = {
    _type: 'SetComp';
    elt: Expr;
    generators: Comprehension[];
} & Attributes;

export type DictComp = {
    _type: 'DictComp';
    key: Expr;
    value: Expr;
    generators: Comprehension[];
} & Attributes;

export type GeneratorExp = {
    _type: 'GeneratorExp';
    elt: Expr;
    generators: Comprehension[];
} & Attributes;

export type Await = {
    _type: 'Await';
    value: Expr;
} & Attributes;

export type Yield = {
    _type: 'Yield';
    value?: Expr;
} & Attributes;

export type YieldFrom = {
    _type: 'YieldFrom';
    value: Expr;
} & Attributes;

export type Compare = {
    _type: 'Compare';
    left: Expr;
    ops: cmpop[];
    comparators: Expr[];
} & Attributes;

export type Call = {
    _type: 'Call';
    func: Expr;
    args: Expr[];
    keywords: Keyword[];
} & Attributes;

export type FormattedValue = {
    _type: 'FormattedValue';
    value: Expr;
    conversion: Expr;
    format_spec?: JoinedStr;
} & Attributes;

export type JoinedStr = {
    _type: 'JoinedStr';
    values: Constant | FormattedValue;
} & Attributes;

export type Constant = {
    _type: 'Constant';
    value: any;
} & Attributes;

export type Attribute = {
    _type: 'Attribute';
    value: Expr;
    attr: string;
    ctx: expr_context;
} & Attributes;

export type Subscript = {
    _type: 'Subscript';
    value: Expr;
    slice: Slice;
    ctx: expr_context;
} & Attributes;

export type Starred = {
    _type: 'Starred';
    value: Expr;
    ctx: expr_context;
} & Attributes;

export type Name = {
    _type: 'Name';
    id: string;
    ctx: expr_context;
} & Attributes;

export type List = {
    _type: 'List';
    elts: Expr[];
    ctx: expr_context;
} & Attributes;

export type Tuple = {
    _type: 'Tuple';
    elts: Expr[];
    ctx: expr_context;
} & Attributes;

export type Slice = {
    _type: 'Slice';
    lower?: Expr;
    upper?: Expr;
    step?: Expr;
} & Attributes;

export type Comprehension = {
    _type: 'comprehension';
    target: Expr;
    iter: Expr;
    ifs: Expr[];
    is_async: number;
};

export type Arguments = {
    _type: 'arguments';
    posonlyargs: Arg[];
    args: Arg[];
    vararg?: Arg | null;
    kwonlyargs: Arg[];
    kw_defaults: Expr[];
    kwarg?: Arg | null;
    defaults: Expr[];
};

export type Arg = {
    _type: 'arg';
    arg: string;
    annotation?: Expr;
    type_comment?: string;
} & Attributes;

export type Keyword = {
    _type: 'keyword';
    arg?: string;
    value: Expr;
} & Attributes;

export type Alias = {
    _type: 'alias';
    name: string;
    asname?: string;
} & Attributes;

export type WithItem = {
    _type: 'withitem';
    context_expr: Expr;
    optional_vars?: Expr;
} & Attributes;

export type MatchCase = {
    _type: 'match_case';
    pattern: Pattern;
    guard?: Expr;
    body: Stmt[];
} & Attributes;

export type Pattern = MatchValue | MatchSingleton | MatchSequence | MatchMapping | MatchClass | MatchStar | MatchAs | MatchOr;

export type MatchValue = {
    _type: 'MatchValue';
    value: Expr;
} & Attributes;

export type MatchSingleton = {
    _type: 'MatchSingleton';
    value: Constant;
} & Attributes;

export type MatchSequence = {
    _type: 'MatchSequence';
    patterns: Pattern[];
} & Attributes;

export type MatchMapping = {
    _type: 'MatchMapping';
    keys: Expr[];
    patterns: Pattern[];
    rest?: string;
} & Attributes;

export type MatchClass = {
    _type: 'MatchClass';
    cls: Expr;
    patterns: Pattern[];
    kwd_attrs?: string[];
    kwd_patterns: Pattern[];
} & Attributes;

export type MatchStar = {
    _type: 'MatchStar';
    name?: string;
} & Attributes;

export type MatchAs = {
    _type: 'MatchAs';
    pattern?: Pattern;
    name?: string;
} & Attributes;

export type MatchOr = {
    _type: 'MatchOr';
    patterns: Pattern[];
} & Attributes;

export type TypeIgnore = {
    _type: 'TypeIgnore';
    lineno: number;
    tag: string;
};

export type TypeParam = TypeVar | ParamSpec | TypeVarTuple;

export type TypeVar = {
    _type: 'TypeVar';
    name: string;
    bound?: Expr;
} & Attributes;

export type ParamSpec = {
    _type: 'ParamSpec';
    name: string;
} & Attributes;

export type TypeVarTuple = {
    _type: 'TypeVarTuple';
    name: string;
} & Attributes;

export type And = {
  _type: 'And';
};
export type Or = {
  _type: 'Or';
};
export type Add = {
  _type: 'Add';
};
export type Sub = {
  _type: 'Sub';
};
export type Mult = {
  _type: 'Mult';
};
export type MatMult = {
  _type: 'MatMult';
};
export type Div = {
  _type: 'Div';
};
export type Mod = {
  _type: 'Mod';
};
export type Pow = {
  _type: 'Pow';
};
export type LShift = {
  _type: 'LShift';
};
export type RShift = {
  _type: 'RShift';
};
export type BitOr = {
  _type: 'BitOr';
};
export type BitXor = {
  _type: 'BitXor';
};
export type BitAnd = {
  _type: 'BitAnd';
};
export type FloorDiv = {
  _type: 'FloorDiv';
};
export type Invert = {
  _type: 'Invert';
};
export type Not = {
  _type: 'Not';
};
export type UAdd = {
  _type: 'UAdd';
};
export type USub = {
  _type: 'USub';
};
export type Eq = {
  _type: 'Eq';
};
export type NotEq = {
  _type: 'NotEq';
};
export type Lt = {
  _type: 'Lt';
};
export type LtE = {
  _type: 'LtE';
};
export type Gt = {
  _type: 'Gt';
};
export type GtE = {
  _type: 'GtE';
};
export type Is = {
  _type: 'Is';
};
export type IsNot = {
  _type: 'IsNot';
};
export type In = {
  _type: 'In';
};
export type NotIn = {
  _type: 'NotIn';
};
export type Load = {
  _type: 'Load';
};
export type Store = {
  _type: 'Store';
};
export type Del = {
  _type: 'Del';
};

export type boolop = And | Or;
export type operator = Add | Sub | Mult | MatMult | Div | Mod | Pow | LShift | RShift | BitOr | BitXor | BitAnd | FloorDiv;
export type unaryop = Invert | Not | UAdd | USub;
export type cmpop = Eq | NotEq | Lt | LtE | Gt | GtE | Is | IsNot | In | NotIn;
export type expr_context = Load | Store | Del;

interface Attributes {
    lineno: number;
    col_offset: number;
    end_lineno?: number;
    end_col_offset?: number;
}
