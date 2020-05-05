from typing import List

class Solution:
    def getTriggerTime(self, increase: List[List[int]], requirements: List[List[int]]) -> List[int]:
        requireCList = []
        requireRList = []
        requireHList = []
        for i in range(0,len(requirements)):
            requireCList.append(i)
            requireRList.append(i)
            requireHList.append(i)
        
        requireCList = sorted(requireCList, key=lambda x:requirements[x][0])
        requireRList = sorted(requireRList, key=lambda x:requirements[x][1])
        requireHList = sorted(requireHList, key=lambda x:requirements[x][2])

        days = [-1] * len(requirements)

        day = -1
        crh = [0,0,0]
        increase.insert(0,[0,0,0])
        closeIndex = set()
        for inr in increase:
            day += 1
            crh[0] += inr[0]
            crh[1] += inr[1]
            crh[2] += inr[2]

            dellist = []
            index = -1
            for cc in requireCList:
                index += 1
                if cc in closeIndex:
                    dellist.append(index)
                    continue
                if requirements[cc][0] <= crh[0]:
                    if requirements[cc][1] <= crh[1] and requirements[cc][2] <= crh[2]:
                        dellist.append(index)
                        closeIndex.add(cc)
                        days[cc] =  day
                else:
                    break
            
            for i in range(0,len(dellist)):
                index = dellist[i] - i
                requireCList.pop(index)

            dellist = []
            index = -1

            for rr in requireRList:
                index += 1
                if rr in closeIndex:
                    dellist.append(index)
                    continue
                if requirements[rr][1] <= crh[1]:
                    if requirements[rr][0] <= crh[0] and requirements[rr][2] <= crh[2]:
                        closeIndex.add(rr) 
                        dellist.append(index)
                        days[rr] =  day
                else:
                    break

            for i in range(0,len(dellist)):
                index = dellist[i] - i
                requireRList.pop(index)

            dellist = []
            index = -1

            for hh in requireHList:
                index += 1
                if hh in closeIndex:
                    dellist.append(index)
                    continue
                if requirements[hh][2] <= crh[2]:
                    if requirements[hh][0] <= crh[0] and requirements[hh][1] <= crh[1]:
                        closeIndex.add(hh)
                        dellist.append(index)
                        days[hh] = day
                else:
                    break

            for i in range(0,len(dellist)):
                index = dellist[i] - i
                requireHList.pop(index)
        return days

s = Solution()
increase = [[2,8,4],[2,5,0],[10,9,8]]

requirements = [[2,11,3],[15,10,7],[9,17,12],[8,1,14]]

print(s.getTriggerTime(increase,requirements))

increase = [[0,4,5],[4,8,8],[8,6,1],[10,10,0]] 
requirements = [[12,11,16],[20,2,6],[9,2,6],[10,18,3],[8,14,9]]

print(s.getTriggerTime(increase,requirements))

increase = [[1,1,1]]
requirements = [[0,0,0]]
print(s.getTriggerTime(increase,requirements))
