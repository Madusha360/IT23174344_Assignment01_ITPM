import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to the translator application
  await page.goto('https://www.swifttranslator.com/');
});

// ==========================================
// 1. POSITIVE FUNCTIONAL SCENARIOS (Daily Conversation)
// ==========================================

test('Pos_Fun_0001: Interrogative - Health check', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Oyaa saniipen innavaadha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයා සනීපෙන් ඉන්නවාද?');
});

test('Pos_Fun_0002: Compound Sentence - School and Coming', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Mama school yanavaa , oyaa adha enavadha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම school යනවා , ඔයා අද එනවද?');
});

test('Pos_Fun_0003: Conditional - If he comes', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Eyaa avoth, mama enne naehae.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('එයා අවොත්, මම එන්නෙ නැහැ.');
});

test('Pos_Fun_0004: Conditional - Rain', async ({ page }) => {
  // Fixed: 'vaessa' (Rain) instead of 'vaessee' (In the rain)
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('vaessa naethi unoth api enavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('වැස්ස නැති උනොත් අපි එනවා.');
});
test('Pos_Fun_0005: Greeting - Birthday', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('SuBha upandhinayak veevaa…!');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සුභ උපන්දිනයක් වේවා…!');
});

test('Pos_Fun_0006: Request - Invitation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Eyaata aaraDhanaa karanna puluvandha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('එයාට ආරධනා කරන්න පුලුවන්ද?');
});

test('Pos_Fun_0007: Imperative - Go outside', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('karuNaakaralaa eliyata yanna.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('කරුණාකරලා එලියට යන්න.');
});

test('Pos_Fun_0008: Confirmation - I will take it', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('hari, mama eka gannam.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('හරි, මම එක ගන්නම්.');
});

test('Pos_Fun_0009: Apology - Unable to tell', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('samaavenna, mata eeka kiyanna baeri unaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සමාවෙන්න, මට ඒක කියන්න බැරි උනා.');
});

test('Pos_Fun_0010: Slang/Command - Get out', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eeyii , eliyata palayan.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඒයී , එලියට පලයන්.');
});

test('Pos_Fun_0011: Feeling - Hungry', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata badagini.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට බඩගිනි.');
});

test('Pos_Fun_0012: Command - Drink water', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('vathura bonna.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('වතුර බොන්න.');
});

test('Pos_Fun_0013: Simple - Eating rice', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api bath kanavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි බත් කනවා.');
});

// ==========================================
// 2. POSITIVE FUNCTIONAL SCENARIOS (Robustness & Grammar)
// ==========================================

test('Pos_Fun_0014: Robustness - No Spaces', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('apibathkanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපිබත්කනවා');
});

test('Pos_Fun_0015: Repetition - Little by little', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('bath tika tika kanna.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('බත් ටික ටික කන්න.');
});

test('Pos_Fun_0016: Past Tense - Temple', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api iiyee pansal giyaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි ඊයේ පන්සල් ගියා.');
});

test('Pos_Fun_0017: Present Tense - School', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api dhaen school yanavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි දැන් school යනවා.');
});

test('Pos_Fun_0018: Future Tense - Campus', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api heta udhee campus enavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි හෙට උදේ campus එනවා.');
});

test('Pos_Fun_0019: Negation - Cannot eat', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata bath kanna baehae.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට බත් කන්න බැහැ.');
});

test('Pos_Fun_0020: Intent - About to eat', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama bath kanna hadhanne.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම බත් කන්න හදන්නෙ.');
});

test('Pos_Fun_0021: Suggestion - Church', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api palliyata yamudha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි පල්ලියට යමුද?');
});

test('Pos_Fun_0022: Polite Request - Clean Room', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('karuNaakara kaamaraya pirisidhuva thiyaagannavadha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('කරුණාකර  කාමරය පිරිසිදුව තියාගන්නවද?');
});

// ==========================================
// 3. POSITIVE FUNCTIONAL SCENARIOS (Data & Numeric)
// ==========================================

test('Pos_Fun_0023: Technology - WhatsApp', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata WHATSAPP paNividayak yomu karanna.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට WHATSAPP පණිවිඩයක් යොමු කරන්න.');
});

test('Pos_Fun_0024: Location - Colombo', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama colombo vaedata yanna hadhanne.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම colombo වැඩට යන්න හදන්නෙ.');
});

test('Pos_Fun_0025: Abbreviation - NIC', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('oyaage NIC aQQkaya evanna puluvandha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයාගෙ NIC අංකය එවන්න පුලුවන්ද?');
});

test('Pos_Fun_0026: Greeting - Thank You', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('bohoma sthuthii…!');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('බොහොම ස්තුතී…!');
});

test('Pos_Fun_0027: Currency - Rs Transfer', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata Rs. 500k transfer karanna puluvandha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට Rs. 500ක් transfer කරන්න පුලුවන්ද?');
});



test('Pos_Fun_0028: Date - December 13', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Mage upandhinee December 13.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('Mage උපන්දිනේ December 13.');
});

test('Pos_Fun_0029: Measurement - Weight', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eyaagee bara 55kg .');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('එයාගේ බර 55kg .');
});


// ==========================================
// 4. POSITIVE FUNCTIONAL SCENARIOS (Complex & Paragraphs)
// ==========================================

test('Pos_Fun_0030: Complex - Movie Plan', async ({ page }) => {
  const input = 'Mama heta film ekak balanna yanavaa . Oyath enavadha maath ekka yanna';
  const expected = 'මම හෙට film එකක් බලන්න යනවා . ඔයත් එනවද මාත් එක්ක යන්න';
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Pos_Fun_0031: Slang - Appatasirii (Surprise)', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('appatasirii gedharata kathaa karanna baeri unaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අප්පටසිරී ගෙදරට කතා කරන්න බැරි උනා');
});

test('Pos_Fun_0032: Mixed Data - ID and Time', async ({ page }) => {
  const input = 'Heta udhee 10a.m. pera   Oyaagee ID  aQQkaya mata SMS  karanna';
  const expected = 'හෙට උදේ 10a.m. පෙර ඔයාගේ ID අංකය මට SMS කරන්න';
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});

test('Pos_Fun_0033: Long Paragraph - Zoom Meeting', async ({ page }) => {
  const input = 'machan adha havasa zoom meeting ekata kalin mata rs.5000 k dhaanna . iita passe mama oyaata WHATSAPP eken meeting link eka dhaannam. havasa 6 p.m. ta meeting ekata join venna';
  const expected = 'මචන් අද හවස zoom meeting එකට කලින් මට rs.5000 ක් දාන්න . ඊට පස්සෙ මම ඔයාට WHATSAPP එකෙන් meeting link එක දාන්නම්. හවස 6 p.m. ට meeting එකට join වෙන්න';
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.bg-slate-50').first()).toHaveText(expected);
});
test('Pos_Fun_0034: Long Text - Cyclone Ditwah Report', async ({ page }) => {
  const input = `looka baeQQkuva visin prakaashayata pathkarana ladha "Cyclone DITWA 2025: SRI LANAKA" vaarthaavata anuva dhitvaa suLikuNaatuvee sRUju aarThika pirivaeya ae.dolar biliyana 4.1k pamaNa vee.`;
  const expectedStart = `ලෝක බැංකුව විසින් ප්‍රකාශයට පත්කරන ලද "Cyclone DITWA 2025:  SRI LANAKA" වාර්තාවට අනුව දිට්වා සුළිකුණාටුවේ සෘජු ආර්ථික පිරිවැය ඇ.ඩොලර් බිලියන 4.1ක් පමණ වේ.`;
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.bg-slate-50').first()).toContainText(expectedStart);
});

// ==========================================
// 5. POSITIVE UI SCENARIOS
// ==========================================


test('Pos_UI_0001: Activity - Dancing at home', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama gedhara enavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම ගෙදර එනවා.');
});

// ==========================================
// 6. NEGATIVE FUNCTIONAL SCENARIOS (Handling Typos/Dialects)
// ==========================================
test('Neg_Fun_0001: Privacy/Robustness - Email Handling', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee Email eka Kasun@gmail.com');
  // 'Kasun' capital K -> 'ඛ', 's' -> 'සු', 'n' -> 'න්'. @gmail.com remains English.
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ Email එක Kasun@gmail.com');
});

test('Neg_Fun_0002: Privacy/Robustness - Password Special Chars', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('ohugee Facebook Password eka Jony@123');
  // Testing how strict alphanumeric + symbols are transliterated
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔහුගේ Facebook Password එක Jony@123');
});

test('Neg_Fun_0003: Robustness - Capital B (Mb) Handling', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama kuBAurata yanavaa');
  // Capital B often triggers 'ඹ' (Mba/Mbo), testing if it breaks the word flow
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම කුඹුරට යනවා');
});

test('Neg_Fun_0004: Mixed Language - Country Name Preservation', async ({ page }) => {
  // Input: 'Sri lankava' should be preserved in English, while surrounding words are translated.
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('magee rata Sri lankava vee');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ රට Sri lankava වේ');
});

test('Neg_Fun_0005: Mixed Language - Common Usage (Meet)', async ({ page }) => {
  // Input: Common English verb 'meet' used in a Sinhala sentence.
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api heta udhee meet vemu');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි හෙට උදේ meet වෙමු');
});

test('Neg_Fun_0006: Security - SQL Code Preservation', async ({ page }) => {
  // Input: SQL commands should NOT be transliterated to Sinhala phonetics to avoid confusion.
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('SELECT * FROM users WHERE id=1');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('SELECT * FROM users WHERE id=1'); 
});

test('Neg_Fun_0007: Robustness - Fahrenheit Symbol', async ({ page }) => {
  // Input: '100°F' - Testing if the degree symbol (°) and 'F' are preserved/concatenated.
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Room temp eka 100°F');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('Room temp එක 100°F'); 
});

test('Neg_Fun_0008: Mixed - Utility (Gas)', async ({ page }) => {
  // Input: 'Api adha Gas ganna yanavaa.' (We are going to buy Gas today.)
  // Testing if the word 'Gas' is preserved as a common noun.
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Api adha gas ganna yanavaa.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි අද gas ගන්න යනවා.');
});

test('Neg_Fun_0009: Logic - Code Syntax Preservation', async ({ page }) => {
  // Input: Logical operators and keywords (if, ==, &&) should remain executable/readable code.
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('if ( A == B && C != D )');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('if ( A == B && C != D )'); 
});

test('Neg_Fun_0010: Technical - URL Preservation', async ({ page }) => {
  // Input: URL strings should remain in English to function as valid links.
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('site.com/search?q=sinhala&lang=en');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('site.com/search?q=sinhala&lang=en'); 
});