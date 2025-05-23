import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            스레드 자동화로<br />
            소셜 미디어 관리의 혁신
          </h1>
          <p className="text-xl mb-8">
            AI 기반 자동화 도구로 스레드 마케팅을 더 스마트하게
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">자동 포스팅</h3>
              <p className="text-gray-600">AI가 최적의 시간에 자동으로 콘텐츠를 게시합니다.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">인사이트 분석</h3>
              <p className="text-gray-600">실시간 성과 분석으로 전략을 최적화합니다.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">스마트 예약</h3>
              <p className="text-gray-600">원하는 시간에 자동으로 게시물을 예약합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">지금 바로 시작하세요</h2>
          <p className="text-xl text-gray-600 mb-8">
            14일 무료 체험으로 스레드 자동화의 혜택을 경험해보세요
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            무료 체험 시작하기
          </button>
        </div>
      </section>
    </main>
  );
}
