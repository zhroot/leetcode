class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        size = len(s)
        a = [0]*size
        keys = ['a','e','i','o','u']
        maxr = 0
        cnt = 0
        for i in range(0,size):
            c = s[i]
            if c in keys:
                cnt += 1
            a[i] = cnt

        for i in range(0,size-k+1):
            basecnt = 0
            if i > 0:
                basecnt = a[i-1]
            end = min(i + k - 1,size)
            curr = a[end] - basecnt
            # print('start %d end %s cnt %s'%(i,end,curr))
            if curr > maxr:
                maxr = curr
        return maxr

so = Solution()
s = "abciiidef"
k = 3
print(so.maxVowels(s,k))

s = "aeiou"
k = 2
print(so.maxVowels(s,k))

s = "leetcode"
k = 3
print(so.maxVowels(s,k))

s = "rhythms"
k = 4
print(so.maxVowels(s,k))

s = "tryhard"
k = 4
print(so.maxVowels(s,k))

s = "ibpbhixfiouhdljnjfflpapptrxgcomvnb"
k = 33
print(so.maxVowels(s,k))