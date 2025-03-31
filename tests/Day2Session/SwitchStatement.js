function GradeCalculation(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score === 100):
            grade = "A";
            console.log("The Grade is : " + grade);
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            console.log("The Grade is : " + grade);
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            console.log("The Grade is : " + grade);
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            console.log("The Grade is : " + grade);
            break;
        case (score >= 0 && score < 60):
            grade = "F";
            console.log("The Grade is : " + grade);
            break;
        default:
            grade = "Invalid score"
            console.log(`The score ${grade} is invalid`);
            break;
    }
    return grade;
}

GradeCalculation(75);