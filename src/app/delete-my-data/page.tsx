export default function DeleteMyData() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">데이터 삭제 요청 안내</h1>

                <div className="prose max-w-none">
                    <p className="text-gray-600 mb-8">
                        저희 서비스를 통해 수집된 귀하의 개인정보 삭제를 원하시는 경우, 아래 이메일로 요청해 주세요.
                    </p>

                    <p className="text-xl font-semibold text-blue-600 mb-8">
                        📧 daniel@dothegy.org
                    </p>

                    <p className="text-gray-600 mb-4">
                        요청 시 다음 정보를 함께 제공해 주세요:
                    </p>

                    <ul className="list-disc pl-6 text-gray-600 mb-8">
                        <li>귀하의 이름 (또는 사용자 계정명)</li>
                        <li>가입 시 사용한 이메일 주소</li>
                        <li>Meta (Threads/Facebook/Instagram) 사용자 ID (가능한 경우)</li>
                    </ul>

                    <p className="text-gray-600">
                        확인 후 최대 7일 이내에 데이터를 삭제해 드리며, 완료 여부를 메일로 안내드리겠습니다.
                    </p>
                </div>
            </div>
        </div>
    );
} 