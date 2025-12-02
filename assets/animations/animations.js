// animations.js - simple behavior for coin flip and optional auto-pulse
(function(){
  // coin flip click behavior
  function initCoin(){
    const wrap = document.createElement('div');
    wrap.className = 'coin-wrap';
    wrap.innerHTML = '<div class="coin pulse" id="siteCoin">₮</div><div class="coin-label">Flip coin — fun animation</div>';
    document.body.appendChild(wrap);

    const coin = document.getElementById('siteCoin');
    let busy = false;
    coin.addEventListener('click', function(){
      if (busy) return;
      busy = true;
      coin.classList.remove('pulse');
      coin.classList.add('flip');
      setTimeout(()=>{
        coin.classList.remove('flip');
        coin.classList.add('pulse');
        busy = false;
      }, 1300);
    });

    // optional gentle entrance
    setTimeout(()=> { coin.style.transform = 'translateY(0)'; }, 600);
  }

  // page glow elements (non-intrusive)
  function initGlows(){
    const g1 = document.createElement('div');
    g1.className = 'page-glow-top';
    document.body.appendChild(g1);
    const g2 = document.createElement('div');
    g2.className = 'page-glow-bottom';
    document.body.appendChild(g2);
  }

  // init on DOM ready
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=>{ initCoin(); initGlows(); });
  } else {
    initCoin(); initGlows();
  }
})();
