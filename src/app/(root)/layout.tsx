import Layout from "../components/layout/Layout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
