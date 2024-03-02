// Generated from c:/Users/mads2/Desktop/ZeroSyntax/ZeroSyntax-Server/server/src/antlr/GZHSyntax.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class GZHSyntaxLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, PROPERTY_ID=6, OBJECT_NAME=7, 
		INT=8, FLOAT=9, PROCENTAGE=10, STRING=11, BOOL=12, WS=13, COMMENT=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "PROPERTY_ID", "OBJECT_NAME", 
			"INT", "FLOAT", "PROCENTAGE", "STRING", "BOOL", "WS", "COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Object'", "'='", "'End'", "'END'", "'end'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "PROPERTY_ID", "OBJECT_NAME", "INT", 
			"FLOAT", "PROCENTAGE", "STRING", "BOOL", "WS", "COMMENT"
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


	public GZHSyntaxLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "GZHSyntax.g4"; }

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
		"\u0004\u0000\u000e\u0093\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0005\u00055\b\u0005\n\u0005\f\u0005"+
		"8\t\u0005\u0001\u0006\u0001\u0006\u0005\u0006<\b\u0006\n\u0006\f\u0006"+
		"?\t\u0006\u0001\u0007\u0003\u0007B\b\u0007\u0001\u0007\u0004\u0007E\b"+
		"\u0007\u000b\u0007\f\u0007F\u0001\b\u0003\bJ\b\b\u0001\b\u0004\bM\b\b"+
		"\u000b\b\f\bN\u0001\b\u0001\b\u0004\bS\b\b\u000b\b\f\bT\u0001\t\u0003"+
		"\tX\b\t\u0001\t\u0004\t[\b\t\u000b\t\f\t\\\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0005\nc\b\n\n\n\f\nf\t\n\u0001\n\u0001\n\u0001\n\u0005\nk\b\n\n\n"+
		"\f\nn\t\n\u0001\n\u0003\nq\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003"+
		"\u000b\u0082\b\u000b\u0001\f\u0004\f\u0085\b\f\u000b\f\f\f\u0086\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0005\r\u008d\b\r\n\r\f\r\u0090\t\r\u0001\r"+
		"\u0001\r\u0000\u0000\u000e\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u0001\u0000\b\u0002\u0000AZaz\u0004\u0000%%09A"+
		"Zaz\u0003\u000009AZaz\u0001\u000009\u0001\u0000\"\"\u0001\u0000\'\'\u0003"+
		"\u0000\t\n\r\r  \u0002\u0000\n\n\r\r\u00a5\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0001\u001d\u0001\u0000\u0000\u0000\u0003"+
		"$\u0001\u0000\u0000\u0000\u0005&\u0001\u0000\u0000\u0000\u0007*\u0001"+
		"\u0000\u0000\u0000\t.\u0001\u0000\u0000\u0000\u000b2\u0001\u0000\u0000"+
		"\u0000\r9\u0001\u0000\u0000\u0000\u000fA\u0001\u0000\u0000\u0000\u0011"+
		"I\u0001\u0000\u0000\u0000\u0013W\u0001\u0000\u0000\u0000\u0015p\u0001"+
		"\u0000\u0000\u0000\u0017\u0081\u0001\u0000\u0000\u0000\u0019\u0084\u0001"+
		"\u0000\u0000\u0000\u001b\u008a\u0001\u0000\u0000\u0000\u001d\u001e\u0005"+
		"O\u0000\u0000\u001e\u001f\u0005b\u0000\u0000\u001f \u0005j\u0000\u0000"+
		" !\u0005e\u0000\u0000!\"\u0005c\u0000\u0000\"#\u0005t\u0000\u0000#\u0002"+
		"\u0001\u0000\u0000\u0000$%\u0005=\u0000\u0000%\u0004\u0001\u0000\u0000"+
		"\u0000&\'\u0005E\u0000\u0000\'(\u0005n\u0000\u0000()\u0005d\u0000\u0000"+
		")\u0006\u0001\u0000\u0000\u0000*+\u0005E\u0000\u0000+,\u0005N\u0000\u0000"+
		",-\u0005D\u0000\u0000-\b\u0001\u0000\u0000\u0000./\u0005e\u0000\u0000"+
		"/0\u0005n\u0000\u000001\u0005d\u0000\u00001\n\u0001\u0000\u0000\u0000"+
		"26\u0007\u0000\u0000\u000035\u0007\u0001\u0000\u000043\u0001\u0000\u0000"+
		"\u000058\u0001\u0000\u0000\u000064\u0001\u0000\u0000\u000067\u0001\u0000"+
		"\u0000\u00007\f\u0001\u0000\u0000\u000086\u0001\u0000\u0000\u00009=\u0007"+
		"\u0000\u0000\u0000:<\u0007\u0002\u0000\u0000;:\u0001\u0000\u0000\u0000"+
		"<?\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000=>\u0001\u0000\u0000"+
		"\u0000>\u000e\u0001\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000@B\u0005"+
		"-\u0000\u0000A@\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000BD\u0001"+
		"\u0000\u0000\u0000CE\u0007\u0003\u0000\u0000DC\u0001\u0000\u0000\u0000"+
		"EF\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000"+
		"\u0000G\u0010\u0001\u0000\u0000\u0000HJ\u0005-\u0000\u0000IH\u0001\u0000"+
		"\u0000\u0000IJ\u0001\u0000\u0000\u0000JL\u0001\u0000\u0000\u0000KM\u0007"+
		"\u0003\u0000\u0000LK\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000"+
		"NL\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000"+
		"\u0000PR\u0005.\u0000\u0000QS\u0007\u0003\u0000\u0000RQ\u0001\u0000\u0000"+
		"\u0000ST\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000"+
		"\u0000\u0000U\u0012\u0001\u0000\u0000\u0000VX\u0005-\u0000\u0000WV\u0001"+
		"\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000XZ\u0001\u0000\u0000\u0000"+
		"Y[\u0007\u0003\u0000\u0000ZY\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000"+
		"\u0000\\Z\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0001\u0000"+
		"\u0000\u0000^_\u0005%\u0000\u0000_\u0014\u0001\u0000\u0000\u0000`d\u0005"+
		"\"\u0000\u0000ac\b\u0004\u0000\u0000ba\u0001\u0000\u0000\u0000cf\u0001"+
		"\u0000\u0000\u0000db\u0001\u0000\u0000\u0000de\u0001\u0000\u0000\u0000"+
		"eg\u0001\u0000\u0000\u0000fd\u0001\u0000\u0000\u0000gq\u0005\"\u0000\u0000"+
		"hl\u0005\'\u0000\u0000ik\b\u0005\u0000\u0000ji\u0001\u0000\u0000\u0000"+
		"kn\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000\u0000lm\u0001\u0000\u0000"+
		"\u0000mo\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000oq\u0005\'\u0000"+
		"\u0000p`\u0001\u0000\u0000\u0000ph\u0001\u0000\u0000\u0000q\u0016\u0001"+
		"\u0000\u0000\u0000rs\u0005y\u0000\u0000st\u0005e\u0000\u0000t\u0082\u0005"+
		"s\u0000\u0000uv\u0005n\u0000\u0000v\u0082\u0005o\u0000\u0000wx\u0005Y"+
		"\u0000\u0000xy\u0005E\u0000\u0000y\u0082\u0005S\u0000\u0000z{\u0005N\u0000"+
		"\u0000{\u0082\u0005O\u0000\u0000|}\u0005Y\u0000\u0000}~\u0005e\u0000\u0000"+
		"~\u0082\u0005s\u0000\u0000\u007f\u0080\u0005N\u0000\u0000\u0080\u0082"+
		"\u0005o\u0000\u0000\u0081r\u0001\u0000\u0000\u0000\u0081u\u0001\u0000"+
		"\u0000\u0000\u0081w\u0001\u0000\u0000\u0000\u0081z\u0001\u0000\u0000\u0000"+
		"\u0081|\u0001\u0000\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0082"+
		"\u0018\u0001\u0000\u0000\u0000\u0083\u0085\u0007\u0006\u0000\u0000\u0084"+
		"\u0083\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086"+
		"\u0084\u0001\u0000\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087"+
		"\u0088\u0001\u0000\u0000\u0000\u0088\u0089\u0006\f\u0000\u0000\u0089\u001a"+
		"\u0001\u0000\u0000\u0000\u008a\u008e\u0005;\u0000\u0000\u008b\u008d\b"+
		"\u0007\u0000\u0000\u008c\u008b\u0001\u0000\u0000\u0000\u008d\u0090\u0001"+
		"\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008e\u008f\u0001"+
		"\u0000\u0000\u0000\u008f\u0091\u0001\u0000\u0000\u0000\u0090\u008e\u0001"+
		"\u0000\u0000\u0000\u0091\u0092\u0006\r\u0000\u0000\u0092\u001c\u0001\u0000"+
		"\u0000\u0000\u0010\u00006=AFINTW\\dlp\u0081\u0086\u008e\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}