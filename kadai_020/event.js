
// DOMから要素を取得
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンにクリックイベントを追加
button.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});

