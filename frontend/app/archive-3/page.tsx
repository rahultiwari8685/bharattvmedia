import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/archive-3/Section1";
import Section3 from "@/components/sections/home-4/Section6";

interface PageProps {
    searchParams?: Promise<{ page?: string }>;
}

export default function Archive_3({ searchParams }: PageProps) {
    return (
        <>
            <Layout headerStyle={2} footerStyle={4}>
                <Breadcumb page_current="Trends" title="Trends" count_articles="85" description="Journey across the globe to uncover the stories, traditions, and beauty that shape our shared human experience." />
                <Section1 searchParams={searchParams} />
                <Section3 />
            </Layout>
        </>
    );
}
