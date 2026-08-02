/* ================================================================
   嵊方志 · 数据模块  data.js
   所有模拟数据：志书、年鉴、专题、地图点位、视听、讲堂、文创等
   ================================================================ */

var SFZ_DATA = {

  /* ===== 志书列表 ===== */
  books: [
    {
      id: 'b001',
      title: '嵊县志（1990版）',
      type: 'xianzhi',
      typeLabel: '县志',
      year: '1990',
      words: '750千字',
      format: 'PDF全文',
      author: '嵊县地方志编纂委员会',
      publisher: '汉语大词典出版社',
      summary: '嵊县第一部社会主义新方志，涵盖建置、自然、政治、经济、文化、社会等各编，纵贯嵊州古今之权威底本。',
      chapters: 42,
      thumbColor: 'linear-gradient(135deg, #2f5a4f, #1f3a34)',
      content: [
        { id: 'c001-0', title: '总述', level: 1, text: '嵊县位于浙江省东部，曹娥江上游。东邻余姚、奉化，南接新昌、天台，西连诸暨、东阳，北界绍兴、上虞。总面积1789.63平方公里。嵊县历史悠久，秦汉时已设县，名剡县。北宋宣和三年（1121年），改剡县为嵊县。嵊县是越剧的发源地，也是书圣王羲之的归隐地。剡溪穿境而过，自晋唐以来即为浙东名胜，李白、杜甫等诗人曾在此留下诗篇。' },
        { id: 'c001-1', title: '第一编 建置', level: 1, text: '嵊县建置历史悠久。秦代设剡县，属会稽郡。汉代沿袭。三国吴时属临海郡。晋代属会稽郡。隋开皇九年（589年），剡县改名嵊县，不久复名剡县。唐武德四年（621年），置嵊州，八年废州仍为剡县。北宋宣和三年（1121年），知县宋宗年以"剡"字有"两火一刀"之义，不利于兵，奏改剡县为嵊县。"嵊"字取自境内四山为嵊之意。此后历元、明、清至民国，嵊县建置相沿不改。' },
        { id: 'c001-1-1', title: '第一章 境域', level: 2, text: '嵊县位于浙江省东部，地理坐标为东经120°27′—121°17′，北纬29°20′—29°40′之间。东邻余姚、奉化两县，南接新昌、天台两县，西连诸暨、东阳两市，北界绍兴、上虞两县。总面积1789.63平方公里。县城距杭州120公里，距宁波135公里。' },
        { id: 'c001-2', title: '第二编 自然环境', level: 1, text: '嵊县地处浙东丘陵山地，地势西南高东北低。四明山、会稽山、天台山三大山脉在境内交汇。剡溪为境内主要水系，属曹娥江上游。属亚热带季风气候区，四季分明，温和湿润。' },
        { id: 'c001-2-1', title: '第一章 地质', level: 2, text: '县境内地质构造复杂，以侏罗纪火山岩系分布最广。东部四明山区出露大面积凝灰岩、流纹岩。中部为白垩纪红色砂砾岩盆地。西部以变质岩为主。' },
        { id: 'c001-3', title: '第三编 人口', level: 1, text: '1990年第四次人口普查，全县总人口72.56万人。人口密度每平方公里405人。以汉族为主，另有回、满、苗、壮等17个少数民族。' },
        { id: 'c001-4', title: '第四编 城乡建设', level: 1, text: '县城位于县境东北部剡溪北岸。1990年建成区面积8.5平方公里，城区人口8.2万。城关镇为全县政治、经济、文化中心。' },
        { id: 'c001-5', title: '第五编 农业', level: 1, text: '嵊县农业以粮食生产为主，水稻为主要作物。经济作物有茶叶、蚕桑、水果等。嵊州珠茶驰名中外，远销北非和欧美。1990年全县茶园面积10.5万亩，产茶8300吨。' },
        { id: 'c001-6', title: '第六编 工业', level: 1, text: '嵊县工业以轻纺为主，领带产业尤为突出。1985年嵊县被确定为浙江省领带生产基地。至1990年，全县领带生产企业达150余家，年产领带3000万条，占全国产量的三分之一。' },
        { id: 'c001-7', title: '第七编 越剧', level: 1, text: '越剧发源于嵊县。清咸丰、同治年间，剡溪两岸农民在劳动之余以唱"的笃班"自娱。光绪三十二年（1906年），剡溪南岸施家岙村首次将"的笃班"搬上舞台，是为越剧诞生之始。此后越剧迅速发展，从农村到城市，从小戏到大戏，从男班到女班，最终成为中国第二大剧种。' },
        { id: 'c001-8', title: '第八编 教育', level: 1, text: '嵊县教育源远流长。宋代理学家朱熹、吕祖谦曾在境内讲学。清末废科举后，新式学堂兴起。至1990年，全县有小学472所，中学54所，教师进修学校1所，幼儿园48所。' },
        { id: 'c001-9', title: '第九编 文化', level: 1, text: '嵊县文化底蕴深厚。书圣王羲之晚年隐居金庭，卒葬瀑布山。剡溪是浙东唐诗之路的重要节点，李白《梦游天姥吟留别》中的"湖月照我影，送我至剡溪"即为吟咏此地。' },
        { id: 'c001-10', title: '第十编 人物', level: 1, text: '嵊县自古人文荟萃。书圣王羲之、雕圣戴逵、竹圣马寅初，并称"嵊州三圣"。另有越剧表演艺术家袁雪芬、经济学家马寅初等近代名人。' }
      ]
    },
    {
      id: 'b002',
      title: '嵊州市志（1986—2002）',
      type: 'shizhi',
      typeLabel: '市志',
      year: '1986—2002',
      words: '26编',
      format: '全文在线',
      author: '嵊州市地方志编纂委员会',
      publisher: '方志出版社',
      summary: '续修市志，26编全文在线，记录撤县设市后嵊州经济社会发展全貌。',
      chapters: 26,
      thumbColor: 'linear-gradient(135deg, #2b6cb0, #1a4a7a)',
      content: [
        { id: 'c002-0', title: '总述', level: 1, text: '1986年至2002年，是嵊州撤县设市、改革开放深化的十七年。1995年12月，经国务院批准，嵊县撤县设市，更名嵊州市。这一时期，嵊州经济快速发展，领带产业崛起为"中国领带名城"，越剧文化品牌日益响亮，城市建设日新月异。' },
        { id: 'c002-1', title: '第一编 建置区划', level: 1, text: '1995年12月6日，经国务院批准，撤销嵊县，设立嵊州市（县级），由省直辖，绍兴市代管。全市辖3个街道、11个镇、10个乡。' },
        { id: 'c002-2', title: '第二编 自然环境', level: 1, text: '嵊州市地处浙东丘陵山地，属亚热带季风气候。境内有四明山、会稽山、天台山三大山脉，剡溪、长乐江、澄潭江等水系。自然资源丰富，矿产有硅藻土、萤石、黄沙等。' },
        { id: 'c002-3', title: '第三编 人口与计划生育', level: 1, text: '2000年第五次人口普查，全市总人口73.4万人。人口结构日趋合理，计划生育成效显著。' },
        { id: 'c002-4', title: '第四编 城市建设', level: 1, text: '撤县设市后，城市建设进入快车道。新建和拓宽了多条城市主干道，建成了一批住宅小区和公共设施。城市面貌由县城向现代化城市转变。' },
        { id: 'c002-5', title: '第五编 领带产业', level: 1, text: '领带产业是嵊州的支柱产业。至2002年，全市拥有领带企业1100余家，年产领带3亿条，占全国总产量的80%以上，出口50多个国家和地区。嵊州被中国纺织工业协会授予"中国领带名城"称号。' },
        { id: 'c002-6', title: '第六编 茶产业', level: 1, text: '嵊州是著名的珠茶产区。茶园面积稳定在12万亩左右，年产茶1万吨以上。"泉岗辉白"为历史名茶，列入全国十大名茶。' },
        { id: 'c002-7', title: '第七编 越剧文化', level: 1, text: '嵊州是越剧的发源地。1986年以来，越剧事业蓬勃发展。施家岙村作为越剧发源地得到保护开发，越剧艺校培养了大批人才。1996年，嵊州被文化部命名为"中国民间艺术（越剧）之乡"。' },
        { id: 'c002-8', title: '第八编 教育科技', level: 1, text: '至2002年，全市有小学124所，中学39所。九年义务教育全面普及，高中教育基本普及。嵊州一中为省一级重点中学。' },
        { id: 'c002-9', title: '第九编 文化旅游', level: 1, text: '王羲之故居金庭观、百丈飞瀑、马寅初故居等文化旅游资源得到开发。剡溪漂流成为浙东唐诗之路的重要体验项目。' }
      ]
    },
    {
      id: 'b003',
      title: '嵊县地名志',
      type: 'diming',
      typeLabel: '地名志',
      year: '1983年起',
      words: '专题文献',
      format: '全文',
      author: '嵊县地名委员会',
      publisher: '内部发行',
      summary: '收录嵊县各类地名，溯源乡愁文脉，记录村落地名的历史变迁。',
      chapters: 8,
      thumbColor: 'linear-gradient(135deg, #c0392b, #8e2a1f)',
      content: [
        { id: 'c003-0', title: '前言', level: 1, text: '地名是历史的化石，乡愁的坐标。本志收录嵊县各类地名3200余条，包括镇、乡、村、山、水、名胜古迹等。每条地名均考证其来历、含义及历史沿革，为研究嵊县历史地理提供重要参考。' },
        { id: 'c003-1', title: '第一编 政区地名', level: 1, text: '城关镇：位于县境东北部剡溪北岸，为县人民政府驻地。古称剡城，因剡溪而得名。北宋宣和三年改剡县为嵊县后，城关镇成为全县政治、经济、文化中心。' },
        { id: 'c003-2', title: '第二编 山川地名', level: 1, text: '四明山：位于县境东部，为嵊县与余姚、奉化之界山。因山中曾有四石窗，日光可透，故名四明。主峰扑船山海拔1012米。李白诗云"四明三千里，朝起赤城霞"即咏此山。' },
        { id: 'c003-3', title: '第三编 村落地名', level: 1, text: '施家岙村：位于剡溪南岸，为越剧发源地。清光绪三十二年（1906年），村中艺人首次将"的笃班"搬上草台演出，是为越剧诞生之始。村名源于施氏聚居，"岙"为山中平地之意。' }
      ]
    },
    {
      id: 'b004',
      title: '嵊州年鉴（2023）',
      type: 'nianjian',
      typeLabel: '年鉴',
      year: '2023',
      words: '120万字',
      format: '全文',
      author: '嵊州市史志研究室',
      publisher: '方志出版社',
      summary: '逐年编纂的综合性年鉴，全面记录嵊州年度发展成就。',
      chapters: 30,
      thumbColor: 'linear-gradient(135deg, #b8860b, #8a6408)',
      content: [
        { id: 'c004-0', title: '编辑说明', level: 1, text: '《嵊州年鉴》是嵊州市人民政府主办、嵊州市史志研究室编纂的综合性年鉴。2023年卷设类目30个，分目180余个，条目1200余条，全面记述2022年嵊州市自然、政治、经济、文化、社会等方面情况。' },
        { id: 'c004-1', title: '特载', level: 1, text: '2022年，嵊州市实现地区生产总值635.8亿元，同比增长4.5%。一般公共预算收入42.3亿元。城镇居民人均可支配收入67342元，农村居民人均可支配收入38256元。' },
        { id: 'c004-2', title: '大事记', level: 1, text: '1月15日，嵊州荣获"中国领带之都"称号复审通过。3月8日，越剧《新龙门客栈》入选国家级非物质文化遗产代表性项目。7月1日，嵊州市方志馆开馆。' }
      ]
    },
    {
      id: 'b005',
      title: '嵊州春秋（合辑）',
      type: 'kanwu',
      typeLabel: '刊物',
      year: '持续发行',
      words: '期刊',
      format: '全文',
      author: '嵊州市史志研究室',
      publisher: '内部刊物',
      summary: '嵊州史志刊物，持续发行，记录地方历史文化研究成果。',
      chapters: 15,
      thumbColor: 'linear-gradient(135deg, #7a48b2, #5a3380)',
      content: [
        { id: 'c005-0', title: '卷首语', level: 1, text: '《嵊州春秋》创刊以来，始终秉持"存史、资政、育人"宗旨，致力挖掘和传播嵊州历史文化，记录嵊州发展足迹。' },
        { id: 'c005-1', title: '剡溪文脉溯源', level: 1, text: '剡溪，古称剡江、剡川，为曹娥江上游。自晋代以来，剡溪即为浙东名胜。王羲之、谢灵运、李白、杜甫、白居易等历代名人都曾在此留下诗篇。剡溪不仅是一条河流，更是一条文化之溪、诗意之溪。' }
      ]
    },
    {
      id: 'b006',
      title: '剡录',
      type: 'guanang',
      typeLabel: '馆藏',
      year: '南宋',
      words: '古志',
      format: '全文',
      author: '高似孙',
      publisher: '古籍',
      summary: '南宋高似孙纂，现存最早的嵊县方志之一，记录剡县山川人物典故。',
      chapters: 10,
      thumbColor: 'linear-gradient(135deg, #4a7568, #2f5a4f)',
      content: [
        { id: 'c006-0', title: '序', level: 1, text: '剡，古县也。山曰剡山，溪曰剡溪，纸曰剡纸，藤曰剡藤。天下之言剡者，皆源于此。' },
        { id: 'c006-1', title: '卷一 县纪', level: 1, text: '剡县，汉旧县也，属会稽郡。晋代王羲之尝为剡令，后隐居金庭。' }
      ]
    }
  ],

  /* ===== 年鉴列表 ===== */
  yearbooks: [
    { id: 'y2023', title: '嵊州年鉴（2023）', year: '2023', words: '120万字' },
    { id: 'y2022', title: '嵊州年鉴（2022）', year: '2022', words: '115万字' },
    { id: 'y2021', title: '嵊州年鉴（2021）', year: '2021', words: '110万字' },
    { id: 'y2020', title: '嵊州年鉴（2020）', year: '2020', words: '108万字' },
    { id: 'y2019', title: '嵊州年鉴（2019）', year: '2019', words: '105万字' }
  ],

  /* ===== 专题列表 ===== */
  topics: [
    {
      id: 'tangshi',
      title: '浙东唐诗之路',
      subtitle: '研学专题',
      color: 'tc-blue',
      gradColor: 'linear-gradient(135deg, #2b6cb0, #1a4a7a)',
      intro: '浙东唐诗之路是唐代诗人从钱塘江出发，经绍兴、上虞、嵊州、新昌至天台山的诗意走廊。剡溪是其中的核心路段，李白、杜甫、白居易等400余位诗人在此留下1500余首诗篇。嵊州段以剡溪漂流、王羲之故居、百丈飞瀑为核心节点。',
      tags: ['文化研学', '诗词', '剡溪', '李白'],
      timeline: [
        { year: '晋代', text: '王羲之隐居金庭，剡溪始有高名' },
        { year: '南朝', text: '谢灵运开山筑路，剡溪山水闻名' },
        { year: '唐·李白', text: '"湖月照我影，送我至剡溪"，名动天下' },
        { year: '唐·杜甫', text: '杜甫壮游，"剡溪蕴秀异"留名篇' },
        { year: '1991年', text: '学者竺岳兵提出"唐诗之路"概念' },
        { year: '2019年', text: '浙东唐诗之路被列入浙江省诗路文化带' }
      ]
    },
    {
      id: 'yueju',
      title: '越剧之乡',
      subtitle: '非遗专题',
      color: 'tc-red',
      gradColor: 'linear-gradient(135deg, #c0392b, #8e2a1f)',
      intro: '越剧发源于嵊州。清咸丰年间剡溪两岸农民以"的笃班"自娱，光绪三十二年（1906年）施家岙村首次登台，是为越剧诞生。经百年发展，越剧已成为中国第二大剧种，列入国家级非遗。嵊州被命名为"中国越剧之乡"。',
      tags: ['越剧', '非遗', '施家岙', '袁雪芬'],
      timeline: [
        { year: '清·咸丰', text: '剡溪两岸"的笃班"流行' },
        { year: '1906年', text: '施家岙村首次登台，越剧诞生' },
        { year: '1923年', text: '第一副女子越剧科班在施家岙开办' },
        { year: '1942年', text: '袁雪芬倡导越剧改革' },
        { year: '1996年', text: '嵊州获"中国民间艺术（越剧）之乡"' },
        { year: '2006年', text: '越剧列入国家级非遗，百年诞辰' }
      ]
    },
    {
      id: 'shusheng',
      title: '书圣故里',
      subtitle: '王羲之专辑',
      color: 'tc-gold',
      gradColor: 'linear-gradient(135deg, #b8860b, #8a6408)',
      intro: '王羲之，字逸少，琅琊临沂人。东晋书法家，被尊为"书圣"。曾任右军将军、会稽内史，晚年隐居嵊州金庭，卒葬瀑布山。其书法兼善隶、草、楷、行各体，代表作《兰亭集序》被誉为天下第一行书。嵊州金庭观为其故居遗址。',
      tags: ['王羲之', '书法', '金庭观', '兰亭序'],
      timeline: [
        { year: '303年', text: '王羲之出生' },
        { year: '351年', text: '任右军将军、会稽内史' },
        { year: '353年', text: '兰亭修禊，作《兰亭集序》' },
        { year: '361年', text: '卒于金庭，葬瀑布山' },
        { year: '南朝·梁', text: '建金庭观，为书圣纪念地' }
      ]
    },
    {
      id: 'lingdai',
      title: '领带之乡',
      subtitle: '产业地情',
      color: 'tc-green',
      gradColor: 'linear-gradient(135deg, #2f5a4f, #1f3a34)',
      intro: '嵊州领带产业兴起于1980年代。从第一家领带企业创办到"中国领带之城""中国领带名城"的崛起，嵊州已成为全球最大的领带生产基地。年产领带3亿条，占全国80%、全球33%的份额。雅戈尔、巴贝、麦地郎等龙头企业带动全产业链发展。',
      tags: ['领带', '产业', '外贸', '雅戈尔'],
      timeline: [
        { year: '1985年', text: '嵊州第一家领带企业创办' },
        { year: '1990年', text: '年产领带3000万条，占全国1/3' },
        { year: '1998年', text: '嵊州被授予"中国领带之城"' },
        { year: '2002年', text: '年产领带3亿条，占全球33%' },
        { year: '2023年', text: '产业转型升级，向高端定制发展' }
      ]
    },
    {
      id: 'chaye',
      title: '嵊州茶叶',
      subtitle: '茶乡专题',
      color: 'tc-purple',
      gradColor: 'linear-gradient(135deg, #7a48b2, #5a3380)',
      intro: '嵊州是历史名茶产区，珠茶驰名中外。茶园面积稳定在12万亩，年产茶1万吨以上。泉岗辉白为历史贡茶，列入全国十大名茶。剡溪两岸云雾缭绕，是天然的优质茶产区。嵊州珠茶远销北非、欧美等50多个国家。',
      tags: ['珠茶', '泉岗辉白', '茶乡', '出口'],
      timeline: [
        { year: '唐代', text: '剡茶始有记载，陆羽《茶经》有述' },
        { year: '清代', text: '珠茶大量出口，远销欧美' },
        { year: '1980年代', text: '泉岗辉白获评全国名茶' },
        { year: '1990年', text: '茶园面积10.5万亩，产茶8300吨' },
        { year: '2002年', text: '茶园面积12万亩，产茶1万吨' }
      ]
    }
  ],

  /* ===== 地图点位 ===== */
  mapPoints: [
    {
      id: 'mp01',
      name: '王羲之故居·金庭观',
      type: 'person',
      typeLabel: '人物',
      pinType: 'pin-red',
      x: 18, y: 25,
      dist: '8.2km',
      badgeType: 'zhuanti',
      desc: '王羲之晚年隐居之地，位于嵊州市金庭镇。现存书圣殿、右军祠等建筑，为省级文保单位，书圣文化核心遗址。',
      detail: '金庭观始建于南朝梁代，是纪念书圣王羲之的道教宫观。王羲之于东晋永和年间隐居于此，卒后葬于瀑布山麓。现存建筑为清代重修，有书圣殿、右军祠、雪溪亭等。观内有千年古柏，传为王羲之手植。每年农历九月举行"书圣节"，海内外书法家齐聚于此，挥毫泼墨。'
    },
    {
      id: 'mp02',
      name: '百丈飞瀑',
      type: 'scenic',
      typeLabel: '景点',
      pinType: 'pin-blue',
      x: 55, y: 32,
      dist: '25km',
      badgeType: 'zhuanti',
      desc: '位于嵊州市王院乡，瀑布落差百余米，飞流直下，蔚为壮观。是浙东唐诗之路的重要自然景观。',
      detail: '百丈飞瀑位于嵊州西南山区，瀑布从百丈悬崖飞泻而下，水雾弥漫，声震山谷。唐代诗人多曾至此游览，留下诗篇。瀑布周围森林茂密，空气清新，是夏季避暑胜地。现已开发为百丈飞瀑景区，配套栈道、观景平台等设施。'
    },
    {
      id: 'mp03',
      name: '越剧发源地·施家岙',
      type: 'relic',
      typeLabel: '遗迹',
      pinType: 'pin-gold',
      x: 72, y: 45,
      dist: '15km',
      badgeType: 'zhuanti',
      desc: '越剧诞生地，位于剡溪南岸。1906年首次登台演出，现有越剧博物馆、女子越剧纪念馆等。',
      detail: '施家岙村是越剧的发源地。清光绪三十二年（1906年），村中艺人首次将"的笃班"搬上草台演出，标志着越剧的诞生。1923年，第一副女子越剧科班在此开办。村中现有越剧博物馆、古戏台、女子越剧纪念馆等。游客可在此体验越剧文化，欣赏原汁原味的越剧表演。'
    },
    {
      id: 'mp04',
      name: '剡溪漂流',
      type: 'scenic',
      typeLabel: '景点',
      pinType: 'pin-green',
      x: 35, y: 55,
      dist: '5km',
      badgeType: 'zhuanti',
      desc: '剡溪是浙东唐诗之路的核心水道。漂流全程约8公里，沿途两岸风光秀美，可感受"湖月照我影"的诗意。',
      detail: '剡溪漂流是体验浙东唐诗之路的绝佳方式。漂流全程约8公里，历时约2小时。沿途两岸青山叠翠，溪水清澈见底。李白"湖月照我影，送我至剡溪"即为吟咏此地。漂流途中设有多个文化节点，介绍唐诗之路的历史与诗词。'
    },
    {
      id: 'mp05',
      name: '马寅初故居',
      type: 'person',
      typeLabel: '人物',
      pinType: 'pin-red',
      x: 80, y: 60,
      dist: '3km',
      badgeType: 'zhuanti',
      desc: '著名经济学家、人口学家马寅初的故居，位于嵊州市浦口街道。为全国重点文保单位。',
      detail: '马寅初故居位于嵊州市浦口街道，始建于清光绪年间。马寅初（1882-1982），著名经济学家、人口学家，曾任北京大学校长。提出"新人口论"，对中国人口政策产生深远影响。故居为典型的江南民居建筑，展示了马寅初生平事迹和学术成就。为全国重点文物保护单位。'
    }
  ],

  /* ===== 视听内容（剡好看） ===== */
  videos: [
    { id: 'v01', title: '越剧百年·从的笃班到中国第二大剧', cat: '越剧', duration: '28:30', thumbColor: 'linear-gradient(135deg, #c0392b, #8e2a1f)', desc: '追溯越剧从施家岙草台到中国第二大剧种的百年历程' },
    { id: 'v02', title: '书圣王羲之·金庭归隐', cat: '书圣文化', duration: '15:20', thumbColor: 'linear-gradient(135deg, #b8860b, #8a6408)', desc: '王羲之晚年隐居金庭，书法绝笔于此' },
    { id: 'v03', title: '剡溪流韵·浙东唐诗之路', cat: '唐诗之路', duration: '22:10', thumbColor: 'linear-gradient(135deg, #2b6cb0, #1a4a7a)', desc: '循着李白的足迹，探访剡溪诗意走廊' },
    { id: 'v04', title: '嵊州非遗影像·竹编技艺', cat: '非遗', duration: '12:45', thumbColor: 'linear-gradient(135deg, #2f5a4f, #1f3a34)', desc: '嵊州竹编，省级非遗，巧夺天工' },
    { id: 'v05', title: '领带之城·嵊州产业纪实', cat: '产业地情', duration: '18:00', thumbColor: 'linear-gradient(135deg, #4a7568, #2f5a4f)', desc: '从手工作坊到全球领带之都的嵊州故事' },
    { id: 'v06', title: '泉岗辉白·嵊州茶事', cat: '茶文化', duration: '14:30', thumbColor: 'linear-gradient(135deg, #7a48b2, #5a3380)', desc: '历史贡茶泉岗辉白的制作技艺与传承' }
  ],

  /* ===== 音频内容（剡好听） ===== */
  audios: [
    { id: 'a01', title: '嵊州讲堂：剡溪文脉与唐诗之路', speaker: '史志专家', duration: '45:00', thumbColor: 'linear-gradient(135deg, #1f3a34, #2f5a4f)', cat: '讲堂' },
    { id: 'a02', title: '口述史：老越剧人回忆录', speaker: '越剧前辈', duration: '32:00', thumbColor: 'linear-gradient(135deg, #c0392b, #8e2a1f)', cat: '口述史' },
    { id: 'a03', title: '嵊州方言故事·民间传说', speaker: '本地学者', duration: '28:00', thumbColor: 'linear-gradient(135deg, #b8860b, #8a6408)', cat: '方言' },
    { id: 'a04', title: '方志里的嵊州·志书解读', speaker: '史志研究室', duration: '40:00', thumbColor: 'linear-gradient(135deg, #2b6cb0, #1a4a7a)', cat: '讲堂' },
    { id: 'a05', title: '剡溪古今·地名探源', speaker: '地名学者', duration: '25:00', thumbColor: 'linear-gradient(135deg, #7a48b2, #5a3380)', cat: '地名' },
    { id: 'a06', title: '越剧经典唱段·名段赏析', speaker: '越剧名家', duration: '35:00', thumbColor: 'linear-gradient(135deg, #4a7568, #2f5a4f)', cat: '越剧' }
  ],

  /* ===== 文创产品（剡好礼） ===== */
  gifts: [
    { id: 'g01', title: '剡溪文脉·书签套装', price: 38, original: 58, badge: '新品', thumbColor: 'linear-gradient(135deg, #1f3a34, #2f5a4f)', desc: '以剡溪诗词为灵感的黄铜书签套装' },
    { id: 'g02', title: '越剧脸谱·冰箱贴', price: 25, original: 0, badge: '', thumbColor: 'linear-gradient(135deg, #c0392b, #8e2a1f)', desc: '手绘越剧经典角色脸谱冰箱贴' },
    { id: 'g03', title: '书圣故里·兰亭序卷轴', price: 128, original: 168, badge: '热销', thumbColor: 'linear-gradient(135deg, #b8860b, #8a6408)', desc: '王羲之《兰亭集序》精装复刻卷轴' },
    { id: 'g04', title: '嵊州方志·地情书单', price: 0, original: 0, badge: '免费', thumbColor: 'linear-gradient(135deg, #2b6cb0, #1a4a7a)', desc: '嵊州方志馆藏精选地情书目推荐' },
    { id: 'g05', title: '剡藤纸·手工信笺', price: 48, original: 0, badge: '', thumbColor: 'linear-gradient(135deg, #7a48b2, #5a3380)', desc: '古法剡藤纸制作，书法信笺套装' },
    { id: 'g06', title: '嵊州村史·家谱编印', price: 0, original: 0, badge: '定制', thumbColor: 'linear-gradient(135deg, #4a7568, #2f5a4f)', desc: '方志馆提供村史家谱定制编印服务' }
  ],

  /* ===== 热门搜索 ===== */
  hotSearches: [
    { rank: 1, keyword: '嵊州年鉴' },
    { rank: 2, keyword: '越剧起源' },
    { rank: 3, keyword: '王羲之' },
    { rank: 4, keyword: '剡溪' },
    { rank: 5, keyword: '唐诗之路' },
    { rank: 6, keyword: '领带之乡' },
    { rank: 7, keyword: '马寅初' },
    { rank: 8, keyword: '泉岗辉白' }
  ],

  /* ===== Banner轮播 ===== */
  banners: [
    { id: 'bn1', text: '剡溪文脉', accent: '·唐诗之路', sub: '浙东唐诗之路 · 嵊州段研学', tag: '限时专题 →', color: 'banner-1', target: '#/topic/tangshi' },
    { id: 'bn2', text: '越剧百年', accent: '·剡溪之声', sub: '从的笃班到中国第二大剧', tag: '视听专题 →', color: 'banner-2', target: '#/topic/yueju' },
    { id: 'bn3', text: '书圣故里', accent: '·金庭归隐', sub: '王羲之晚年隐居地 · 书法圣地', tag: '走进书圣 →', color: 'banner-3', target: '#/topic/shusheng' }
  ],

  /* ===== 金刚区入口 ===== */
  quickEntries: [
    { id: 'q1', label: '剡好读', icon: 'ic-book', color: 'ic-bg-ink', target: '#/read' },
    { id: 'q2', label: '剡好游', icon: 'ic-map', color: 'ic-bg-blue', target: '#/map' },
    { id: 'q3', label: '剡好看', icon: 'ic-play', color: 'ic-bg-seal', target: '#/watch' },
    { id: 'q4', label: '剡好听', icon: 'ic-ear', color: 'ic-bg-gold', target: '#/listen' },
    { id: 'q5', label: '剡好礼', icon: 'ic-gift', color: 'ic-bg-purple', target: '#/gift' }
  ],

  /* ===== 阅读推荐 ===== */
  recommendations: [
    { bookId: 'b001', badgeType: 'xianzhi', badgeText: '县志' },
    { bookId: 'b002', badgeType: 'shizhi', badgeText: '市志' },
    { bookId: 'b003', badgeType: 'diming', badgeText: '专题' },
    { bookId: 'b005', badgeType: 'kanwu', badgeText: '刊物' }
  ],

  /* ===== 用户足迹（模拟） ===== */
  userFootprint: [
    { day: '周一', value: 30 },
    { day: '周二', value: 50 },
    { day: '周三', value: 40 },
    { day: '周四', value: 90 },
    { day: '周五', value: 60 },
    { day: '周六', value: 45 },
    { day: '周日', value: 70 }
  ],

  /* ===== 方志馆馆藏统计 ===== */
  archiveStats: {
    totalBooks: 16000,
    categories: [
      { name: '县志', count: 12 },
      { name: '市志', count: 8 },
      { name: '年鉴', count: 35 },
      { name: '地名志', count: 5 },
      { name: '专题文献', count: 120 },
      { name: '刊物', count: 200 }
    ]
  },

  /* ===== 人物（书圣故里等） ===== */
  figures: [
    { id: 'f01', name: '王羲之', title: '书圣', dynasty: '东晋', desc: '中国历史上最伟大的书法家，晚年隐居嵊州金庭', thumbColor: 'linear-gradient(135deg, #b8860b, #8a6408)' },
    { id: 'f02', name: '马寅初', title: '竹圣', dynasty: '近现代', desc: '著名经济学家、人口学家，曾任北大校长', thumbColor: 'linear-gradient(135deg, #2f5a4f, #1f3a34)' },
    { id: 'f03', name: '袁雪芬', title: '越剧改革家', dynasty: '近现代', desc: '越剧表演艺术家，倡导越剧改革，奠定越剧艺术地位', thumbColor: 'linear-gradient(135deg, #c0392b, #8e2a1f)' },
    { id: 'f04', name: '戴逵', title: '雕圣', dynasty: '东晋', desc: '著名雕塑家、画家，隐居剡县，与王羲之交好', thumbColor: 'linear-gradient(135deg, #4a7568, #2f5a4f)' }
  ]
};
