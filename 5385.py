class Solution:
    def maxDiff(self, num: int) -> int:
        if num <= 9:
            return 8
        numstr = str(num)
        flag = False
        astr = numstr
        for i in range(0,len(numstr)):
            s = numstr[i]
            if s != '9':
                astr = numstr.replace(s,'9')
                flag = True
                break
        if not flag:
            astr = numstr.replace(numstr[0],'9')
        a = int(astr)
        bstr = numstr
        if numstr[0] != '1':
            bstr = numstr.replace(numstr[0],'1')
        else:
            for i in range(1,len(numstr)):
                s = numstr[i]
                if s != '1' and s != '0':
                    bstr = numstr.replace(s,'0')
                    break
        b = int(bstr)
       # print("num %d a %d b %d a-b %d"%(num,a,b,a-b))
        return a - b


s = Solution()

num = 555
print(s.maxDiff(num))

num = 111
print(s.maxDiff(num))

num = 999
print(s.maxDiff(num))

num = 9
print(s.maxDiff(num))

num = 123456
print(s.maxDiff(num))

num = 10000
print(s.maxDiff(num))

num = 9288
print(s.maxDiff(num))

num = 1101057
print(s.maxDiff(num))