export const CATEGORIES = [
  { id: 'EDU', name: 'การศึกษา', icon: '🎓', color: '#6366f1' },
  { id: 'FOOD', name: 'อาหาร', icon: '🍜', color: '#f97316' },
  { id: 'HEALTH', name: 'สุขภาพ', icon: '🏥', color: '#ef4444' },
  { id: 'SPORT', name: 'กีฬา', icon: '🏟️', color: '#22c55e' },
  { id: 'SERVICE', name: 'บริการ', icon: '🏛️', color: '#06b6d4' },
  { id: 'TRANSIT', name: 'ขนส่ง', icon: '🚌', color: '#f59e0b' },
]

export const IMPORTANT_PLACES = [
  { id: 'lib', title: 'หอสมุดกลาง KKU', category: 'EDU', position: { lat: 16.4748, lng: 102.8190 }, desc: 'แหล่งรวมหนังสือและพื้นที่อ่าน' },
  { id: 'eng', title: 'คณะวิศวกรรมศาสตร์', category: 'EDU', position: { lat: 16.4815, lng: 102.8295 }, desc: 'คณะวิศวกรรมศาสตร์ มข.' },
  { id: 'sci', title: 'คณะวิทยาศาสตร์', category: 'EDU', position: { lat: 16.4810, lng: 102.8235 }, desc: 'คณะวิทยาศาสตร์ มข.' },
  { id: 'huso', title: 'คณะมนุษยศาสตร์ฯ', category: 'EDU', position: { lat: 16.4698, lng: 102.8268 }, desc: 'คณะมนุษยศาสตร์และสังคมศาสตร์' },
  { id: 'med', title: 'คณะแพทยศาสตร์', category: 'EDU', position: { lat: 16.4729, lng: 102.8255 }, desc: 'อาคารเรียนและโรงพยาบาลฝึกสอน' },
  { id: 'nurse', title: 'คณะพยาบาลศาสตร์', category: 'EDU', position: { lat: 16.4747, lng: 102.8275 }, desc: 'อาคารเรียนคณะพยาบาลฯ' },
  { id: 'pharm', title: 'คณะเภสัชศาสตร์', category: 'EDU', position: { lat: 16.4793, lng: 102.8286 }, desc: 'อาคารเรียนคณะเภสัชฯ' },
  { id: 'arch', title: 'คณะสถาปัตยกรรมศาสตร์', category: 'EDU', position: { lat: 16.4714, lng: 102.8301 }, desc: 'อาคารเรียนคณะสถาปัตย์' },
  { id: 'econ', title: 'คณะเศรษฐศาสตร์', category: 'EDU', position: { lat: 16.4689, lng: 102.8279 }, desc: 'อาคารเรียนคณะเศรษฐศาสตร์' },
  { id: 'agri', title: 'คณะเกษตรศาสตร์', category: 'EDU', position: { lat: 16.4697, lng: 102.8165 }, desc: 'อาคารเรียนและแปลงทดลอง' },

  { id: 'canteen-complex', title: 'โรงอาหารคอมเพล็กซ์', category: 'FOOD', position: { lat: 16.4808, lng: 102.8230 }, desc: 'อาหารหลากหลาย ราคานักศึกษา' },
  { id: 'night-market', title: 'กาดนัด มข.', category: 'FOOD', position: { lat: 16.4699, lng: 102.8256 }, desc: 'ตลาดนัดยามเย็น อาหาร/ของกินเล่น' },
  { id: 'somtum', title: 'ส้มตำหน้า มข.', category: 'FOOD', position: { lat: 16.4761, lng: 102.8224 }, desc: 'ส้มตำ/ไก่ย่าง รสจัดจ้าน' },
  { id: 'complex-cafe', title: 'คาเฟ่โซนคอมเพล็กซ์', category: 'FOOD', position: { lat: 16.4802, lng: 102.8221 }, desc: 'คาเฟ่และเครื่องดื่ม' },
  { id: 'cafeteria-nurse', title: 'โรงอาหารคณะพยาบาลฯ', category: 'FOOD', position: { lat: 16.4749, lng: 102.8284 }, desc: 'อาหารราคานักศึกษา' },

  { id: 'srinagarind', title: 'รพ.ศรีนครินทร์', category: 'HEALTH', position: { lat: 16.4725, lng: 102.8239 }, desc: 'โรงพยาบาลศูนย์ประจำภาคอีสาน' },
  { id: 'dental', title: 'คลินิกทันตกรรม', category: 'HEALTH', position: { lat: 16.4738, lng: 102.8290 }, desc: 'บริการทันตกรรมสำหรับนักศึกษา/บุคลากร' },
  { id: 'health-center', title: 'ศูนย์สุขภาพนักศึกษา', category: 'HEALTH', position: { lat: 16.4686, lng: 102.8215 }, desc: 'บริการตรวจรักษาเบื้องต้น' },

  { id: 'stadium', title: 'สนามกีฬา/สระว่ายน้ำ', category: 'SPORT', position: { lat: 16.4805, lng: 102.8237 }, desc: 'ออกกำลังกาย/ว่ายน้ำ' },
  { id: 'football', title: 'สนามฟุตบอล', category: 'SPORT', position: { lat: 16.4798, lng: 102.8260 }, desc: 'สนามกีฬากลางแจ้ง' },
  { id: 'bike-park', title: 'จุดจอดจักรยาน', category: 'SPORT', position: { lat: 16.4760, lng: 102.8208 }, desc: 'สนับสนุนการเดินทางด้วยจักรยาน' },

  { id: 'main-gate', title: 'ประตูหลัก มข.', category: 'SERVICE', position: { lat: 16.4738, lng: 102.8109 }, desc: 'จุดนัดพบ/เดินทาง' },
  { id: 'registrar', title: 'สำนักทะเบียน', category: 'SERVICE', position: { lat: 16.4719, lng: 102.8216 }, desc: 'งานทะเบียน/เอกสารนักศึกษา' },
  { id: 'student-affairs', title: 'กองพัฒนานักศึกษา', category: 'SERVICE', position: { lat: 16.4682, lng: 102.8220 }, desc: 'กิจกรรมนักศึกษา/ทุนการศึกษา' },
  { id: 'admission', title: 'ศูนย์ประชุมกาญจนาภิเษก', category: 'SERVICE', position: { lat: 16.4769, lng: 102.8129 }, desc: 'จัดงานมหกรรม/รับปริญญา' },
  { id: 'post', title: 'ไปรษณีย์ มข.', category: 'SERVICE', position: { lat: 16.4712, lng: 102.8202 }, desc: 'บริการไปรษณีย์/พัสดุ' },
  { id: 'bank', title: 'ธนาคารในมหาวิทยาลัย', category: 'SERVICE', position: { lat: 16.4716, lng: 102.8210 }, desc: 'ธุรกรรมการเงิน' },

  { id: 'bus-hub', title: 'จุดจอดรถ KKU Transit', category: 'TRANSIT', position: { lat: 16.4752, lng: 102.8178 }, desc: 'จุดเชื่อมต่อสายรถราง' },
  { id: 'bus-complex', title: 'ป้ายรถ คอมเพล็กซ์', category: 'TRANSIT', position: { lat: 16.4801, lng: 102.8232 }, desc: 'ป้ายรถใกล้โรงอาหารคอมเพล็กซ์' },
  { id: 'bus-huso', title: 'ป้ายรถ โซนมนุษยฯ', category: 'TRANSIT', position: { lat: 16.4688, lng: 102.8273 }, desc: 'ป้ายรถใกล้คณะมนุษยฯ' },
  { id: 'bus-lib', title: 'ป้ายรถ หอสมุดกลาง', category: 'TRANSIT', position: { lat: 16.4745, lng: 102.8184 }, desc: 'ป้ายรถหน้าหอสมุด' },
]

