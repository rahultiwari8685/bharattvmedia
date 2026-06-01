import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/home/Section9";
import Section2 from "@/components/sections/home-3/Section1";
import Section3 from "@/components/sections/home-2/Section6";
import Section4 from "@/components/sections/home-3/Section2";
import Section5 from "@/components/sections/home-3/Section3";
import Section6 from "@/components/sections/home-3/Section4";
export default function Home_3() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Section1 displayBtn="d-flex" />
                <Section2 />
                <Section3 blockForYou="d-none" blockTopTrending="d-block" />
                <Section4 />
                <Section5 />
                <Section6 />
            </Layout>
        </>
    );
}
