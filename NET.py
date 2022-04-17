# Nerglish-English Translator
import re
import string


def 英转鱼(英文):

    # 匹配所有标点符号
    标点符号 = '[·’!"\#$%&\'()＃！（）*+,-./:;<=>?\@，：?￥★、…．＞【】［］《》？“”‘’\[\\]^_`{|}~]+'
    标点位置 = []
    空格位置 = []
    匹配到的标点 = []
    for i in range(len(英文)):
        if 英文[i] in 标点符号:
            标点位置.append(i)
            匹配到的标点.append(英文[i])
        if 英文[i] == ' ':
            空格位置.append(i)
    无连字符英文 = 英文.replace('-', ' ')
    无标点英文 = 无连字符英文.translate(str.maketrans('','', string.punctuation))

    # 翻译所有字典中有的词
    英鱼词典 = {
        'feral': "furl",
        'move': "flllurlog",
        'walk': "flllurlog",
        'fisherman': "fllurlokkr",
        'net': "mgrrrl",
        'gordunni': "grrundee",
        'clan': "klun",
        'guild': "klun",
        'thirsty': "mllgggrrrr",
        'with': "mmgr",
        'tasty': "mmm",
        'yummy': "mmm",
        'good': "mmmm",
        'great': "mmmmm",
        'right': "mmmml",
        'correct': "mmmml",
        'aunt': "mmmrrggllm",
        'uncle': "mmmrrrggglm",
        'friend': "mmmrrglllm",
        'friends': "mmmrrglllm",
        'murloc': "mmmurlok",
        'yes': "mrgle",
        'ok': "mrgle",
        'magic': "mrrrggk",
        'sorry': "mrrrgll",
        'and': "n",
        'no': "nk",
        'ogre': "rrrgrrr",
        'sing': "shng",
        'scar': "skr",
        'spring': "srng",
        'honor': "uuua",
        'battlecry': "mrglllll",
        'charge': "flllurllg",
        'beast': "flrrgmmrk",
        'king': "kklun",
        'crush': "kllrrug",
        'taunt': "murrgl",
        'agent': "fllrrgmgr",
        'combo': "flrrkgr",
        'blizzard': "blrrgrk",
        'battle': "aaaaaaaaugurgble",
        'nerglish': "mmmurlokmurg",
        'translate': "mmmurglurk",
        'mrgl': "mrgl",
        'ringworm': "murguhlum",
        'up': "urka"
    }
    英文词 = 无标点英文.split(" ")
    已翻译词位置 = []
    i = 0
    for i in range(len(英文词)):
        if 英鱼词典.__contains__(英文词[i]):
            英文词[i] = 英鱼词典[英文词[i]]
            已翻译词位置.append(i)

    # 剔除已翻译的英文
    i = 0
    未翻译英文词 = []
    for i in range(len(英文词)):
        if i not in 已翻译词位置:
            未翻译英文词.append(英文词[i])
    
    # 翻译未翻译的英语
    英鱼字典 = {
        'a':'ar',
        'e':'ml',
        'i':'rh',
        'o':'lo',
        'u':'ur',
        't':'lm',
        's':'sh',
        'h':'mh',
        'w':'ua',
        'b':'bk',
        'm':'mm',
        'f':'fl',
        'c':'gk',
        'l':'ll',
        'd':'de',
        'p':'un',
        'n':'nl',
        'g':'gg',
        'r':'rn',
        'y':'rm',
        'v':'ok',
        'j':'gl',
        'k':'km',
        'q':'ku',
        'x':'uu',
        'z':'gb',
        
        'A':'Ar',
        'E':'Ml',
        'I':'Rh',
        'O':'Lo',
        'U':'Ur',
        'T':'Lm',
        'S':'Sh',
        'H':'Mh',
        'W':'Ua',
        'B':'Bk',
        'M':'Mm',
        'F':'Fl',
        'C':'Gk',
        'L':'Ll',
        'D':'De',
        'P':'Un',
        'N':'Nl',
        'G':'Gg',
        'R':'Rn',
        'Y':'Rm',
        'V':'Ok',
        'J':'Gl',
        'K':'Km',
        'Q':'Ku',
        'X':'Uu',
        'Z':'Gb'
    }
    i = 0
    鱼人词 = []
    for i in range(len(未翻译英文词)):
        j = 0
        新词 = ''
        for j in range(len(未翻译英文词[i])):
            新词 += 英鱼字典[未翻译英文词[i][j]]
        鱼人词.append(新词)

    # 整合信息并输出
    i = 0
    j = 0
    for i in range(len(英文词)):
        if i not in 已翻译词位置:
            英文词[i] = 鱼人词[j]
            j += 1

    i = 0
    单词i = 0
    标点i = 0
    空格i = 0
    鱼文 = ''
    while i < len(英文):
        try:
            if i == 空格位置[空格i]:
                鱼文 += ' '
                空格i += 1
                i += 1
                continue
        except:
            pass
        try:
            if i == 标点位置[标点i]:
                鱼文 += 匹配到的标点[标点i]
                标点i += 1
                i += 1
                continue
        except:
            pass
        try:
            鱼文 += ''.join(英文词[单词i])
            i += len(无标点英文.split(" ")[单词i])
            单词i += 1
        except:
            pass
    return 鱼文



def 鱼转英(鱼文):
    # 匹配所有标点符号
    标点符号 = '[·’!"\#$%&\'()＃！（）*+,-./:;<=>?\@，：?￥★、…．＞【】［］《》？“”‘’\[\\]^_`{|}~]+'
    标点位置 = []
    空格位置 = []
    匹配到的标点 = []
    for i in range(len(鱼文)):
        if 鱼文[i] in 标点符号:
            标点位置.append(i)
            匹配到的标点.append(鱼文[i])
        if 鱼文[i] == ' ':
            空格位置.append(i)
    无连字符鱼文 = 鱼文.replace('-', ' ')
    无标点鱼文 = 无连字符鱼文.translate(str.maketrans('','', string.punctuation))

    # 翻译所有字典中有的词
    鱼英词典 = {
        'furl': 'feral', 
        'flllurlog': 'walk', 
        'fllurlokkr': 'fisherman', 
        'mgrrrl': 'net', 
        'grrundee': 'gordunni', 
        'klun': 'guild', 
        'mllgggrrrr': 'thirsty', 
        'mmgr': 'with', 
        'mmm': 'yummy', 
        'mmmm': 'good', 
        'mmmmm': 'great', 
        'mmmml': 'correct', 
        'mmmrrggllm': 'aunt', 
        'mmmrrrggglm': 'uncle', 
        'mmmrrglllm': 'friends', 
        'mmmurlok': 'murloc', 
        'mrgle': 'ok', 
        'mrrrggk': 'magic', 
        'mrrrgll': 'sorry', 
        'n': 'and', 
        'nk': 'no', 
        'rrrgrrr': 'ogre', 
        'shng': 'sing', 
        'skr': 'scar', 
        'srng': 'spring', 
        'uuua': 'honor', 
        'mrglllll': 'battlecry', 
        'flllurllg': 'charge', 
        'flrrgmmrk': 'beast', 
        'kklun': 'king', 
        'kllrrug': 'crush', 
        'murrgl': 'taunt', 
        'fllrrgmgr': 'agent', 
        'flrrkgr': 'combo', 
        'blrrgrk': 'blizzard', 
        'aaaaaaaaugurgble': 'battle', 
        'mmmurlokmurg': 'nerglish', 
        'mmmurglurk': 'translate', 
        'mrgl': 'mrgl', 
        'murguhlum': 'ringworm', 
        'urka': 'up'
    }
    鱼文词 = 无标点鱼文.split(" ")
    已翻译词位置 = []
    i = 0
    for i in range(len(鱼文词)):
        if 鱼英词典.__contains__(鱼文词[i]):
            鱼文词[i] = 鱼英词典[鱼文词[i]]
            已翻译词位置.append(i)

    # 剔除已翻译的英文
    i = 0
    未翻译鱼文词 = []
    for i in range(len(鱼文词)):
        if i not in 已翻译词位置:
            未翻译鱼文词.append(鱼文词[i])
    
    # 翻译未翻译的英语
    鱼英字典 = {
        'ar': 'a', 
        'ml': 'e', 
        'rh': 'i', 
        'lo': 'o', 
        'ur': 'u', 
        'lm': 't', 
        'sh': 's', 
        'mh': 'h', 
        'ua': 'w', 
        'bk': 'b', 
        'mm': 'm', 
        'fl': 'f', 
        'gk': 'c', 
        'll': 'l', 
        'de': 'd', 
        'un': 'p',
        'nl': 'n', 
        'gg': 'g', 
        'rn': 'r', 
        'rm': 'y', 
        'ok': 'v', 
        'gl': 'j', 
        'km': 'k', 
        'ku': 'q', 
        'uu': 'x', 
        'gb': 'z', 

        'Ar': 'A', 
        'Ml': 'E', 
        'Rh': 'I', 
        'Lo': 'O', 
        'Ur': 'U', 
        'Lm': 'T', 
        'Sh': 'S', 
        'Mh': 'H', 
        'Ua': 'W', 
        'Bk': 'B', 
        'Mm': 'M', 
        'Fl': 'F', 
        'Gk': 'C', 
        'Ll': 'L', 
        'De': 'D', 
        'Un': 'P',
        'Nl': 'N', 
        'Gg': 'G', 
        'Rn': 'R', 
        'Rm': 'Y', 
        'Ok': 'V', 
        'Gl': 'J', 
        'Km': 'K', 
        'Ku': 'Q', 
        'Uu': 'X', 
        'Gb': 'Z'
    }
    i = 0
    英文词 = []
    for i in range(len(未翻译鱼文词)):
        j = 0
        新词 = ''
        for j in range(0,len(未翻译鱼文词[i]),2):
            新词 += 鱼英字典[未翻译鱼文词[i][j]+未翻译鱼文词[i][j+1]]
        英文词.append(新词)

    # 整合信息并输出
    i = 0
    j = 0
    for i in range(len(鱼文词)):
        if i not in 已翻译词位置:
            鱼文词[i] = 英文词[j]
            j += 1

    i = 0
    单词i = 0
    标点i = 0
    空格i = 0
    英文 = ''
    while i < len(鱼文):
        try:
            if i == 空格位置[空格i]:
                英文 += ' '
                空格i += 1
                i += 1
                continue
        except:
            pass
        try:
            if i == 标点位置[标点i]:
                英文 += 匹配到的标点[标点i]
                标点i += 1
                i += 1
                continue
        except:
            pass
        try:
            英文 += ''.join(鱼文词[单词i])
            i += len(无标点鱼文.split(" ")[单词i])
            单词i += 1
        except:
            pass

    return 英文


英文 = 'The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time.'

鱼文 = 'Lmmhml shmlllfl-shlmurderm llmlshshlonlsh rhnl lmmhrhsh shmlgklmrhlonl arrnml uarnrhlmlmmlnl n lornggarnlrhshmlde argkgklornderhnlgg lmlo lmmhml llmlokmlllsh lofl lmmhml Gklommmmlonl Mlurrnlounmlarnl Flrnarmmmlualornkm lofl Rnmlflmlrnmlnlgkml fllorn llarnlggurarggmlsh (GkMlFlRn). Lmmhmlrnml arrnml derhflflmlrnmlnllm lmrmunmlsh lofl lmmluulmsh n rhnllmmlrnargklmrhokml mluumlrngkrhshmlsh lmmharlm unrnargklmrhshml lmmhml rnmlarderhnlgg shkmrhllllsh rmlour nlmlmlde lmlo delo uamlllll rhnl rmlourrn shlmurderhmlsh, lmlo ggmllm armhmlarde arlm ualornkm n lmlo gklommmmurnlrhgkarlmml rhnl Mlnlggllrhshmh rhnl rmlourrn flrnmlml lmrhmmml.'

print(英转鱼(英文))
print(鱼转英(鱼文))