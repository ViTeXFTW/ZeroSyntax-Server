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
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly BOOL = 8;
	public static readonly PROCENTAGE = 9;
	public static readonly FLOAT = 10;
	public static readonly INT = 11;
	public static readonly STRING = 12;
	public static readonly ID = 13;
	public static readonly WS = 14;
	public static readonly COMMENT = 15;
	public static readonly RULE_file = 0;
	public static readonly RULE_object_class = 1;
	public static readonly RULE_property = 2;
	public static readonly RULE_end = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_fileString = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "object_class", "property", "end", "value", "fileString",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'Object'", "'objcet'", "'='", "'end'", "'End'", "'END'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "BOOL", "PROCENTAGE", "FLOAT", "INT", "STRING", "ID", "WS", 
		"COMMENT",
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.object_class();
			this.state = 13;
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
	public object_class(): Object_classContext {
		let _localctx: Object_classContext = new Object_classContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GZHSyntaxParser.RULE_object_class);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			_la = this._input.LA(1);
			if (!(_la === GZHSyntaxParser.T__0 || _la === GZHSyntaxParser.T__1)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 16;
			this.match(GZHSyntaxParser.ID);
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GZHSyntaxParser.ID) {
				{
				{
				this.state = 17;
				this.property();
				}
				}
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 23;
			this.end();
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
		this.enterRule(_localctx, 4, GZHSyntaxParser.RULE_property);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(GZHSyntaxParser.ID);
			this.state = 26;
			this.match(GZHSyntaxParser.T__2);
			this.state = 28;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 27;
					this.value();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 30;
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
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GZHSyntaxParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GZHSyntaxParser.T__3) | (1 << GZHSyntaxParser.T__4) | (1 << GZHSyntaxParser.T__5))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
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
		this.enterRule(_localctx, 8, GZHSyntaxParser.RULE_value);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.fileString();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.match(GZHSyntaxParser.BOOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.match(GZHSyntaxParser.PROCENTAGE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this.match(GZHSyntaxParser.INT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 38;
				this.match(GZHSyntaxParser.FLOAT);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 39;
				this.match(GZHSyntaxParser.STRING);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 40;
				this.match(GZHSyntaxParser.ID);
				}
				break;
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
	public fileString(): FileStringContext {
		let _localctx: FileStringContext = new FileStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GZHSyntaxParser.RULE_fileString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(GZHSyntaxParser.ID);
			this.state = 44;
			this.match(GZHSyntaxParser.T__6);
			this.state = 45;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x112\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x15\n\x03" +
		"\f\x03\x0E\x03\x18\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x06\x04" +
		"\x1F\n\x04\r\x04\x0E\x04 \x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06,\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02" +
		"\x04\x03\x02\x03\x04\x03\x02\x06\b\x023\x02\x0E\x03\x02\x02\x02\x04\x11" +
		"\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b\"\x03\x02\x02\x02\n+\x03\x02" +
		"\x02\x02\f-\x03\x02\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x07\x02\x02" +
		"\x03\x10\x03\x03\x02\x02\x02\x11\x12\t\x02\x02\x02\x12\x16\x07\x0F\x02" +
		"\x02\x13\x15\x05\x06\x04\x02\x14\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02" +
		"\x02\x16\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x19\x03\x02\x02" +
		"\x02\x18\x16\x03\x02\x02\x02\x19\x1A\x05\b\x05\x02\x1A\x05\x03\x02\x02" +
		"\x02\x1B\x1C\x07\x0F\x02\x02\x1C\x1E\x07\x05\x02\x02\x1D\x1F\x05\n\x06" +
		"\x02\x1E\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x1E\x03\x02\x02\x02" +
		" !\x03\x02\x02\x02!\x07\x03\x02\x02\x02\"#\t\x03\x02\x02#\t\x03\x02\x02" +
		"\x02$,\x05\f\x07\x02%,\x07\n\x02\x02&,\x07\v\x02\x02\',\x07\r\x02\x02" +
		"(,\x07\f\x02\x02),\x07\x0E\x02\x02*,\x07\x0F\x02\x02+$\x03\x02\x02\x02" +
		"+%\x03\x02\x02\x02+&\x03\x02\x02\x02+\'\x03\x02\x02\x02+(\x03\x02\x02" +
		"\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,\v\x03\x02\x02\x02-.\x07\x0F" +
		"\x02\x02./\x07\t\x02\x02/0\x07\x0F\x02\x020\r\x03\x02\x02\x02\x05\x16" +
		" +";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GZHSyntaxParser.__ATN) {
			GZHSyntaxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GZHSyntaxParser._serializedATN));
		}

		return GZHSyntaxParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public object_class(): Object_classContext {
		return this.getRuleContext(0, Object_classContext);
	}
	public EOF(): TerminalNode { return this.getToken(GZHSyntaxParser.EOF, 0); }
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


export class Object_classContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(GZHSyntaxParser.ID, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
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
	public get ruleIndex(): number { return GZHSyntaxParser.RULE_object_class; }
	// @Override
	public enterRule(listener: GZHSyntaxListener): void {
		if (listener.enterObject_class) {
			listener.enterObject_class(this);
		}
	}
	// @Override
	public exitRule(listener: GZHSyntaxListener): void {
		if (listener.exitObject_class) {
			listener.exitObject_class(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GZHSyntaxVisitor<Result>): Result {
		if (visitor.visitObject_class) {
			return visitor.visitObject_class(this);
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


export class EndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GZHSyntaxParser.RULE_end; }
	// @Override
	public enterRule(listener: GZHSyntaxListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: GZHSyntaxListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GZHSyntaxVisitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public fileString(): FileStringContext | undefined {
		return this.tryGetRuleContext(0, FileStringContext);
	}
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(GZHSyntaxParser.BOOL, 0); }
	public PROCENTAGE(): TerminalNode | undefined { return this.tryGetToken(GZHSyntaxParser.PROCENTAGE, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(GZHSyntaxParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(GZHSyntaxParser.FLOAT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(GZHSyntaxParser.STRING, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(GZHSyntaxParser.ID, 0); }
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


export class FileStringContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GZHSyntaxParser.ID);
		} else {
			return this.getToken(GZHSyntaxParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GZHSyntaxParser.RULE_fileString; }
	// @Override
	public enterRule(listener: GZHSyntaxListener): void {
		if (listener.enterFileString) {
			listener.enterFileString(this);
		}
	}
	// @Override
	public exitRule(listener: GZHSyntaxListener): void {
		if (listener.exitFileString) {
			listener.exitFileString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GZHSyntaxVisitor<Result>): Result {
		if (visitor.visitFileString) {
			return visitor.visitFileString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


