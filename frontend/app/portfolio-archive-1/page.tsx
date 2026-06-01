import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/portfolio-archive-1/Section1";
import Section6 from "@/components/sections/home-4/Section6";

interface PageProps {
    searchParams?: Promise<{
        page?: string;
        view?: string;
    }>;
}

export default async function PortfolioArchive1({ searchParams }: PageProps) {
    const resolvedSearchParams = await searchParams;

    return (
        <>
            <Layout headerStyle={2} footerStyle={4}>
                <Section1 searchParams={resolvedSearchParams || {}} />
                <Section6 />
            </Layout>
        </>
    );
}
