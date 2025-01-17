// 初期値を定義
let count = 0;

// 必要な要素を取得
const counterDisplay = document.getElementById('counter');
const counterButton = document.getElementById('counterButton');
const counterButton2 = document.getElementById('decrementButton')

// ボタンがクリックされた時の処理
counterButton.addEventListener('click', () => {
  count=count+1; // カウントを1増やす
  counterDisplay.textContent = count; // 表示を更新
});
counterButton2.addEventListener('click', () => {
    count=count-1; // カウントを1減らす
    counterDisplay.textContent = count; // 表示を更新
});