const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multiplyButton = document.getElementById("multiply-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function() {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
minusButton.onclick = function() {
    // count を更新
    count -= 1
    // count を表示
    display.textContent = count
  }

multiplyButton.onclick = function() {
    // count を更新
    count *= 2
    // count を表示
    display.textContent = count
}

function get_calc(btn) {
    if(btn.value == "=") {
      document.dentaku.display.value = eval(document.dentaku.display.value);
    } else if (btn.value == "C") {
      document.dentaku.display.value = "";
    } else {
      if (btn.value == "×") {
        btn.value = "*";
      } else if (btn.value == "÷") {
        btn.value = "/";
      } 
      document.dentaku.display.value += btn.value;
      document.dentaku.multi_btn.value = "×";
      document.dentaku.div_btn.value = "÷";
    }
  }