
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Đánh giá sức khỏe tinh thần</h1>
        <p className="text-gray-600 mb-8">
          Bài kiểm tra này sẽ giúp bạn đánh giá trạng thái sức khỏe tinh thần hiện tại của mình. 
          Gồm 10 câu hỏi và mất khoảng 2 phút để hoàn thành.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Link 
            to="/quiz" 
            className="bg-quiz-blue text-white px-8 py-4 rounded-full inline-block font-medium hover:bg-opacity-90 transition-all"
          >
            Bắt đầu bài kiểm tra
          </Link>
          <Link 
            to="/register" 
            className="bg-white text-quiz-blue border border-quiz-blue px-8 py-4 rounded-full inline-block font-medium hover:bg-quiz-light-blue transition-all"
          >
            Đăng ký tài khoản
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
