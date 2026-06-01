import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/search-results/Section1";
import Section2 from "@/components/sections/archive-4/Section1";
import Section3 from "@/components/sections/home-4/Section6";
import Ads from "@/components/elements/ads";
export default function Page_Search_Results() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={4}>
                <Section1 />
                <Section2 />
                <div className="container pt-70">
                    <div className="row">
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
