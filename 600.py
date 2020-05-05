class Solution:
    def findIntegers(self, num: int) -> int:
        bits = []
        tmp = num
        while tmp > 0:
            bits.append(tmp & 0x1)
            tmp = tmp >> 1
        
        res = [[1,1]]
        for i in range(1,len(bits)):
            r = [res[i-1][1],res[i-1][0]+res[i-1][1]]
            res.append(r)
        #print(res)
        ret = 0
        bits = bits[::-1]
        bitslist = [str(x) for x in bits]
        #print(bits)
        l = len(bits)
        last = 0
        for i in range(0,l):
            if bits[i] == 1:
                if last == 0:
                        ret += res[l-i-1][1]
                        last = 1
                        continue
                elif i < l-1:
                    for j in range(i+1,l):
                        bits[j] = 1
            last = 0
        
        #print("%d %s %d"%(num,"".join(bitslist),ret + 1))
        return ret + 1

s = Solution()
for i in range(1,101):
    s.findIntegers(i)

        
        
