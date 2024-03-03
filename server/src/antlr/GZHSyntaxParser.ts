// Generated from ./server/src/antlr/GZHSyntax.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GZHSyntaxListener } from "./GZHSyntaxListener";
import { GZHSyntaxVisitor } from "./GZHSyntaxVisitor";


export class GZHSyntaxParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly ID = 2;
	public static readonly WS = 3;
	public static readonly COMMENT = 4;
	public static readonly RULE_file = 0;
	public static readonly RULE_property = 1;
	public static readonly RULE_value = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "property", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "ID", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GZHSyntaxParser._LITERAL_NAMES, GZHSyntaxParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GZHSyntaxParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GZHSyntax.g4"; }

	// @Override
	public get ruleNames(): string[] { return GZHSyntaxParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GZHSyntaxParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GZHSyntaxParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GZHSyntaxParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GZHSyntaxParser.ID) {
				{
				{
				this.state = 6;
				this.property();
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 12;
			this.match(GZHSyntaxParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GZHSyntaxParser.RULE_property);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.match(GZHSyntaxParser.ID);
			this.state = 15;
			this.match(GZHSyntaxParser.T__0);
			this.state = 17;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 16;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 19;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GZHSyntaxParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this.match(GZHSyntaxParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06\x1A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x07\x02\n\n\x02\f\x02\x0E\x02" +
		"\r\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x06\x03\x14\n\x03\r\x03" +
		"\x0E\x03\x15\x03\x04\x03\x04\x03\x04\x02\x02\x02\x05\x02\x02\x04\x02\x06" +
		"\x02\x02\x02\x02\x18\x02\v\x03\x02\x02\x02\x04\x10\x03\x02\x02\x02\x06" +
		"\x17\x03\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\r\x03\x02" +
		"\x02\x02\v\t\x03\x02\x02\x02\v\f\x03\x02\x02\x02\f\x0E\x03\x02\x02\x02" +
		"\r\v\x03\x02\x02\x02\x0E\x0F\x07\x02\x02\x03\x0F\x03\x03\x02\x02\x02\x10" +
		"\x11\x07\x04\x02\x02\x11\x13\x07\x03\x02\x02\x12\x14\x05\x06\x04\x02\x13" +
		"\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15" +
		"\x16\x03\x02\x02\x02\x16\x05\x03\x02\x02\x02\x17\x18\x07\x04\x02\x02\x18" +
		"\x07\x03\x02\x02\x02\x04\v\x15";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GZHSyntaxParser.__ATN) {
			GZHSyntaxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GZHSyntaxParser._serializedATN));
		}

		return GZHSyntaxParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(GZHSyntaxParser.EOF, 0); }
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GZHSyntaxParser.RULE_file; }
	// @Override
	public enterRule(listener: GZHSyntaxListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: GZHSyntaxListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GZHSyntaxVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(GZHSyntaxParser.ID, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GZHSyntaxParser.RULE_property; }
	// @Override
	public enterRule(listener: GZHSyntaxListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: GZHSyntaxListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GZHSyntaxVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(GZHSyntaxParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GZHSyntaxParser.RULE_value; }
	// @Override
	public enterRule(listener: GZHSyntaxListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: GZHSyntaxListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GZHSyntaxVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


