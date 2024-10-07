# Known Issues

## v0.1.0
**1. ⚠️ Inconsistent Completions ⚠️**  
Sometimes completions for simple values like INT, FLOAT, BOOLEAN, etc.. do not get shown. This is parsly because of the ANTLR grammar and Antlr4-c3 library taking to long to "walk" down every possible path and parsly because i do not know what i am doing ;\).

**2. ⚠️ ArmorTypes contain DamageTypes ⚠️**  
Yes, for a simpler parser the two share the same names, this only affects ArmorTypes that has KILL_GARRISONED & STATUS as ArmorType even tho they are DamageTypes

**3. ⚠️ Inconsistent completions with VETERENCY ⚠️**  
There have been obsereved issue where completions wont show correctly after a VETERENCY value (VETERAN, ELITE, HEROIC).  
