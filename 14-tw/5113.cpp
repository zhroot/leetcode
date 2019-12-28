#include<cstdio>
#include<iostream>
#include<vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> removeInterval(vector<vector<int>>& intervals, vector<int>& toBeRemoved) {
        vector<vector<int>> results;
        int r1 = toBeRemoved[0];
        int r2 = toBeRemoved[1];
        for(int i = 0;i< intervals.size();i++){
            int left = intervals[i][0];
            int right = intervals[i][1];
            
            if(right <= r1 || left >= r2){
                vector<int> tmp;
                tmp.push_back(left);
                tmp.push_back(right);
                results.push_back(tmp);
                continue;
            }
            if(left < r1){
                vector<int> tmp;
                tmp.push_back(left);
                tmp.push_back(r1);
                results.push_back(tmp);
            }
            if(right > r2){
                vector<int> tmp;
                tmp.push_back(r2);
                tmp.push_back(right);
                results.push_back(tmp);
            }
        }
        return results;
    }
};

int main(){

}