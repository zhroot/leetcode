
import random
import numpy as np


# 把元素范围在0-3000之间的数组
# 压缩转为为 0 - 2^64之间的短数组
# 以前 一个元素占4个字节 
# 现在5个元素占8个字节 一个元素占12位bit
# 将数组长度压缩5倍
def short_array(arr):
    new_arr = []
    n = 0
    for i in range(0,len(arr)):
        if i != 0 and i % 5 == 0:
            new_arr.append(n)
            n = 0
        shift = (i % 5) * 12
        n += (arr[i] << shift)
    if n != 0:
        new_arr.append(n)
    return new_arr

def hash_arr(arr):
    h = 0
    for x in arr:
        x = np.uint64(np.uint64(x ^ (x >> 30)) * np.uint64(0xbf58476d1ce4e5b9))
        x = np.uint64(np.uint64(x ^ (x >> 27)) * np.uint64(0x94d049bb133111eb))
        x = np.uint64(x ^ (x >> 31))
        h += x
    return np.uint64(h)


class Solution:
    def init(self):
        self.ht = {}
        self.arr_list = []
        self.arr_len = []
        self.dup = 0
        self.collision = 0
    
    def hash_test(self,l,a,al):
        for i in l:
            if self.arr_len[i] == al and self.arr_list[i] == a:
                return True
        return False
        

    def dup_test(self,arr):
        print(arr)
        l = len(arr)
        arr = short_array(arr)
        h = hash_arr(arr)
        print(h)
        if h in self.ht:
            if self.hash_test(self.ht[h],arr,l):
                self.dup += 1
                return True
            self.ht[h].append(len(self.arr_list))
            self.collision += 1
        else:
            self.ht[h] = [len(self.arr_list)]
        self.arr_len.append(l)
        self.arr_list.append(arr)
        return False


if __name__ == '__main__':
    s = Solution()
    s.init()
    lastcollision = 0
    l = random.randint(10,18)
    for i in range(0,10):
        arr = []
        for j in range(0,l):
            arr.append(random.randint(0,3001))
        
        if s.dup_test(arr) and s.dup % 100 == 0:
                print('dup %d / %d'%(s.dup,i+1))
            
        if s.collision != lastcollision and s.collision % 100 == 0:
            lastcollision = s.collision
            print('collision %d / %d'%(s.collision,i+1))