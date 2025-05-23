export default function DeleteMyData() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">데이터 삭제 요청 안내</h1>

                <div className="prose max-w-none">
                    <p className="text-gray-600 mb-8">
                        저희 서비스를 통해 수집된 귀하의 개인정보 삭제를 원하시는 경우, 아래 이메일로 요청해 주세요.
                        개인정보 보호법에 따라 요청하신 데이터는 영구적으로 삭제되며, 복구가 불가능합니다.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg mb-8">
                        <p className="text-xl font-semibold text-blue-600 mb-2">
                            📧 daniel@dothegy.org
                        </p>
                        <p className="text-gray-600 text-sm">
                            평일 오전 9시 - 오후 6시 사이에 요청해 주시면 더 빠른 처리가 가능합니다.
                        </p>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">요청 시 필요한 정보</h2>
                        <ul className="list-disc pl-6 text-gray-600 mb-4">
                            <li>귀하의 이름 (또는 사용자 계정명)</li>
                            <li>가입 시 사용한 이메일 주소</li>
                            <li>Meta (Threads/Facebook/Instagram) 사용자 ID (가능한 경우)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">처리 절차</h2>
                        <ol className="list-decimal pl-6 text-gray-600 mb-4">
                            <li>요청 접수 확인 메일 발송 (1-2일 이내)</li>
                            <li>데이터 삭제 처리 (최대 7일 이내)</li>
                            <li>삭제 완료 확인 메일 발송</li>
                        </ol>
                    </section>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">주의사항</h3>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>데이터 삭제 후에는 서비스 이용이 불가능합니다.</li>
                            <li>법적 보관 의무가 있는 정보는 예외적으로 보관될 수 있습니다.</li>
                            <li>삭제된 데이터는 복구가 불가능하니 신중하게 결정해 주세요.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 