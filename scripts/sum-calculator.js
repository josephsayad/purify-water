var finalSum = 0;
const labels = [["10-bucks", 10], ["20-bucks", 20], ["50-bucks", 50], ["100-bucks", 100], ["200-bucks", 200] ];
var foundLabel = false;

function getSum(clicked_id, num){

    num = num || 0;

    if (num == -1){
        finalSum = 0;
        document.getElementById("display-sum").innerHTML = '$'+finalSum;
        return undefined;
    }
    // calculates the sum and stores it in final sum
    for (let i =0; i < labels.length; i++){

		if (labels[i][0] == clicked_id){
                finalSum = finalSum + labels[i][1];
                foundLabel = true;
        }
    };

    if (!foundLabel){
        finalSum = 0;
        finalSum = finalSum + parseFloat(num);
    }

    foundLabel = false;
    document.getElementById("display-sum").innerHTML = '$'+ finalSum;
}
