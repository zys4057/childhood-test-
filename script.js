const questions = [
  { id: 1, dimension: 'A', question: '小时候，当你感到委屈或者难过时，家人的反应通常是：', options: ['会耐心听我说，也会安慰我', '会关心我，但希望我快点调整', '觉得我太敏感，让我不要想太多', '我的情绪经常没人关注，只能自己消化'] },
  { id: 2, dimension: 'B', question: '小时候，父母最容易认可你的时候是：', options: ['我开心、做自己的时候', '我努力完成事情的时候', '我取得成绩或者表现优秀的时候', '我很听话、不制造麻烦的时候'] },
  { id: 3, dimension: 'C', question: '别人小时候评价你最多的是：', options: ['有想法、有个性', '比较乖、懂事', '很少让家长操心', '比同龄人成熟很多'] },
  { id: 4, dimension: 'D', question: '当你小时候想哭时，你通常：', options: ['可以自然表达', '会看情况决定是否哭', '会忍住，因为觉得哭没用', '会习惯性告诉自己不能哭'] },
  { id: 5, dimension: 'A', question: '小时候你是否感觉有人真正理解你的内心？', options: ['经常有', '偶尔有', '很少有', '几乎没有'] },
  { id: 6, dimension: 'B', question: '你小时候是否经常被比较？', options: ['很少', '偶尔', '经常', '经常感觉自己“不够好”'] },
  { id: 7, dimension: 'E', question: '小时候重要的人离开或冷淡时，你会：', options: ['相信关系不会轻易改变', '有些失落，但能调整', '很担心是不是自己做错了', '害怕自己不再被喜欢'] },
  { id: 8, dimension: 'C', question: '小时候家里气氛不好时，你会：', options: ['觉得那是大人的事情', '尽量保持安静', '想办法让大家开心', '观察所有人的情绪变化'] },
  { id: 9, dimension: 'A', question: '你小时候有没有这种感觉：“没人真正知道我心里在想什么。”', options: ['很少', '偶尔', '经常', '一直如此'] },
  { id: 10, dimension: 'D', question: '现在遇到难过的事情，你第一反应：', options: ['找人交流', '自己整理一下', '假装没事', '完全隐藏起来'] },
  { id: 11, dimension: 'F', question: '你认为自己的价值主要来自：', options: ['我就是我，本身值得被喜欢', '我的努力和成长', '我的能力和成绩', '我能给别人带来什么'] },
  { id: 12, dimension: 'B', question: '小时候犯错时，你更害怕：', options: ['事情本身', '被提醒', '被批评', '让别人失望'] },
  { id: 13, dimension: 'E', question: '关系中，对方突然冷淡，你容易：', options: ['认为对方可能只是有事情', '观察一段时间', '开始反思是不是自己不好', '强烈不安，害怕被抛下'] },
  { id: 14, dimension: 'F', question: '你是否容易觉得：“我还可以做得更好。”', options: ['偶尔', '经常', '很经常', '几乎无法满意自己'] },
  { id: 15, dimension: 'C', question: '小时候你是否经常照顾别人感受？', options: ['不太会', '偶尔', '经常', '这是我习惯性的事情'] },
  { id: 16, dimension: 'F', question: '别人夸奖你时，你通常：', options: ['开心接受', '有点不好意思', '觉得只是运气', '觉得别人不了解真实的自己'] },
  { id: 17, dimension: 'A', question: '小时候生病、难过或者害怕时：', options: ['会得到照顾', '有照顾，但比较有限', '经常需要自己处理', '感觉只能靠自己'] },
  { id: 18, dimension: 'D', question: '你是否习惯说：“没事，我可以。”', options: ['很少', '偶尔', '经常', '几乎成为口头禅'] },
  { id: 19, dimension: 'C', question: '你是否很容易察觉别人情绪变化？', options: ['一般', '有一点', '比较敏感', '非常敏感'] },
  { id: 20, dimension: 'B', question: '小时候你是否觉得：“我要优秀，才值得被认可。”', options: ['没有', '偶尔', '经常', '深信如此'] },
  { id: 21, dimension: 'E', question: '当别人对你表现出不满意时，你通常：', options: ['会听取意见，但不会否定自己', '会有些在意', '会反复想自己哪里做错了', '会非常害怕失去对方认可'] },
  { id: 22, dimension: 'F', question: '你是否经常觉得自己需要证明自己？', options: ['很少', '偶尔', '经常', '几乎一直如此'] },
  { id: 23, dimension: 'C', question: '小时候遇到家庭问题时，你会：', options: ['依靠大人解决', '偶尔帮忙', '主动承担一些责任', '觉得自己必须撑起来'] },
  { id: 24, dimension: 'F', question: '当你完成一件很好的事情时，你第一感觉是：', options: ['为自己开心', '觉得还可以继续提升', '想得到别人认可', '担心下一次做不到'] },
  { id: 25, dimension: 'A', question: '小时候表达需求时，你觉得：', options: ['我的需求通常会被重视', '有时候需要等待', '经常觉得提出需求是一种负担', '习惯不说，因为觉得没人会回应'] },
  { id: 26, dimension: 'D', question: '别人问你“你真实感受是什么”时，你：', options: ['可以直接表达', '需要想一想', '不太习惯说出来', '很难知道自己真正的感受'] },
  { id: 27, dimension: 'F', question: '你更容易接受别人：', options: ['喜欢真实的我', '肯定我的努力', '认可我的能力', '需要我的帮助'] },
  { id: 28, dimension: 'B', question: '小时候如果成绩下降，你最担心：', options: ['自己没有学好', '需要改进', '父母失望', '觉得自己让家人丢脸'] },
  { id: 29, dimension: 'E', question: '亲密关系中，你最害怕：', options: ['彼此不理解', '发生冲突', '对方慢慢远离', '被彻底抛弃'] },
  { id: 30, dimension: 'F', question: '如果别人不喜欢你，你容易认为：', options: ['可能只是彼此不合适', '会有一点难过', '会怀疑自己的问题', '会觉得自己不够好'] },
  { id: 31, dimension: 'C', question: '小时候别人遇到困难时，你：', options: ['会关心，但不会承担全部', '会主动帮助', '很容易把别人的问题放在心上', '觉得照顾别人是自己的责任'] },
  { id: 32, dimension: 'F', question: '你是否容易：“只有做到足够好，才配拥有好的东西。”', options: ['很少这样想', '偶尔', '经常', '深深相信'] },
  { id: 33, dimension: 'A', question: '小时候你的想法和感受：', options: ['经常被认真倾听', '有时被理解', '经常被忽略', '很少有人真正关心'] },
  { id: 34, dimension: 'D', question: '当你愤怒时，你通常：', options: ['能表达自己的不满', '会控制后表达', '先压下来', '假装自己没有生气'] },
  { id: 35, dimension: 'E', question: '面对关系变化，你：', options: ['相信人与人可以保持连接', '会有一点担心', '容易产生不安全感', '经常害怕被离开'] },
  { id: 36, dimension: 'B', question: '小时候别人对你的期待：', options: ['比较自由', '有一些要求', '要求比较高', '感觉必须达到标准'] },
  { id: 37, dimension: 'F', question: '你内心深处是否觉得：“我必须证明自己，才值得被认可。”', options: ['几乎没有', '偶尔', '经常', '非常强烈'] },
  { id: 38, dimension: 'C', question: '小时候，你是否经常成为：', options: ['被照顾的人', '偶尔帮助家庭的人', '调节气氛的人', '解决问题的人'] },
  { id: 39, dimension: 'E', question: '当喜欢的人没有及时回复消息，你：', options: ['不会特别在意', '会稍微关注', '会猜测是不是自己哪里不好', '会明显焦虑'] },
  { id: 40, dimension: 'D', question: '你是否习惯隐藏脆弱的一面？', options: ['不太会', '有时候', '经常', '几乎不会让别人看到'] }
];

const dimensionNames = {
  A: '情感回应缺失指数',
  B: '高期待压力指数',
  C: '过度懂事指数',
  D: '情绪压抑指数',
  E: '安全感影响指数',
  F: '自我价值模式指数'
};

const personalityTypes = {
  '情绪隐藏型': {
    keywords: ['克制', '坚强', '习惯独自消化'],
    childhood: '你小时候可能较少获得充分的情绪回应。当你难过、害怕、委屈时，周围的人可能更关注“事情解决了没有”，而不是“你的感受怎么样”。于是你慢慢学会：“自己的情绪，要自己处理。”你变得很会控制自己，也很少主动麻烦别人。',
    adult: '你通常给人的感觉：稳定、理性、成熟、不容易失控。别人可能觉得你：“什么事情都能扛过去。”但只有你自己知道，有些情绪其实只是被暂时放在心里。你不是没有感受，而是不习惯展示。',
    relationship: '进入亲密关系后，你可能：不喜欢过度依赖别人、遇到矛盾容易沉默、不太会表达自己的需求、害怕暴露脆弱。你的内心可能同时存在两个声音：一个想靠近：“希望有人真正理解我。”另一个提醒自己：“不要给别人添麻烦。”',
    work: '优势：抗压能力强、独立解决问题能力强、情绪稳定。可能的挑战：容易长期积累压力、不愿寻求帮助、别人难以发现你的疲惫。',
    hiddenStrength: '被理解、被允许表达、被接纳真实状态。',
    growth: '练习：说出自己的感受、接受别人给予支持、不把“需要帮助”等同于“不够强大”。',
    mbti: ['ISTJ', 'INTJ', 'ISTP']
  },
  '优秀驱动型': {
    keywords: ['追求卓越', '证明自己', '害怕失败'],
    childhood: '你的价值感可能和“表现”高度连接。小时候你可能更容易在：成绩优秀时、获得奖励时、表现突出时，感受到认可。于是形成一种信念：“优秀的我，才值得被肯定。”',
    adult: '你通常：有目标感、自我要求高、做事认真、希望不断进步。你容易成为别人眼中的：“很厉害的人。”但内心可能经常出现：“我还不够好。”',
    relationship: '你可能：希望成为更好的伴侣、容易努力经营关系、害怕让对方失望。但也可能：不容易接受自己的不足、把关系变成一种“表现任务”。',
    work: '优势：学习能力强、执行力高、责任感强。挑战：完美主义、难以休息、容易自我批评。',
    hiddenStrength: '你需要理解：你的价值并不只来自成绩、成就、他人的评价。你的存在本身也具有价值。',
    growth: '练习：接受“不完美”、区分“努力成长”和“证明自己”、给自己更多宽容。',
    mbti: ['ENTJ', 'INTJ', 'ESTJ']
  },
  '过度懂事型': {
    keywords: ['体贴', '责任感强', '容易忽略自己'],
    childhood: '小时候，你可能较早意识到：“大人的情绪需要被照顾。”你可能习惯：看别人脸色、调节家庭气氛、主动承担责任。慢慢形成：“只要我懂事，事情就会变好。”',
    adult: '你通常：很会照顾别人、共情能力强、善于解决问题。别人容易依赖你。但你的困难是：你很容易知道别人需要什么，却不清楚自己需要什么。',
    relationship: '你可能：很愿意付出、容易包容另一半、不喜欢制造冲突。但需要注意：不要让爱变成单方面承担。',
    work: '优势：团队合作能力强、责任心强、可靠。挑战：容易承担过多任务、不善拒绝、害怕让别人失望。',
    hiddenStrength: '你需要被提醒：你也可以成为被照顾的人。',
    growth: '练习：表达自己的需求、学习拒绝、不把所有人的情绪都归为自己的责任。',
    mbti: ['ENFJ', 'ISFJ', 'ESFJ']
  },
  '高敏感防御型': {
    keywords: ['敏锐', '警觉', '容易察觉变化'],
    childhood: '你的成长环境可能让你较早学会观察：别人的语气、表情变化、家庭氛围。你通过观察环境，寻找安全感。',
    adult: '你通常：洞察力强、很会感知他人情绪、对细节敏感。优势：别人没有注意到的变化，你往往能发现。挑战：容易想太多。',
    relationship: '你可能：很在乎对方态度、容易分析聊天细节、对关系变化敏感。例如：对方少回复一句话，你可能已经开始思考：“是不是发生了什么？”',
    work: '优势：风险意识强、观察能力强、创造力丰富。挑战：容易焦虑、容易过度准备。',
    hiddenStrength: '你需要：稳定感，而不是不断预测危险。',
    growth: '练习：相信自己的判断、不过度解读信息、区分事实和想象。',
    mbti: ['INFJ', 'INFP', 'ISFP']
  },
  '关系守护型': {
    keywords: ['重感情', '忠诚', '害怕失去'],
    childhood: '你的成长经历可能让你特别重视：关系稳定、他人的回应、情感连接。你可能很早意识到：“重要的人，是需要珍惜的。”',
    adult: '你通常：重视承诺、对朋友和伴侣投入、很珍惜长期关系。你属于：“认定一个人，就会认真对待。”',
    relationship: '优势：忠诚、专一、愿意经营关系。挑战：容易害怕失去、容易过度关注对方变化。',
    work: '优势：团队稳定性强、责任感高、合作意识强。挑战：不喜欢突然变化、容易顾虑别人感受。',
    hiddenStrength: '你需要：知道自己值得被选择，而不是必须不断付出来留住关系。',
    growth: '练习：建立自己的生活重心、保持关系中的独立性、不用牺牲自己换取安全。',
    mbti: ['ISFJ', 'ESFJ', 'ENFP']
  },
  '独立坚强型': {
    keywords: ['自主', '解决问题', '不轻易依赖'],
    childhood: '你可能较早形成：“很多事情需要靠自己解决。”这让你培养出强大的独立能力。',
    adult: '你通常：自主性强、解决问题能力强、不喜欢麻烦别人。别人可能觉得：“这个人什么都能处理。”',
    relationship: '你可能：喜欢保持空间、不习惯过度黏在一起、更重视互相尊重。挑战：有时会让别人感觉：“你是不是不需要我？”',
    work: '优势：行动力强、抗压能力强、适应变化。挑战：容易独自承担、不愿表达困难。',
    hiddenStrength: '你需要的是：“有人陪伴我，而不是控制我。”',
    growth: '练习：接受支持、分享真实想法、建立互相依靠的关系。',
    mbti: ['ISTP', 'INTP', 'ENTP']
  },
  '讨好适应型': {
    keywords: ['迎合', '敏感', '害怕冲突'],
    childhood: '你小时候可能发现：当自己满足别人期待时，环境会更加稳定。于是你逐渐学会：观察别人需要什么、调整自己的行为、尽量避免让别人不开心。你形成了一种保护方式：“只要大家满意，关系就会安全。”',
    adult: '你通常：很会照顾气氛、容易获得别人喜欢、社交适应能力强。别人可能觉得你：“很好相处。”但你内心可能经常问：“这样做，是我真正想要的吗？”',
    relationship: '你容易：迁就伴侣、不主动表达不满、害怕冲突影响关系。有时会出现：前期非常包容，长期积累后突然疲惫。',
    work: '优势：沟通能力强、团队协调能力好、适应环境快。挑战：不敢提出不同意见、容易承担额外工作、害怕拒绝别人。',
    hiddenStrength: '你真正需要的是：被喜欢，不只是因为你的付出。',
    growth: '练习：允许别人短暂不满意、练习表达真实观点、建立自己的边界。',
    mbti: ['ENFP', 'ESFJ', 'ISFJ']
  },
  '完美控制型': {
    keywords: ['高标准', '谨慎', '害怕失控'],
    childhood: '你的成长环境可能比较重视：规则、表现、正确性、结果。你可能习惯：“提前准备，避免犯错。”',
    adult: '你通常：做事认真、计划能力强、责任感强。你喜欢：事情有安排、有方向、有确定性。',
    relationship: '你可能：希望关系稳定、容易分析问题、希望通过解决问题表达爱。挑战：有时忽略：对方需要的可能不是方案，而是理解。',
    work: '优势：高质量完成任务、逻辑清晰、执行可靠。挑战：难以放松、容易拖延（因为想做到最好）、对自己要求过高。',
    hiddenStrength: '你需要接受：安全感不一定来自控制一切。',
    growth: '练习：接受适度的不确定、给错误留空间、允许事情“不完美”。',
    mbti: ['ISTJ', 'INTJ', 'ESTJ']
  },
  '内在匮乏型': {
    keywords: ['自我怀疑', '渴望认可', '容易否定自己'],
    childhood: '你可能较少获得稳定的积极反馈。小时候可能更容易注意到：哪里做得不好、哪里需要改进、哪里没有达到要求。久而久之形成：“是不是我还不够好？”',
    adult: '你可能：对自己要求高、容易比较、容易低估自己。即使获得成绩，也容易想：“只是运气。”',
    relationship: '你可能：容易担心自己不值得被爱、容易寻找对方确认、容易把问题归因到自己。',
    work: '优势：愿意成长、学习动力强、能发现不足。挑战：缺少自我肯定、容易焦虑、害怕失败。',
    hiddenStrength: '你需要建立：来自自己的认可，而不是完全依靠外界评价。',
    growth: '练习：记录自己的成果、看见自己的努力、减少过度比较。',
    mbti: ['INFP', 'INFJ', 'ISFP']
  },
  '理性防御型': {
    keywords: ['分析', '冷静', '避免情绪暴露'],
    childhood: '你可能发现：表达情绪并不能解决问题。于是你发展出：“先分析，再处理。”',
    adult: '你通常：理性、冷静、善于解决复杂问题。别人可能觉得你：“不容易被影响。”',
    relationship: '你可能：更习惯用行动表达爱、不喜欢情绪化沟通、需要较长时间建立信任。挑战：别人可能希望听见你的感受，而不仅是你的分析。',
    work: '优势：判断能力强、逻辑思维强、擅长独立工作。挑战：过度理性、忽略情绪需求。',
    hiddenStrength: '你需要：安全地表达真实感受。',
    growth: '练习：说“我感觉……”、分享过程，而不是只分享结果、接受情绪存在的价值。',
    mbti: ['INTP', 'INTJ', 'ISTP']
  },
  '自我成长型': {
    keywords: ['觉察', '成长', '不断突破'],
    childhood: '你的成长经历可能既有挑战，也有支持。你逐渐学会：理解自己，而不是只适应环境。',
    adult: '你通常：喜欢探索自己、愿意学习、善于反思。你关注的问题通常是：“我怎样成为更好的自己？”',
    relationship: '你倾向：重视精神交流、希望关系共同成长、愿意沟通问题。',
    work: '优势：学习能力强、适应变化、创新意识强。挑战：容易思考过多、对自己要求持续提升。',
    hiddenStrength: '你需要：成长，同时也允许自己享受当下。',
    growth: '练习：停止过度优化自己、接纳现在的状态、平衡努力和休息。',
    mbti: ['ENFP', 'INFJ', 'ENTP']
  },
  '安全重建型': {
    keywords: ['疗愈', '稳定', '自我接纳'],
    childhood: '你可能经历过一些不足，但同时发展出了较好的调整能力。你逐渐理解：过去影响自己，但不决定自己。',
    adult: '你通常：比较了解自己、能处理情绪、重视健康关系。你的特点：不是没有问题，而是知道如何面对问题。',
    relationship: '你倾向：尊重彼此空间、能表达需求、能建立稳定连接。',
    work: '优势：情绪稳定、合作能力强、具有长期成长能力。',
    hiddenStrength: '你需要：继续保持自我探索，同时相信自己的价值。',
    growth: '继续：建立支持系统、保持真实表达、创造属于自己的生活方式。',
    mbti: ['INFJ', 'ENFJ', 'ISFP']
  }
};

const typeMapping = {
  'A': '情绪隐藏型',
  'B': '优秀驱动型',
  'C': '过度懂事型',
  'D': '情绪压抑型',
  'E': '关系守护型',
  'F': '自我成长型'
};

let currentQuestion = 0;
let answers = {};
let isAnimating = false;

function init() {
  const saved = localStorage.getItem('childhood_quiz');
  if (saved) {
    const data = JSON.parse(saved);
    if (data.answers && Object.keys(data.answers).length > 0) {
      answers = data.answers;
      currentQuestion = data.currentQuestion || 0;
      if (currentQuestion >= questions.length) {
        showResult();
      } else {
        showQuiz();
        renderQuestion();
      }
      return;
    }
  }
  showHome();
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

function showHome() {
  showPage('page-home');
}

function showQuiz() {
  showPage('page-quiz');
}

function startQuiz() {
  currentQuestion = 0;
  answers = {};
  saveProgress();
  showQuiz();
  renderQuestion();
}

function saveProgress() {
  localStorage.setItem('childhood_quiz', JSON.stringify({
    currentQuestion,
    answers
  }));
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const total = questions.length;
  const progress = ((currentQuestion + 1) / total) * 100;

  document.getElementById('progress-fill').style.width = progress + '%';
  document.getElementById('progress-text').textContent = `第 ${currentQuestion + 1} / ${total} 题`;
  document.getElementById('question-number').textContent = `第 ${currentQuestion + 1} 题`;
  document.getElementById('question-text').textContent = q.question;

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';

  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `
      <div class="option-content">
        <span class="option-label">${labels[idx]}</span>
        <span>${opt}</span>
      </div>
    `;
    btn.onclick = () => selectOption(idx);
    optionsEl.appendChild(btn);
  });

  // 重新触发动画
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight; // 强制重绘
  card.style.animation = 'slideUp 0.4s ease';
}

function selectOption(idx) {
  if (isAnimating) return;
  isAnimating = true;

  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.classList.remove('selected'));
  options[idx].classList.add('selected');

  answers[questions[currentQuestion].id] = idx + 1; // A=1, B=2, C=3, D=4
  saveProgress();

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      saveProgress();
      showResult();
    } else {
      renderQuestion();
    }
    isAnimating = false;
  }, 400);
}

function calculateScores() {
  const scores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  questions.forEach(q => {
    const ans = answers[q.id];
    if (ans) {
      scores[q.dimension] += ans;
    }
  });
  return scores;
}

function determineType(scores) {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primary = entries[0][0];
  const secondary = entries[1][0];

  // 组合映射
  const combo = primary + secondary;
  const reverseCombo = secondary + primary;

  const comboMap = {
    'AD': '情绪隐藏型', 'DA': '情绪隐藏型',
    'BF': '优秀驱动型', 'FB': '优秀驱动型',
    'CE': '关系守护型', 'EC': '关系守护型',
    'CD': '过度懂事型', 'DC': '过度懂事型',
    'EA': '高敏感防御型', 'AE': '高敏感防御型',
    'FA': '自我成长型', 'AF': '自我成长型',
    'FB': '优秀驱动型',
    'CF': '过度懂事型', 'FC': '过度懂事型',
    'EF': '关系守护型', 'FE': '关系守护型',
    'DF': '情绪压抑型', 'FD': '情绪压抑型',
    'BD': '完美控制型', 'DB': '完美控制型',
    'BE': '讨好适应型', 'EB': '讨好适应型',
    'BC': '优秀驱动型', 'CB': '优秀驱动型',
    'ED': '高敏感防御型', 'DE': '高敏感防御型',
    'CA': '过度懂事型', 'AC': '过度懂事型',
    'BA': '优秀驱动型', 'AB': '优秀驱动型',
    'FE': '关系守护型'
  };

  let mainType = comboMap[combo] || comboMap[reverseCombo] || typeMapping[primary] || '安全重建型';
  let subType = typeMapping[secondary] || '安全重建型';

  return { mainType, subType, scores, entries };
}

function showResult() {
  const { mainType, subType, scores, entries } = determineType(calculateScores());
  const info = personalityTypes[mainType];

  const html = `
    <div class="result-header">
      <div class="home-icon" style="margin-bottom:16px;">🌿</div>
      <h2 class="result-title">你的童年人格印记</h2>
      <div class="result-type">${mainType}</div>
      <p class="result-sub">辅助人格：${subType}</p>
    </div>

    <div class="result-card">
      <h3>📝 人格关键词</h3>
      <div class="keywords">
        ${info.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
      </div>
    </div>

    <div class="result-card">
      <h3>👶 童年形成原因</h3>
      <p>${info.childhood}</p>
    </div>

    <div class="result-card">
      <h3>🧑 成年后的性格表现</h3>
      <p>${info.adult}</p>
    </div>

    <div class="result-card">
      <h3>💕 亲密关系模式</h3>
      <p>${info.relationship}</p>
    </div>

    <div class="result-card">
      <h3>💼 工作模式</h3>
      <p>${info.work}</p>
    </div>

    <div class="result-card">
      <h3>✨ 隐藏优势</h3>
      <p>${info.hiddenStrength}</p>
    </div>

    <div class="result-card">
      <h3>💝 内在需求</h3>
      <p>${info.growth}</p>
    </div>

    <div class="result-card">
      <h3>🔮 MBTI 倾向参考</h3>
      <div class="mbti-tags">
        ${info.mbti.map(m => `<span class="mbti-tag">${m}</span>`).join('')}
      </div>
      <p style="margin-top:10px; font-size:0.85rem; color:var(--text-muted);">以上仅为兴趣参考，不代表任何医学或专业诊断意义。</p>
    </div>

    <div class="result-card">
      <h3>📊 各维度得分</h3>
      <div class="scores-grid">
        ${entries.map(([dim, score]) => `
          <div class="score-item">
            <div class="score-name">${dimensionNames[dim]}</div>
            <div class="score-value">${score}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="btn-group" style="margin-top:24px;">
      <button class="btn btn-primary" onclick="restartQuiz()">重新测试</button>
      <button class="btn btn-secondary" onclick="openShare()">分享结果</button>
    </div>

    <p class="disclaimer">此测试不代表任何医疗诊断</p>
  `;

  document.getElementById('result-content').innerHTML = html;
  showPage('page-result');

  // 保存结果用于分享
  window._resultType = mainType;
}

function restartQuiz() {
  localStorage.removeItem('childhood_quiz');
  currentQuestion = 0;
  answers = {};
  showHome();
}

function openShare() {
  const type = window._resultType || '未知型';
  const text = `我完成了童年印记人格测试，我的人格类型是${type}。\n\n你的童年经历，塑造了怎样的现在？快来测一测吧！`;
  document.getElementById('share-text').textContent = text;
  document.getElementById('share-modal').classList.add('active');
}

function closeShare(e) {
  if (!e || e.target === document.getElementById('share-modal')) {
    document.getElementById('share-modal').classList.remove('active');
  }
}

function copyShare() {
  const text = document.getElementById('share-text').textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('已复制到剪贴板');
      closeShare();
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert('已复制到剪贴板');
    closeShare();
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', init);
