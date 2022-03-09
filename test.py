# nerglish-english translator
# 最优先匹配标点符号
# 再匹配字典中有的词
# 再匹配双音节词
# 最后匹配单个字母
import re
import string

'''
def 鱼转英(鱼文):
    return 英文
'''

英文 = 'The self-study lessons in this section are written and organised according to the levels of the Common European Framework of Reference for languages (CEFR). There are different types of texts and interactive exercises that practise the reading skills you need to do well in your studies, to get ahead at work and to communicate in English in your free time.'

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
        'p':'ur',
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
        'P':'Ur',
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

print(英文)
print(英转鱼(英文))