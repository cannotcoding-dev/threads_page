export default function Terms() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">서비스 이용 약관</h1>
                <p className="text-gray-600 mb-8">
                    최종 업데이트일: 2025년 5월 24일
                </p>
                <p className="text-gray-600 mb-8">
                    본 약관은 본 서비스(이하 &quot;서비스&quot;)를 운영하는 운영자(이하 &quot;회사&quot;)와 서비스를 이용하는 이용자(이하 &quot;이용자&quot;) 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제1조 (목적)</h2>
                    <p className="text-gray-600">
                        이 약관은 회사가 제공하는 자동 스레드 포스팅 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정합니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제2조 (정의)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>&quot;서비스&quot;란 이용자가 설정한 조건에 따라 AI 기반으로 생성된 콘텐츠를 지정된 시간에 Threads(또는 Meta 플랫폼 등)에 자동 게시하는 기능을 말합니다.</li>
                        <li>&quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 개인 또는 법인을 의미합니다.</li>
                        <li>&quot;AI 콘텐츠&quot;란 OpenAI API를 통해 자동 생성된 텍스트 데이터를 말합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제3조 (약관의 효력 및 변경)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>본 약관은 서비스 초기 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</li>
                        <li>회사는 관련 법령을 위배하지 않는 범위 내에서 약관을 변경할 수 있으며, 변경 시 최소 7일 전에 공지합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제4조 (이용계약의 체결)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>이용자는 Meta API 연동 등 회사가 정한 절차에 따라 본 약관에 동의함으로써 서비스 이용 계약이 체결됩니다.</li>
                        <li>회사는 특정 이용자의 이용을 제한할 수 있으며, 사유가 있는 경우 사전 통보 없이 이용을 중지시킬 수 있습니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제5조 (서비스의 내용)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>본 서비스는 OpenAI GPT 모델을 사용해 이용자가 설정한 주제(예: 바이브 코딩)에 따라 콘텐츠를 자동 생성합니다.</li>
                        <li>생성된 콘텐츠는 Meta Threads API(또는 관련 플랫폼 API)를 통해 이용자의 계정에 자동 업로드됩니다.</li>
                        <li>서비스는 설정된 일정에 따라 자동 수행되며, 생성된 콘텐츠는 이용자의 책임 하에 업로드됩니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제6조 (이용자의 책임)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>이용자는 본인의 계정 및 인증 정보를 안전하게 관리할 책임이 있습니다.</li>
                        <li>자동 생성된 콘텐츠가 외부에 게시될 경우, 그 내용에 대한 최종 책임은 이용자에게 있습니다.</li>
                        <li>이용자는 서비스 이용 시 불법, 비윤리적, 혐오적 콘텐츠가 생성되거나 게시되지 않도록 설정 및 모니터링할 책임이 있습니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제7조 (회사의 책임 제한)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>회사는 AI가 생성한 콘텐츠의 정확성, 적절성, 타당성에 대해 보장하지 않습니다.</li>
                        <li>이용자의 설정 오류, 인증 정보 유출, API 제한 등으로 인해 발생하는 문제에 대해 회사는 책임을 지지 않습니다.</li>
                        <li>Meta API 또는 OpenAI API의 제한, 오류, 정책 변경에 따른 서비스 중단은 면책 사유에 해당합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제8조 (서비스 제공의 중지)</h2>
                    <p className="text-gray-600 mb-4">회사는 아래 사유 발생 시 서비스 제공을 일시 중지할 수 있습니다:</p>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>시스템 점검 또는 업그레이드</li>
                        <li>외부 API의 장애</li>
                        <li>법적 이슈 또는 위법 가능성 확인 시</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                        긴급한 경우 사전 통지 없이도 중지할 수 있습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제9조 (지적재산권)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>서비스 내 생성된 AI 콘텐츠의 1차 저작권은 회사 또는 OpenAI에 있으나, 이용자는 사용 목적에 따라 게시 및 활용할 수 있습니다.</li>
                        <li>이용자는 타인의 저작권, 초상권 등 권리를 침해하지 않도록 주의하여야 하며, 침해 시 법적 책임은 이용자에게 있습니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제10조 (계약 해지 및 서비스 탈퇴)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>이용자는 언제든지 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
                        <li>회사는 이용자의 약관 위반 시 사전 통보 없이 서비스 이용을 중단하거나 계약을 해지할 수 있습니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">제11조 (준거법 및 재판관할)</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>본 약관은 대한민국 법령에 따라 해석되고 적용됩니다.</li>
                        <li>서비스 이용과 관련하여 분쟁이 발생할 경우, 회사의 본사 소재지를 관할하는 법원을 1심 법원으로 합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">[부칙]</h2>
                    <p className="text-gray-600">
                        본 약관은 2025년 5월 24일부터 시행됩니다.
                    </p>
                </section>
            </div>
        </div>
    );
} 