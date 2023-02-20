let count=0;
let total_marks=0;

class State{
    get count(){
        return count;
    }
    set count(value){
        value>=0 ?(count=value):(count=0);
    }
    score(sub1,sub2,sub3){
        total_marks=sub1+sub2+sub3;
    }
}

export default new State();