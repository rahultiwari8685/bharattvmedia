import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/archive-1/Section1";
import Section2 from "@/components/sections/home-4/Section6";

interface PageProps {
  searchParams?: Promise<{ page?: string }>;
}

export default function Archive_1({ searchParams }: PageProps) {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        {/* <Breadcumb page_current="Travel & Culture" title="Travel & Culture" count_articles="187 articles" description="Journey across the globe to uncover the stories, traditions, and beauty that shape our shared human experience." /> */}
        <Section1 searchParams={searchParams} />
        <Section2 />
      </Layout>
    </>
  );
}
