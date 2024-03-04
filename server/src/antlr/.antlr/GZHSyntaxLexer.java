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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, BOOL=8, PROCENTAGE=9, 
		FLOAT=10, INT=11, STRING=12, ID=13, WS=14, COMMENT=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "BOOL", "PROCENTAGE", 
			"FLOAT", "INT", "STRING", "ID", "WS", "COMMENT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'Object'", "'objcet'", "'='", "'end'", "'End'", "'END'", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "BOOL", "PROCENTAGE", 
			"FLOAT", "INT", "STRING", "ID", "WS", "COMMENT"
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
		"\u0004\u0000\u000f\u0099\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007M\b\u0007\u0001\b\u0001"+
		"\b\u0003\bQ\b\b\u0001\b\u0001\b\u0001\t\u0003\tV\b\t\u0001\t\u0004\tY"+
		"\b\t\u000b\t\f\tZ\u0003\t]\b\t\u0001\t\u0001\t\u0004\ta\b\t\u000b\t\f"+
		"\tb\u0001\n\u0003\nf\b\n\u0001\n\u0004\ni\b\n\u000b\n\f\nj\u0001\u000b"+
		"\u0001\u000b\u0005\u000bo\b\u000b\n\u000b\f\u000br\t\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0005\u000bw\b\u000b\n\u000b\f\u000bz\t\u000b"+
		"\u0001\u000b\u0003\u000b}\b\u000b\u0001\f\u0001\f\u0005\f\u0081\b\f\n"+
		"\f\f\f\u0084\t\f\u0001\r\u0004\r\u0087\b\r\u000b\r\f\r\u0088\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u0090\b\u000e\u0001"+
		"\u000e\u0005\u000e\u0093\b\u000e\n\u000e\f\u000e\u0096\t\u000e\u0001\u000e"+
		"\u0001\u000e\u0000\u0000\u000f\u0001\u0001\u0003\u0002\u0005\u0003\u0007"+
		"\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b"+
		"\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u0001\u0000\u0007\u0001\u0000"+
		"09\u0001\u0000\"\"\u0001\u0000\'\'\u0003\u0000AZ__az\u0004\u000009AZ_"+
		"_az\u0003\u0000\t\n\r\r  \u0002\u0000\n\n\r\r\u00ab\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0001\u001f\u0001\u0000\u0000\u0000\u0003&\u0001\u0000\u0000\u0000"+
		"\u0005-\u0001\u0000\u0000\u0000\u0007/\u0001\u0000\u0000\u0000\t3\u0001"+
		"\u0000\u0000\u0000\u000b7\u0001\u0000\u0000\u0000\r;\u0001\u0000\u0000"+
		"\u0000\u000fL\u0001\u0000\u0000\u0000\u0011P\u0001\u0000\u0000\u0000\u0013"+
		"U\u0001\u0000\u0000\u0000\u0015e\u0001\u0000\u0000\u0000\u0017|\u0001"+
		"\u0000\u0000\u0000\u0019~\u0001\u0000\u0000\u0000\u001b\u0086\u0001\u0000"+
		"\u0000\u0000\u001d\u008f\u0001\u0000\u0000\u0000\u001f \u0005O\u0000\u0000"+
		" !\u0005b\u0000\u0000!\"\u0005j\u0000\u0000\"#\u0005e\u0000\u0000#$\u0005"+
		"c\u0000\u0000$%\u0005t\u0000\u0000%\u0002\u0001\u0000\u0000\u0000&\'\u0005"+
		"o\u0000\u0000\'(\u0005b\u0000\u0000()\u0005j\u0000\u0000)*\u0005c\u0000"+
		"\u0000*+\u0005e\u0000\u0000+,\u0005t\u0000\u0000,\u0004\u0001\u0000\u0000"+
		"\u0000-.\u0005=\u0000\u0000.\u0006\u0001\u0000\u0000\u0000/0\u0005e\u0000"+
		"\u000001\u0005n\u0000\u000012\u0005d\u0000\u00002\b\u0001\u0000\u0000"+
		"\u000034\u0005E\u0000\u000045\u0005n\u0000\u000056\u0005d\u0000\u0000"+
		"6\n\u0001\u0000\u0000\u000078\u0005E\u0000\u000089\u0005N\u0000\u0000"+
		"9:\u0005D\u0000\u0000:\f\u0001\u0000\u0000\u0000;<\u0005.\u0000\u0000"+
		"<\u000e\u0001\u0000\u0000\u0000=>\u0005y\u0000\u0000>?\u0005e\u0000\u0000"+
		"?M\u0005s\u0000\u0000@A\u0005n\u0000\u0000AM\u0005o\u0000\u0000BC\u0005"+
		"Y\u0000\u0000CD\u0005e\u0000\u0000DM\u0005s\u0000\u0000EF\u0005N\u0000"+
		"\u0000FM\u0005o\u0000\u0000GH\u0005Y\u0000\u0000HI\u0005E\u0000\u0000"+
		"IM\u0005S\u0000\u0000JK\u0005N\u0000\u0000KM\u0005O\u0000\u0000L=\u0001"+
		"\u0000\u0000\u0000L@\u0001\u0000\u0000\u0000LB\u0001\u0000\u0000\u0000"+
		"LE\u0001\u0000\u0000\u0000LG\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000"+
		"\u0000M\u0010\u0001\u0000\u0000\u0000NQ\u0003\u0015\n\u0000OQ\u0003\u0013"+
		"\t\u0000PN\u0001\u0000\u0000\u0000PO\u0001\u0000\u0000\u0000QR\u0001\u0000"+
		"\u0000\u0000RS\u0005%\u0000\u0000S\u0012\u0001\u0000\u0000\u0000TV\u0005"+
		"-\u0000\u0000UT\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000V\\\u0001"+
		"\u0000\u0000\u0000WY\u0007\u0000\u0000\u0000XW\u0001\u0000\u0000\u0000"+
		"YZ\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000"+
		"\u0000[]\u0001\u0000\u0000\u0000\\X\u0001\u0000\u0000\u0000\\]\u0001\u0000"+
		"\u0000\u0000]^\u0001\u0000\u0000\u0000^`\u0005.\u0000\u0000_a\u0007\u0000"+
		"\u0000\u0000`_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000b`\u0001"+
		"\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000c\u0014\u0001\u0000\u0000"+
		"\u0000df\u0005-\u0000\u0000ed\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000"+
		"\u0000fh\u0001\u0000\u0000\u0000gi\u0007\u0000\u0000\u0000hg\u0001\u0000"+
		"\u0000\u0000ij\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001"+
		"\u0000\u0000\u0000k\u0016\u0001\u0000\u0000\u0000lp\u0005\"\u0000\u0000"+
		"mo\b\u0001\u0000\u0000nm\u0001\u0000\u0000\u0000or\u0001\u0000\u0000\u0000"+
		"pn\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qs\u0001\u0000\u0000"+
		"\u0000rp\u0001\u0000\u0000\u0000s}\u0005\"\u0000\u0000tx\u0005\'\u0000"+
		"\u0000uw\b\u0002\u0000\u0000vu\u0001\u0000\u0000\u0000wz\u0001\u0000\u0000"+
		"\u0000xv\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000y{\u0001\u0000"+
		"\u0000\u0000zx\u0001\u0000\u0000\u0000{}\u0005\'\u0000\u0000|l\u0001\u0000"+
		"\u0000\u0000|t\u0001\u0000\u0000\u0000}\u0018\u0001\u0000\u0000\u0000"+
		"~\u0082\u0007\u0003\u0000\u0000\u007f\u0081\u0007\u0004\u0000\u0000\u0080"+
		"\u007f\u0001\u0000\u0000\u0000\u0081\u0084\u0001\u0000\u0000\u0000\u0082"+
		"\u0080\u0001\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083"+
		"\u001a\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000\u0085"+
		"\u0087\u0007\u0005\u0000\u0000\u0086\u0085\u0001\u0000\u0000\u0000\u0087"+
		"\u0088\u0001\u0000\u0000\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0088"+
		"\u0089\u0001\u0000\u0000\u0000\u0089\u008a\u0001\u0000\u0000\u0000\u008a"+
		"\u008b\u0006\r\u0000\u0000\u008b\u001c\u0001\u0000\u0000\u0000\u008c\u008d"+
		"\u0005/\u0000\u0000\u008d\u0090\u0005/\u0000\u0000\u008e\u0090\u0005;"+
		"\u0000\u0000\u008f\u008c\u0001\u0000\u0000\u0000\u008f\u008e\u0001\u0000"+
		"\u0000\u0000\u0090\u0094\u0001\u0000\u0000\u0000\u0091\u0093\b\u0006\u0000"+
		"\u0000\u0092\u0091\u0001\u0000\u0000\u0000\u0093\u0096\u0001\u0000\u0000"+
		"\u0000\u0094\u0092\u0001\u0000\u0000\u0000\u0094\u0095\u0001\u0000\u0000"+
		"\u0000\u0095\u0097\u0001\u0000\u0000\u0000\u0096\u0094\u0001\u0000\u0000"+
		"\u0000\u0097\u0098\u0006\u000e\u0000\u0000\u0098\u001e\u0001\u0000\u0000"+
		"\u0000\u0010\u0000LPUZ\\bejpx|\u0082\u0088\u008f\u0094\u0001\u0006\u0000"+
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