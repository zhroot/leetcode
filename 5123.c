


typedef struct {
    char characters[15];
    int strLen;
    int combinationLength;
    int indexArr[15];
    char nextStr[15];
    int hasNext;
} CombinationIterator;


CombinationIterator* combinationIteratorCreate(char * characters, int combinationLength) {
    CombinationIterator * ret = (CombinationIterator *)malloc(sizeof(CombinationIterator));
    memcpy(ret->characters,characters);
    ret->combinationLength = combinationLength;
    ret->strLen = strlen(characters);
    for(int i = 0;i<combinationLength;i++){
        ret->indexArr[i] = i;
    }
    ret->hasNext = 1;
    return ret;
}

char * combinationIteratorNext(CombinationIterator* obj) {
    char ret[15];
    strcpy(ret,obj->nextStr);
    int find = 0;
    for(int j=obj->combinationLength-1;j>=0;j--){
            if(obj->indexArr[j]<obj->strLen-(obj->combinationLength-j)){
                obj->indexArr[j] = obj->indexArr[j] + 1;
                for(int i = j+1;i<obj->combinationLength;i++){
                    obj->indexArr[i] = obj->indexArr[i-1]+1;
                }
                obj->indexArr[j] = obj->indexArr[j]+1;
                find = 1;
            }
    }
    if(!find){
        obj->hasNext = 0;
    } else {
        for(int i=0;i<obj->combinationLength;i++){
            obj->nextStr[i] = obj->characters[obj->indexArr[i]];
        }
    }
    return ret;
}

bool combinationIteratorHasNext(CombinationIterator* obj) {
  return (bool)obj->hasNext;
}

void combinationIteratorFree(CombinationIterator* obj) {
    free(obj);
    obj = 0;
}

/**
 * Your CombinationIterator struct will be instantiated and called as such:
 * CombinationIterator* obj = combinationIteratorCreate(characters, combinationLength);
 * char * param_1 = combinationIteratorNext(obj);
 
 * bool param_2 = combinationIteratorHasNext(obj);
 
 * combinationIteratorFree(obj);
*/