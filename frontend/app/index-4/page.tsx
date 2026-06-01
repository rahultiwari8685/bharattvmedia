import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/home-4/Section1";
import Section2 from "@/components/sections/home-4/Section2";
import Section3 from "@/components/sections/home-4/Section3";
import Section4 from "@/components/sections/home-4/Section4";
import Section5 from "@/components/sections/home-4/Section5";
import Section6 from "@/components/sections/home-4/Section6";
export default function Home_4() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 display="d-block" />
                <Section6 />
            </Layout>
        </>
    );
}
