export default function Privacy() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">개인정보 처리방침</h1>
                <p className="text-gray-600 mb-8">
                    최종 업데이트일: 2025년 5월 24일
                </p>
                <p className="text-gray-600 mb-8">
                    본 서비스(이하 "서비스")는 사용자의 개인정보를 소중히 여기며, 『개인정보 보호법』 등 관련 법령을 준수합니다.
                    이 개인정보처리방침은 사용자가 제공하거나 생성한 정보가 어떻게 수집, 이용, 저장, 보호되는지를 설명합니다.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. 수집하는 개인정보 항목</h2>
                    <p className="text-gray-600 mb-4">
                        서비스는 자동 스레드 콘텐츠 생성을 위해 아래와 같은 최소한의 정보를 수집하거나 처리할 수 있습니다.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>사용자 식별 정보 (Meta 사용자 ID 또는 내부 사용자 토큰)</li>
                        <li>자동화된 스레드 콘텐츠 (GPT 기반 생성 텍스트)</li>
                        <li>콘텐츠 생성 및 업로드 시간 정보 (로그 용도)</li>
                        <li>인증 관련 정보 (Meta API Access Token 등, 서버 내 보안 저장)</li>
                    </ul>
                    <p className="text-gray-600 italic">
                        ※ 본 서비스는 사용자의 이름, 이메일, 전화번호 등 민감한 개인정보를 수집하지 않습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. 개인정보 수집 방법</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Meta API 인증 과정에서 사용자 ID 및 Access Token을 수신합니다.</li>
                        <li>사용자가 설정한 자동화 시간에 OpenAI API를 통해 텍스트가 생성되며, Meta Threads API를 통해 해당 콘텐츠를 업로드합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. 개인정보 이용 목적</h2>
                    <p className="text-gray-600 mb-4">수집된 정보는 다음 목적을 위해 사용됩니다:</p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>사용자의 인증 및 콘텐츠 업로드 수행</li>
                        <li>자동화된 스레드 게시 기능 제공</li>
                        <li>오류 기록 및 서비스 개선을 위한 내부 분석</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. 개인정보 보유 및 이용기간</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>사용자의 Meta 인증 토큰은 서비스 이용 기간 동안 안전하게 저장되며, 사용자 요청 시 즉시 삭제됩니다.</li>
                        <li>자동 생성된 콘텐츠 로그는 서비스 운영 및 품질 향상을 위해 30일간 보관 후 파기됩니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. 개인정보의 제3자 제공</h2>
                    <p className="text-gray-600">
                        본 서비스는 어떠한 개인정보도 제3자에게 제공하지 않습니다. 단, 법령에 따라 요청이 있는 경우 예외적으로 제공할 수 있습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. 개인정보의 안전성 확보 조치</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Access Token 및 내부 로그는 암호화된 방식으로 안전하게 저장됩니다.</li>
                        <li>외부 접근이 불가능한 서버 내에서만 자동화 처리가 이루어집니다.</li>
                        <li>인증 및 접근 권한 관리는 최소 권한 원칙에 따라 수행됩니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. 사용자 권리와 행사 방법</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>사용자는 본인의 인증 정보 및 업로드 이력을 요청하거나 삭제할 수 있습니다.</li>
                        <li>모든 요청은 [이메일: contact@yourdomain.com] 또는 설정 페이지를 통해 가능합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">8. 담당자 연락처</h2>
                    <p className="text-gray-600">
                        개인정보 보호 책임자: 홍길동<br />
                        이메일: contact@yourdomain.com
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">9. 정책 변경 고지</h2>
                    <p className="text-gray-600">
                        본 방침이 변경될 경우, 변경사항은 서비스 웹사이트에 게시됩니다.
                    </p>
                </section>
            </div>
        </div>
    );
} 