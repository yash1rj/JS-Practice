let studentMarks1 = [21,24,23,19,3,20,15,25,13,20];
let studentMarks2 = [12,18,25,24,2,5,18,20,20,21];

let avgMarks = 0;

function find_more_than_avg(marks) {
    for (let i=0; i<marks.length; i++) {
        avgMarks += marks[i];
    }
    avgMarks /= marks.length;
    
    console.log("Average Marks of class: "+avgMarks);
    let sCount =0;
    for (let i=0; i<marks.length; i++) {
        if (marks[i] > avgMarks) {
            sCount++;
        }
    }
    let sGr8rAvg = (sCount/marks.length)*100;
    console.log("Percentage of students scoring more than avg: "+sGr8rAvg+"%");
}

function generate_frequency(marks) {
    let freqArr = [];
    for (let i=0; i<26; i++) {
        let fCnt = 0;
        for (let j=0; j<marks.length; j++) {
            if (i === marks[j]) {
                fCnt++;
            }
        }
        freqArr.push(fCnt);
    }
    console.log("Frequency: ["+freqArr+"]");
}

find_more_than_avg(studentMarks2);
generate_frequency(studentMarks2);