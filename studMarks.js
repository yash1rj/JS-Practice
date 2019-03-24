let studentMarks = [21,24,23,19,3,20,15,25,13,20];

let avgMarks = 0;

function find_more_than_avg(marks) {
    for (let i=0; i<studentMarks.length; i++) {
        avgMarks += studentMarks[i];
    }
    avgMarks /= studentMarks.length;
    
    console.log("Average Marks of class: "+avgMarks);
    let sCount =0;
    for (let i=0; i<studentMarks.length; i++) {
        if (studentMarks[i] > avgMarks) {
            sCount++;
        }
    }
    let sGr8rAvg = (sCount/studentMarks.length)*100;
    console.log("Percentage of students scoring more than avg: "+sGr8rAvg);
}

function generate_frequency() {
    for (let i=0; i<26; i++) {
        if () {

        }
    }
}

find_more_than_avg();
generate_frequency();