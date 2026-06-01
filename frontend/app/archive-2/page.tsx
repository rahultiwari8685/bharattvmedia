import Layout from "@/components/layout/Layout";

import Breadcumb from "@/components/elements/breadcumb";
import Section1 from "@/components/sections/archive-2/Section1";
import Section2 from "@/components/sections/home-4/Section5";
import Ads from "@/components/elements/ads";
import Section3 from "@/components/sections/home-4/Section6";
export default function Archive_2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={4}>
                <Breadcumb page_current="Trends" title="Trends" count_articles="85" description="Journey across the globe to uncover the stories, traditions, and beauty that shape our shared human experience." />
                <Section1 />
                <Section2 display="d-none" />
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-12">
                            <Ads />
                        </div>
                    </div>
                </div>
                <Section3 />
            </Layout>
        </>
    );
}
