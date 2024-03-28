
export default function Home() {
      // 회원가입 양식 처리 로직 추가
    return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">회원가입</h1>
        <form>
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">이메일:</label>
            <input type="email" id="email" name="email" required className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">비밀번호:</label>
            <input type="password" id="password" name="password" required className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700">비밀번호 확인:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600 hover:bg-blue-600">회원가입</button>
        </form>
        </div>
    </div>
    );
}
