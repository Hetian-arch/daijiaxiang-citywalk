// 戴家巷 CityWalk 交互式地图 - 主逻辑

// 节点数据
const nodes = [
  {
    id: 1,
    number: '节点 1 · 起点',
    title: '入口大台阶',
    subtitle: '高差与摊贩',
    image: 'assets/image2.jpeg',
    time: '10分钟',
    distance: '起点',
    difficulty: '★☆☆',
    description: '从滨江路拾级而上，入口大台阶是踏入戴家巷的第一道垂直考验。台阶右侧水果摊的红色塑料筐，摊主削水果的娴熟动作，成为这条路线最生动的开场白。条石台阶粗糙的质感在脚下延展，每一步都在诉说着山城重庆独特的地理性格。',
    features: [
      '感受垂直城市的第一印象',
      '观察本地摊贩的日常营生',
      '条石台阶的材质触感体验',
      '入口空间的仪式感营造',
      '从城市主干道到老街巷的过渡'
    ],
    fullText: '入口大台阶，高差与摊贩。从滨江路拾级而上，入口大台阶是踏入戴家巷的第一道垂直考验。台阶右侧水果摊的红色塑料筐，摊主削水果的娴熟动作，成为这条路线最生动的开场白。条石台阶粗糙的质感在脚下延展，每一步都在诉说着山城重庆独特的地理性格。这里是感受垂直城市的第一印象，观察本地摊贩的日常营生，体验条石台阶的材质触感，感受入口空间的仪式感营造，以及从城市主干道到老街巷的空间过渡。'
  },
  {
    id: 2,
    number: '节点 2',
    title: '文娟面馆',
    subtitle: '小业态与木构石墙',
    image: 'assets/image10.jpeg',
    time: '15分钟',
    distance: '0.3km',
    difficulty: '★☆☆',
    description: '木窗内端出红碗与铁板，红纸菜牌写着白砍鸡、爆肥肠、醋排骨、木耙鸡脚，一眼就是本地人家的口味。老楼下红椅满座，游客与居民同桌举杯，饭桌上的寒暄成了老街最生动的日常。天井里竹蒸笼冒着热气，青菜红椒分筐摆开，几位师傅现淘现切，食材新鲜看得见。',
    features: [
      '红纸菜牌的市井视觉符号',
      '天井备料的手作烟火气',
      '木构石墙的建筑质感',
      '游客与居民的混合社交',
      '江湖菜的味觉记忆点'
    ],
    fullText: '文娟面馆，小业态与木构石墙。木窗内端出红碗与铁板，红纸菜牌写着白砍鸡、爆肥肠、醋排骨、木耙鸡脚，一眼就是本地人家的口味。老楼下红椅满座，游客与居民同桌举杯，饭桌上的寒暄成了老街最生动的日常。天井里竹蒸笼冒着热气，青菜红椒分筐摆开，几位师傅现淘现切，食材新鲜看得见。这里有红纸菜牌的市井视觉符号，天井备料的手作烟火气，木构石墙的建筑质感，游客与居民的混合社交，以及江湖菜的味觉记忆点。'
  },
  {
    id: 3,
    number: '节点 3',
    title: '崖壁廊桥',
    subtitle: '垂直交通与框景',
    image: 'assets/image3.jpeg',
    time: '15分钟',
    distance: '0.4km',
    difficulty: '★★☆',
    description: '沿崖壁而建的木栈道，脚下是嘉陵江，头顶是老街巷。木栈道的脚步声清脆回响，江面的船笛声悠悠飘来，在垂直高差中感受山城独特的空间体验。每一个转角都是天然的框景，江景、桥影、山城轮廓在眼前次第展开。雨后石头的气息混杂着江风的湿度，形成独特的嗅觉记忆。',
    features: [
      '崖壁上的垂直交通体验',
      '移步换景的天然框景',
      '木栈道的脚步声与触感',
      '嘉陵江景的层次展开',
      '雨后崖壁的独特气息'
    ],
    fullText: '崖壁廊桥，垂直交通与框景。沿崖壁而建的木栈道，脚下是嘉陵江，头顶是老街巷。木栈道的脚步声清脆回响，江面的船笛声悠悠飘来，在垂直高差中感受山城独特的空间体验。每一个转角都是天然的框景，江景、桥影、山城轮廓在眼前次第展开。雨后石头的气息混杂着江风的湿度，形成独特的嗅觉记忆。这里有崖壁上的垂直交通体验，移步换景的天然框景，木栈道的脚步声与触感，嘉陵江景的层次展开，以及雨后崖壁的独特气息。'
  },
  {
    id: 4,
    number: '节点 4',
    title: '观景平台',
    subtitle: '千厮门大桥与天际线',
    image: 'assets/image4.jpeg',
    time: '15分钟',
    distance: '0.5km',
    difficulty: '★☆☆',
    description: '开阔的观景平台上，千厮门大桥横跨嘉陵江，江北嘴天际线尽收眼底。江风拂面，视野豁然开朗，是整条路线上最具视觉冲击力的节点。在这里，你可以看到城市的天际线如何在江水之上铺展，桥梁如何成为两岸的纽带，游船如何在江面划出优雅的弧线。黄昏时分，华灯初上，更是别有一番风味。',
    features: [
      '千厮门大桥全景视野',
      '江北嘴天际线观景位',
      '嘉陵江江景的开阔感',
      '黄昏时分的光影变化',
      '城市与自然的交汇点'
    ],
    fullText: '观景平台，千厮门大桥与天际线。开阔的观景平台上，千厮门大桥横跨嘉陵江，江北嘴天际线尽收眼底。江风拂面，视野豁然开朗，是整条路线上最具视觉冲击力的节点。在这里，你可以看到城市的天际线如何在江水之上铺展，桥梁如何成为两岸的纽带，游船如何在江面划出优雅的弧线。黄昏时分，华灯初上，更是别有一番风味。这里有千厮门大桥全景视野，江北嘴天际线观景位，嘉陵江江景的开阔感，黄昏时分的光影变化，以及城市与自然的交汇点。'
  },
  {
    id: 5,
    number: '节点 5',
    title: '听语轩茶舍',
    subtitle: '外摆社交',
    image: 'assets/image11.jpeg',
    time: '20分钟',
    distance: '0.4km',
    difficulty: '★☆☆',
    description: '老街巷中的茶舍，外摆座位沿巷铺开。老黄桷树下，本地人品茶摆龙门阵，游客歇脚观景。这里是路线的中点补给站，也是观察老重庆市井生活的最佳窗口。盖碗茶的清香与老街的烟火气交织，时光在这里慢了下来。茶舍的名字"听语轩"恰如其分——在这里，你听到的不只是茶客的闲聊，更是老城生活的低语。',
    features: [
      '老黄桷树下的茶座氛围',
      '本地人的龙门阵文化',
      '盖碗茶的传统品饮方式',
      '路线中点的补给与休憩',
      '观察市井生活的窗口'
    ],
    fullText: '听语轩茶舍，外摆社交。老街巷中的茶舍，外摆座位沿巷铺开。老黄桷树下，本地人品茶摆龙门阵，游客歇脚观景。这里是路线的中点补给站，也是观察老重庆市井生活的最佳窗口。盖碗茶的清香与老街的烟火气交织，时光在这里慢了下来。茶舍的名字"听语轩"恰如其分——在这里，你听到的不只是茶客的闲聊，更是老城生活的低语。这里有老黄桷树下的茶座氛围，本地人的龙门阵文化，盖碗茶的传统品饮方式，路线中点的补给与休憩，以及观察市井生活的窗口。'
  },
  {
    id: 6,
    number: '节点 6 · 终点',
    title: '老街出口',
    subtitle: '旅游商业与人流方向',
    image: 'assets/image12.jpeg',
    time: '10分钟',
    distance: '0.5km',
    difficulty: '★☆☆',
    description: '老街与洪崖洞方向的交汇处，旅游商业逐渐浓厚。黄瓦招牌配暖黄灯光，夜里档口坐满本地人，外摆桌连成一片，是老街最热闹的烟火现场。从这里，你可以选择继续前往洪崖洞，感受更浓郁的旅游氛围，也可以折返，重新品味戴家巷的静谧日常。这个节点，是日常与旅游的分界线，也是两种城市生活的交汇点。',
    features: [
      '老街与洪崖洞的交汇处',
      '旅游商业的渐进过渡',
      '暖黄灯光的夜间氛围',
      '本地人与游客的人流交汇',
      '日常与旅游的分界线'
    ],
    fullText: '老街出口，旅游商业与人流方向。老街与洪崖洞方向的交汇处，旅游商业逐渐浓厚。黄瓦招牌配暖黄灯光，夜里档口坐满本地人，外摆桌连成一片，是老街最热闹的烟火现场。从这里，你可以选择继续前往洪崖洞，感受更浓郁的旅游氛围，也可以折返，重新品味戴家巷的静谧日常。这个节点，是日常与旅游的分界线，也是两种城市生活的交汇点。这里有老街与洪崖洞的交汇处，旅游商业的渐进过渡，暖黄灯光的夜间氛围，本地人与游客的人流交汇，以及日常与旅游的分界线。'
  }
];

// 当前打开的节点
let currentNode = null;
let isReading = false;
let speechSynthesis = window.speechSynthesis;
let speechUtterance = null;

// 显示节点详情
function showNode(id) {
  const node = nodes.find(n => n.id === id);
  if (!node) return;
  
  currentNode = node;
  isReading = false;
  
  // 更新面板内容
  document.getElementById('panelImage').src = node.image;
  document.getElementById('panelImage').alt = node.title;
  document.getElementById('panelNumber').textContent = node.number;
  document.getElementById('panelTitle').textContent = node.title;
  document.getElementById('panelSubtitle').textContent = node.subtitle;
  document.getElementById('panelTime').textContent = node.time;
  document.getElementById('panelDistance').textContent = node.distance;
  document.getElementById('panelDifficulty').textContent = node.difficulty;
  document.getElementById('panelDescription').textContent = node.description;
  
  // 更新特色列表
  const featuresList = document.getElementById('panelFeatures');
  featuresList.innerHTML = '';
  node.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });
  
  // 重置朗读按钮
  updateReadButton();
  
  // 更新导航按钮状态
  updateNavButtons();
  
  // 显示面板
  document.getElementById('nodePanel').classList.add('active');
  document.getElementById('overlay').classList.add('active');
  
  // 高亮地图节点
  document.querySelectorAll('.map-node').forEach(el => {
    el.classList.remove('active');
  });
  const mapNode = document.querySelector(`.map-node[data-node="${id}"]`);
  if (mapNode) mapNode.classList.add('active');
  
  // 停止之前的朗读
  stopReading();
}

// 关闭节点面板
function closeNode() {
  document.getElementById('nodePanel').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
  
  // 移除地图节点高亮
  document.querySelectorAll('.map-node').forEach(el => {
    el.classList.remove('active');
  });
  
  // 停止朗读
  stopReading();
  currentNode = null;
}

// 切换朗读
function toggleRead() {
  if (!currentNode) return;
  
  if (isReading) {
    stopReading();
  } else {
    startReading();
  }
}

// 开始朗读
function startReading() {
  if (!currentNode || !speechSynthesis) return;
  
  // 停止之前的朗读
  stopReading();
  
  // 创建朗读实例
  speechUtterance = new SpeechSynthesisUtterance(currentNode.fullText);
  speechUtterance.lang = 'zh-CN';
  speechUtterance.rate = 0.95;
  speechUtterance.pitch = 1;
  speechUtterance.volume = 1;
  
  // 尝试选择中文语音
  const voices = speechSynthesis.getVoices();
  const chineseVoice = voices.find(voice => 
    voice.lang.includes('zh') || voice.lang.includes('CN') || voice.lang.includes('cmn')
  );
  if (chineseVoice) {
    speechUtterance.voice = chineseVoice;
  }
  
  // 事件监听
  speechUtterance.onend = () => {
    isReading = false;
    updateReadButton();
  };
  
  speechUtterance.onerror = () => {
    isReading = false;
    updateReadButton();
  };
  
  // 开始朗读
  speechSynthesis.speak(speechUtterance);
  isReading = true;
  updateReadButton();
}

// 停止朗读
function stopReading() {
  if (speechSynthesis) {
    speechSynthesis.cancel();
  }
  isReading = false;
  updateReadButton();
}

// 更新朗读按钮状态
function updateReadButton() {
  const btn = document.getElementById('readBtn');
  const icon = btn.querySelector('.icon');
  const text = btn.querySelector('.btn-text');
  
  if (isReading) {
    btn.classList.add('playing');
    icon.textContent = '⏸';
    text.textContent = '暂停朗读';
  } else {
    btn.classList.remove('playing');
    icon.textContent = '🔊';
    text.textContent = '朗读介绍';
  }
}

// 滚动动画
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => observer.observe(el));
}

// 键盘快捷键
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNode();
    }
    // 左右箭头导航节点
    if (currentNode) {
      if (e.key === 'ArrowLeft') {
        prevNode();
      } else if (e.key === 'ArrowRight') {
        nextNode();
      }
      // 空格键控制朗读
      if (e.key === ' ') {
        e.preventDefault();
        toggleRead();
      }
    }
  });
}

// 初始化语音合成（预加载语音列表）
function initSpeechSynthesis() {
  if (speechSynthesis) {
    // 某些浏览器需要先调用一次才能加载语音列表
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => {
      speechSynthesis.getVoices();
    };
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 初始化滚动动画
  initScrollAnimations();
  
  // 初始化键盘快捷键
  initKeyboardShortcuts();
  
  // 初始化语音合成
  initSpeechSynthesis();
  
  // 初始化节点卡片点击 - 滚动到地图并打开节点
  initNodeCards();
  
  // 图片加载错误处理
  initImageErrorHandling();
});

// 初始化节点卡片点击
function initNodeCards() {
  document.querySelectorAll('.node-card').forEach((card, index) => {
    // 点击时滚动到地图区域
    card.addEventListener('click', () => {
      const mapSection = document.querySelector('.map-section');
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// 图片加载错误处理
function initImageErrorHandling() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      // 图片加载失败时使用渐变色占位
      this.style.background = 'linear-gradient(135deg, #2a2319 0%, #3a3025 100%)';
      this.style.minHeight = '180px';
      this.alt = '图片加载失败';
    });
  });
}

// 暴露全局函数
window.showNode = showNode;
window.closeNode = closeNode;
window.toggleRead = toggleRead;
window.prevNode = prevNode;
window.nextNode = nextNode;

// 上一个节点
function prevNode() {
  if (!currentNode) return;
  const prevId = currentNode.id - 1;
  if (prevId >= 1) {
    showNode(prevId);
  }
}

// 下一个节点
function nextNode() {
  if (!currentNode) return;
  const nextId = currentNode.id + 1;
  if (nextId <= nodes.length) {
    showNode(nextId);
  }
}

// 更新导航按钮状态
function updateNavButtons() {
  if (!currentNode) return;
  
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (prevBtn) {
    prevBtn.disabled = currentNode.id <= 1;
  }
  if (nextBtn) {
    nextBtn.disabled = currentNode.id >= nodes.length;
  }
}
