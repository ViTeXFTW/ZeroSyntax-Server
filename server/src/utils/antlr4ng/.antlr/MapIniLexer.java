// Generated from c:/Users/Mads/Sync/ZeroSyntax-Server/server/src/utils/antlr4ng/MapIni.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MapIniLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, CONDITIONSTATE=4, ADDMODULE=5, REMOVEMODULE=6, 
		EQ=7, STRING=8, ID=9, NEWLINE=10, WS=11, COMMENT=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "CONDITIONSTATE", "ADDMODULE", "REMOVEMODULE", 
			"EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'end'", "'End'", "'END'", null, null, null, "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "CONDITIONSTATE", "ADDMODULE", "REMOVEMODULE", 
			"EQ", "STRING", "ID", "NEWLINE", "WS", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MapIniLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MapIni.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\f\u00a1\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003C\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004i\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007"+
		"~\b\u0007\n\u0007\f\u0007\u0081\t\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0005\b\u0087\b\b\n\b\f\b\u008a\t\b\u0001\t\u0003\t\u008d\b"+
		"\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0003\u000b\u0098\b\u000b\u0001\u000b\u0005\u000b\u009b\b"+
		"\u000b\n\u000b\f\u000b\u009e\t\u000b\u0001\u000b\u0001\u000b\u0000\u0000"+
		"\f\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006"+
		"\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0001\u0000\b\u0004"+
		"\u0000\n\n\r\r\"\"\\\\\u0002\u0000\"\"\\\\\u0006\u0000++-.09AZ__az\u0006"+
		"\u0000%%..0:AZ__az\u0001\u0000\r\r\u0001\u0000\n\n\u0002\u0000\t\t  \u0002"+
		"\u0000\n\n\r\r\u00aa\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0001\u0019\u0001\u0000\u0000\u0000\u0003\u001d\u0001\u0000\u0000"+
		"\u0000\u0005!\u0001\u0000\u0000\u0000\u0007B\u0001\u0000\u0000\u0000\t"+
		"h\u0001\u0000\u0000\u0000\u000bj\u0001\u0000\u0000\u0000\rw\u0001\u0000"+
		"\u0000\u0000\u000fy\u0001\u0000\u0000\u0000\u0011\u0084\u0001\u0000\u0000"+
		"\u0000\u0013\u008c\u0001\u0000\u0000\u0000\u0015\u0090\u0001\u0000\u0000"+
		"\u0000\u0017\u0097\u0001\u0000\u0000\u0000\u0019\u001a\u0005e\u0000\u0000"+
		"\u001a\u001b\u0005n\u0000\u0000\u001b\u001c\u0005d\u0000\u0000\u001c\u0002"+
		"\u0001\u0000\u0000\u0000\u001d\u001e\u0005E\u0000\u0000\u001e\u001f\u0005"+
		"n\u0000\u0000\u001f \u0005d\u0000\u0000 \u0004\u0001\u0000\u0000\u0000"+
		"!\"\u0005E\u0000\u0000\"#\u0005N\u0000\u0000#$\u0005D\u0000\u0000$\u0006"+
		"\u0001\u0000\u0000\u0000%&\u0005C\u0000\u0000&\'\u0005o\u0000\u0000\'"+
		"(\u0005n\u0000\u0000()\u0005d\u0000\u0000)*\u0005i\u0000\u0000*+\u0005"+
		"t\u0000\u0000+,\u0005i\u0000\u0000,-\u0005o\u0000\u0000-.\u0005n\u0000"+
		"\u0000./\u0005S\u0000\u0000/0\u0005t\u0000\u000001\u0005a\u0000\u0000"+
		"12\u0005t\u0000\u00002C\u0005e\u0000\u000034\u0005T\u0000\u000045\u0005"+
		"r\u0000\u000056\u0005a\u0000\u000067\u0005n\u0000\u000078\u0005s\u0000"+
		"\u000089\u0005i\u0000\u00009:\u0005t\u0000\u0000:;\u0005i\u0000\u0000"+
		";<\u0005o\u0000\u0000<=\u0005n\u0000\u0000=>\u0005S\u0000\u0000>?\u0005"+
		"t\u0000\u0000?@\u0005a\u0000\u0000@A\u0005t\u0000\u0000AC\u0005e\u0000"+
		"\u0000B%\u0001\u0000\u0000\u0000B3\u0001\u0000\u0000\u0000C\b\u0001\u0000"+
		"\u0000\u0000DE\u0005A\u0000\u0000EF\u0005d\u0000\u0000FG\u0005d\u0000"+
		"\u0000GH\u0005M\u0000\u0000HI\u0005o\u0000\u0000IJ\u0005d\u0000\u0000"+
		"JK\u0005u\u0000\u0000KL\u0005l\u0000\u0000Li\u0005e\u0000\u0000MN\u0005"+
		"a\u0000\u0000NO\u0005d\u0000\u0000OP\u0005d\u0000\u0000PQ\u0005m\u0000"+
		"\u0000QR\u0005o\u0000\u0000RS\u0005d\u0000\u0000ST\u0005u\u0000\u0000"+
		"TU\u0005l\u0000\u0000Ui\u0005e\u0000\u0000VW\u0005A\u0000\u0000WX\u0005"+
		"D\u0000\u0000XY\u0005D\u0000\u0000YZ\u0005M\u0000\u0000Z[\u0005O\u0000"+
		"\u0000[\\\u0005D\u0000\u0000\\]\u0005U\u0000\u0000]^\u0005L\u0000\u0000"+
		"^i\u0005E\u0000\u0000_`\u0005A\u0000\u0000`a\u0005d\u0000\u0000ab\u0005"+
		"d\u0000\u0000bc\u0005m\u0000\u0000cd\u0005o\u0000\u0000de\u0005d\u0000"+
		"\u0000ef\u0005u\u0000\u0000fg\u0005l\u0000\u0000gi\u0005e\u0000\u0000"+
		"hD\u0001\u0000\u0000\u0000hM\u0001\u0000\u0000\u0000hV\u0001\u0000\u0000"+
		"\u0000h_\u0001\u0000\u0000\u0000i\n\u0001\u0000\u0000\u0000jk\u0005R\u0000"+
		"\u0000kl\u0005e\u0000\u0000lm\u0005m\u0000\u0000mn\u0005o\u0000\u0000"+
		"no\u0005v\u0000\u0000op\u0005e\u0000\u0000pq\u0005M\u0000\u0000qr\u0005"+
		"o\u0000\u0000rs\u0005d\u0000\u0000st\u0005u\u0000\u0000tu\u0005l\u0000"+
		"\u0000uv\u0005e\u0000\u0000v\f\u0001\u0000\u0000\u0000wx\u0005=\u0000"+
		"\u0000x\u000e\u0001\u0000\u0000\u0000y\u007f\u0005\"\u0000\u0000z~\b\u0000"+
		"\u0000\u0000{|\u0005\\\u0000\u0000|~\u0007\u0001\u0000\u0000}z\u0001\u0000"+
		"\u0000\u0000}{\u0001\u0000\u0000\u0000~\u0081\u0001\u0000\u0000\u0000"+
		"\u007f}\u0001\u0000\u0000\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080"+
		"\u0082\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0082"+
		"\u0083\u0005\"\u0000\u0000\u0083\u0010\u0001\u0000\u0000\u0000\u0084\u0088"+
		"\u0007\u0002\u0000\u0000\u0085\u0087\u0007\u0003\u0000\u0000\u0086\u0085"+
		"\u0001\u0000\u0000\u0000\u0087\u008a\u0001\u0000\u0000\u0000\u0088\u0086"+
		"\u0001\u0000\u0000\u0000\u0088\u0089\u0001\u0000\u0000\u0000\u0089\u0012"+
		"\u0001\u0000\u0000\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008b\u008d"+
		"\u0007\u0004\u0000\u0000\u008c\u008b\u0001\u0000\u0000\u0000\u008c\u008d"+
		"\u0001\u0000\u0000\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u008f"+
		"\u0007\u0005\u0000\u0000\u008f\u0014\u0001\u0000\u0000\u0000\u0090\u0091"+
		"\u0007\u0006\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0006\n\u0000\u0000\u0093\u0016\u0001\u0000\u0000\u0000\u0094\u0098\u0005"+
		";\u0000\u0000\u0095\u0096\u0005/\u0000\u0000\u0096\u0098\u0005/\u0000"+
		"\u0000\u0097\u0094\u0001\u0000\u0000\u0000\u0097\u0095\u0001\u0000\u0000"+
		"\u0000\u0098\u009c\u0001\u0000\u0000\u0000\u0099\u009b\b\u0007\u0000\u0000"+
		"\u009a\u0099\u0001\u0000\u0000\u0000\u009b\u009e\u0001\u0000\u0000\u0000"+
		"\u009c\u009a\u0001\u0000\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000"+
		"\u009d\u009f\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000\u0000\u0000"+
		"\u009f\u00a0\u0006\u000b\u0000\u0000\u00a0\u0018\u0001\u0000\u0000\u0000"+
		"\t\u0000Bh}\u007f\u0088\u008c\u0097\u009c\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}