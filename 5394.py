from typing import List

class Solution:
    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:
        h = len(nums)
        maxw = 0
        wlist = []
        for l in nums:
            width = len(l)
            wlist.append(width)
            if maxw < width:
                maxw = width
        ret = []
        h_list = []
        sumxy = 0
        for x in range(0,h):
            h_list.append(x)
            dellist = []
            for i in range(len(h_list)-1,-1,-1):
                xindex = h_list[i]
                if wlist[xindex] < sumxy - xindex + 1:
                    dellist.append(i)
                else:
                    ret.append(nums[xindex][sumxy - xindex])
            for d in dellist:
                h_list.pop(d)
            sumxy += 1

        for maxy in range(1,maxw):
            dellist = []
            for i in range(len(h_list)-1,-1,-1):
                xindex = h_list[i]
                if wlist[xindex] < sumxy - xindex + 1:
                    dellist.append(i)
                else:
                    ret.append(nums[xindex][sumxy - xindex])
            for d in dellist:
                h_list.pop(d)
            sumxy += 1
        
        return ret 

s = Solution()

nums = [[1,2,3],[4,5,6],[7,8,9]]
print(s.findDiagonalOrder(nums))

nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
print(s.findDiagonalOrder(nums))

nums = [[1,2,3],[4],[5,6,7],[8],[9,10,11]]
print(s.findDiagonalOrder(nums)) 
nums = [[1,2,3,4,5,6]]
print(s.findDiagonalOrder(nums)) 