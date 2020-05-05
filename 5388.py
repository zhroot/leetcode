class Solution:
    def reformat(self, s: str) -> str:
        a = []
        b = []
        ret = ''
        for c in s:
            if c.isalpha():
                a.append(c)
            else:
                b.append(c)
            
        f = a
        s = b
        if len(a) < len(b):
            f = b
            s = a
        
        if len(f) - len(s) > 1:
            return ''
        
        for i in range(0,len(s)):
            ret += f[i]
            ret += s[i]
        if len(f) > len(s):
            ret += f[len(f)-1]
        return ret

s = Solution()

print(s.reformat("a0b1c2"))

print(s.reformat("leetcode"))

print(s.reformat("covid2019"))

print(s.reformat("ab123"))

