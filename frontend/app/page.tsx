import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/home-2/Section1";
import Section2 from "@/components/sections/home-2/Section2";
import Section3 from "@/components/sections/home-2/Section3";
import Section4 from "@/components/sections/home-2/Section4";
import Section5 from "@/components/sections/home-2/Section5";
import Section6 from "@/components/sections/home-2/Section6";
import Section7 from "@/components/sections/home-2/Section7";
import Section8 from "@/components/sections/home-2/Section8";
export default function Home_2() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Section1 />
        <Section2 />
        <Section3 />
        {/* <Section4 /> */}
        <Section5 />
        {/* <Section6 blockForYou="d-block" blockTopTrending="d-none" />
        <Section7 />
        <Section8 /> */}
      </Layout>
    </>
  );
}
