
export interface Option {
  text: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface ResultCategory {
  minScore: number;
  maxScore: number;
  color: string;
  emoji: string;
  title: string;
  description: string;
  advice: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Buổi sáng bạn thức dậy cảm thấy…",
    options: [
      { text: "Tỉnh táo, háo hức", points: 0 },
      { text: "Tạm ổn", points: 1 },
      { text: "Mệt mỏi", points: 2 },
      { text: "Không muốn rời giường", points: 3 }
    ]
  },
  {
    id: 2,
    text: "Trong tuần qua, bạn đã cười to…",
    options: [
      { text: "≥ 3 lần/ngày", points: 0 },
      { text: "1–2 lần/ngày", points: 1 },
      { text: "Vài lần/tuần", points: 2 },
      { text: "Hầu như không", points: 3 }
    ]
  },
  {
    id: 3,
    text: "Khả năng tập trung khi làm việc/học",
    options: [
      { text: "Dễ dàng duy trì > 30 phút", points: 0 },
      { text: "Đôi lúc xao nhãng", points: 1 },
      { text: "Khó giữ 10 phút liên tục", points: 2 },
      { text: "Gần như không thể", points: 3 }
    ]
  },
  {
    id: 4,
    text: "Cảm giác lo lắng vô cớ",
    options: [
      { text: "Không có", points: 0 },
      { text: "Thỉnh thoảng", points: 1 },
      { text: "Thường xuyên", points: 2 },
      { text: "Suốt cả ngày", points: 3 }
    ]
  },
  {
    id: 5,
    text: "Giấc ngủ của bạn",
    options: [
      { text: "7–9 giờ, ngon giấc", points: 0 },
      { text: "6–7 giờ, tỉnh 1 lần", points: 1 },
      { text: "< 6 giờ hoặc khó ngủ > 30′", points: 2 },
      { text: "Trằn trọc nhiều giờ hoặc thức giấc sớm", points: 3 }
    ]
  },
  {
    id: 6,
    text: "Mối quan hệ với người thân",
    options: [
      { text: "Thân thiết, chia sẻ thường xuyên", points: 0 },
      { text: "Có lúc căng thẳng nhẹ", points: 1 },
      { text: "Lảng tránh trò chuyện", points: 2 },
      { text: "Xung đột/không nói chuyện", points: 3 }
    ]
  },
  {
    id: 7,
    text: "Thói quen ăn uống",
    options: [
      { text: "Đủ bữa, đủ rau", points: 0 },
      { text: "Bỏ 1 bữa nhỏ", points: 1 },
      { text: "Ăn thất thường, nhiều fastfood", points: 2 },
      { text: "Bỏ > 1 bữa/ngày hoặc ăn vô độ", points: 3 }
    ]
  },
  {
    id: 8,
    text: "Hoạt động thể chất",
    options: [
      { text: "≥ 30 phút/ngày", points: 0 },
      { text: "15–30 phút/ngày", points: 1 },
      { text: "1–2 buổi/tuần", points: 2 },
      { text: "Không vận động", points: 3 }
    ]
  },
  {
    id: 9,
    text: "Tự đánh giá mức năng lượng (0–10)",
    options: [
      { text: "8–10 đ", points: 0 },
      { text: "6–7 đ", points: 1 },
      { text: "4–5 đ", points: 2 },
      { text: "0–3 đ", points: 3 }
    ]
  },
  {
    id: 10,
    text: "Bạn nghĩ gì về tương lai gần (3 tháng)?",
    options: [
      { text: "Nhiều hứng khởi", points: 0 },
      { text: "Khá lạc quan", points: 1 },
      { text: "Chưa hình dung", points: 2 },
      { text: "Bi quan/không kỳ vọng", points: 3 }
    ]
  }
];

export const resultCategories: ResultCategory[] = [
  {
    minScore: 0,
    maxScore: 7,
    color: "green",
    emoji: "🟢",
    title: "Xanh",
    description: "Tinh thần vững vàng",
    advice: "Duy trì lối sống lành mạnh"
  },
  {
    minScore: 8,
    maxScore: 14,
    color: "yellow",
    emoji: "🟡",
    title: "Vàng",
    description: "Có vài dấu hiệu căng thẳng",
    advice: "Thêm nghỉ ngơi, trò chuyện, thử thiền/viết nhật ký"
  },
  {
    minScore: 15,
    maxScore: 21,
    color: "orange",
    emoji: "🟠",
    title: "Cam",
    description: "Nguy cơ cao mệt mỏi hoặc lo âu",
    advice: "Hẹn gặp chuyên gia, chia sẻ với người tin cậy, giảm tải công việc"
  },
  {
    minScore: 22,
    maxScore: 30,
    color: "red",
    emoji: "🔴",
    title: "Đỏ",
    description: "Báo động đỏ",
    advice: "Nên liên hệ bác sĩ/nhà tâm lý sớm; nếu có ý nghĩ tự hại, gọi 115 hoặc Tổng đài 1900 9254 ngay"
  }
];

export function getResultCategory(score: number): ResultCategory {
  return resultCategories.find(
    category => score >= category.minScore && score <= category.maxScore
  ) || resultCategories[0];
}
