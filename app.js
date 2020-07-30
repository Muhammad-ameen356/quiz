function submit() {
    var score = 0;
    var q1_ans1_right = document.getElementById("q1-ans1")
    var q1_ans2 = document.getElementById("q1-ans2")
    var q1_ans3 = document.getElementById("q1-ans3")
    if (q1_ans1_right.checked == true) {
        score++
        var uthao = document.getElementById("dado").innerHTML = "Right"
    } else if (q1_ans2.checked == true) {
        var uthao = document.getElementById("dado").innerHTML = "Wrong"
    } else if (q1_ans3.checked == true) {
        var uthao = document.getElementById("dado").innerHTML = "Wrong"
    } else {
        var uthao = document.getElementById("dado").innerHTML = "Please Select Any one option"
        document.getElementById("hide").hidden = true

    }


}

function subMo() {
    var score = 0;
    var q2_ans3_right = document.getElementById("q2-ans3")
    var q2_ans2 = document.getElementById("q2-ans2")
    var q2_ans1 = document.getElementById("q2-ans1")
    if (q2_ans3_right.checked == true) {
        score++
        var uthao = document.getElementById("dado").innerHTML = "Right"
    } else {
        var uthao = document.getElementById("dado").innerHTML = "Wrong"
    }
}

function thirdSubmit() {
    var score = 0;


    var q3_ans1_right = document.getElementById("q3-ans1")
    var q3_ans2 = document.getElementById("q3-ans2")
    var q3_ans1 = document.getElementById("q3-ans3")
    if (q3_ans1_right.checked == true) {
        score++
        var uthao = document.getElementById("dado").innerHTML = "Right"
    } else {
        var uthao = document.getElementById("dado").innerHTML = "Wrong"
    }

}