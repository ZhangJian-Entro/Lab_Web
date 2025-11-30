/* script.js */
document.addEventListener('DOMContentLoaded', function () {
  
  // --- 1. 邮箱复制功能 (保持不变) ---
  var btn = document.getElementById('contactBtn');
  var email = 'codenucleus@outlook.com';

  if (btn) {
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(email).then(function() {
        var originalText = btn.innerText;
        btn.innerText = '邮箱已复制 ✅';
        btn.style.background = '#4caf50'; 
        setTimeout(function() {
          btn.innerText = originalText;
          btn.style.background = ''; 
        }, 2000);
      }).catch(function(err) {
        alert('我的邮箱是：' + email);
      });
    });
  }

  // --- 2. 自由滚动监听 (新逻辑) ---
  // 不再拦截鼠标滚轮，而是监听元素是否进入视野
  
  const observerOptions = {
    threshold: 0.3 // 当页面有 30% 进入屏幕时触发
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 如果进入视野
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // (可选) 滚出视野后移除 active，这样往回滚还能再看一次动画
        // 如果你不希望动画重复播放，把下面这行注释掉即可
        entry.target.classList.remove('active'); 
      }
    });
  }, observerOptions);

  // 开始监视所有的 .page 页面
  document.querySelectorAll('.page').forEach(page => {
    observer.observe(page);
  });
  
});